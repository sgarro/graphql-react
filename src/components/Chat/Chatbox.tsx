import React from "react";
import FaceIcon from '@material-ui/icons/Face';
import { Paper, makeStyles, Theme, createStyles, Chip, useTheme, Slide, ListItemText, List, ListItemAvatar, Avatar, ListItem } from "@material-ui/core";
import { Store } from "../../context/context";
const Chatbox = ({ message, index }) => {
  const globalState = React.useContext(Store) as any;
  const { user } = globalState.state
  const isLeft = (user.user === message.from.username)
  const theme = useTheme()
  console.log("THEME", theme.palette.primary.main)
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        backgroundColor:
          isLeft
            ? theme.palette.primary.main
            : theme.palette.secondary.main,
        margin: theme.spacing(2),
        marginLeft: (isLeft) ? null : "58%",
        // float: isLeft ? null : "right",
        width: "40%",
        padding: theme.spacing(1),
        color: "black"
      },
      large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
        marginRight: theme.spacing(2)
      },
    })
  );

  const classes = useStyles();
  console.log(JSON.parse(message.content))
  const chatContent = JSON.parse(message.content)
  console.log(chatContent.message)
  return (
    <Slide direction={isLeft ? "right" : "left"} in={true} timeout={message.isNew ? 50 : 0} mountOnEnter unmountOnExit>

      <Paper elevation={3} className={classes.root}>
        <div className="chat-box">
          <div className="chat-message">
            <Chip
              icon={<FaceIcon />}
              label={message.from.username}
              color={isLeft
                ? "secondary" : "primary"}
            />
            {
              chatContent.extraInfo.type === 'musixmatch' ?
                <List>
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar variant="square" className={classes.large} alt={chatContent.extraInfo.trackName} src={chatContent.extraInfo.albumCover} />
                    </ListItemAvatar>
                    <ListItemText
                      primary={
                        chatContent.extraInfo.trackName
                      }
                      secondaryTypographyProps={{ component: "span" }}
                      secondary={
                        chatContent.extraInfo.trackArtist

                      }
                    /></ListItem></List>
                : null
            }
            <p style={{ marginLeft: 5 }}>{chatContent.message}</p>
            {chatContent.extraInfo.type === 'musixmatch' ? <i>powered by <a href="https://www.musixmatch.com/">Musixmatch</a></i> : null}
          </div>
        </div>
      </Paper>
    </Slide>
  );
};
export default Chatbox;
