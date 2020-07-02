import React, { Component, useState, useEffect } from 'react';
import { Card, ListItem, ListItemAvatar, ListItemText, makeStyles, Theme, createStyles, List, Popover, ListItemIcon, Divider, Slide } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import axios from 'axios';

import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import { useCreateChatMutationMutation } from '../../generated/graphql';
import ErrorAlert from '../Error';


interface Props {
  query: string;
}

// const endopoint= 'https://api.musixmatch.com/ws/1.1/track.search?format=jsonp&callback=callback&q_lyrics=some%20lyrics&quorum_factor=1&apikey=70da04216e29f97d49edf5577058d0d8'
// const endopoint= 'http://api.musixmatch.com/ws/1.1/track.search?q_artist=justin bieber&page_size=3&page=1&s_track_rating=desc&apikey=70da04216e29f97d49edf5577058d0d8'

const MusixMatchContainer: React.FC<Props> = ({ query }) => {
  let search = query.replace('/mxm', '').trim()
  
  const [data, setData] = useState({ track_list: [] })
  const [lyrics, setLyrics] = useState("")
  const [error, setError] = useState("")
  const [open, setOpen] = useState(false)
  const [isError, setIsError] = useState(false)

  // const [anchorEl, setAnchorEl] = React.useState(null);
  const [addMessage] = useCreateChatMutationMutation()

  const searchpoint = `http://api.musixmatch.com/ws/1.1/track.search?q_lyrics=${search}&page_size=5&page=1&s_track_rating=desc&apikey=70da04216e29f97d49edf5577058d0d8`

  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        ...theme.typography.button,
        backgroundColor: "#CEB7B3",
        padding: theme.spacing(1),
        margin: theme.spacing(2),
      },
      card: {
        backgroundColor: theme.palette.primary.main,
        margin: theme.spacing(2),
        width: "40%",
        padding: theme.spacing(1),
        color: "black"
      },
    })
  );
  const classes = useStyles();
  let tracks;
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        searchpoint,
      );
      if (result.data.message.header.status_code === 200) {
        const body = result.data.message.body
        if (body.track_list) {
          setData(body)
        }
      }

      else{
          setIsError(true)
          setError(`error: ${result.data.message.header.status_code}`)
          return
      }
    };
    if (search.length > 0)
      fetchData();
  }, [search]);

  const handleListItemClick = async (event, track_id) => {
    event.persist()
    const trackpoint = `http://api.musixmatch.com/ws/1.1/track.lyrics.get?commontrack_id=${track_id}&apikey=70da04216e29f97d49edf5577058d0d8`
    const result = await axios(
      trackpoint,
    );
    const lyrics = result.data.message.body.lyrics
    

    
    setOpen(true);
    if (lyrics) {
      
      const arrayOfLines = lyrics.lyrics_body.match(/[^\r\n]+/g);
      const find = arrayOfLines.find(line => {
        
        return line.toLowerCase().match(search)
      })
      setLyrics(find)
      
    }
  };

  const handlePopoverOpen = (event, track_id) => {
    setOpen(true);
    handleListItemClick(event, track_id)
  };

  const handlePopoverClose = () => {
    setOpen(false)

    // setAnchorEl(null);
  };

  const handleItemClick = async (event, trackId) => {
    const trackpoint = `http://api.musixmatch.com/ws/1.1/track.get?track_id=${trackId}&apikey=70da04216e29f97d49edf5577058d0d8`
    // should use the result from here
    const result = await axios(
      trackpoint,
    );
    if (result.data.message.header.status_code === 200) {
      const track = result.data.message.body.track
      const trackInfo = {
        message: lyrics,
        extraInfo: {
          type: 'musixmatch',
          trackName: track.track_name,
          trackArtist: track.artist_name,
          albumCover: track.album_coverart_500x500,
          albumName: track.album_name
        }
  
      }
      await addMessage({
        variables: { content: JSON.stringify(trackInfo) }
      });
    
    }

    else{
      setIsError(true)
      setError(`error: ${result.data.message.header.status_code}`)
      return
    }
    
  };


  return (
    <React.Fragment>
      {
        isError?
        <ErrorAlert error={error} />

        :
      
      <div className={classes.root}>
        <List component="nav" dense={true} >
          {
            data.track_list.map((track) => {
              track = track.track
              return (
                <ListItem button key={track.track_id}
                  // onMouseEnter={handlePopoverOpen}
                  onMouseLeave={handlePopoverClose}

                  onClick={(event) => handleItemClick(event, track.track_id)}
                  onMouseEnter={(event) => handleListItemClick(event, track.commontrack_id)}

                >

                  <ListItemText
                    primary={
                      track.track_name
                    }
                    secondaryTypographyProps={{ component: "span" }}
                    secondary={
                      track.artist_name
                    }
                  />
                </ListItem>
              )

            })}
          {(open) ?

            <Slide direction={"right"} in={true} timeout={100} mountOnEnter unmountOnExit>
              <Card className={classes.card}>
                <p> Preview:</p>
                {lyrics}
              </Card></Slide> : null}
        </List>
      </div>
    }
    </React.Fragment>


  )
}

export default MusixMatchContainer;