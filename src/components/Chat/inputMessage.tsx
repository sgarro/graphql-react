import { useMessageSentSubscriptionSubscription, useCreateChatMutationMutation } from "../../generated/graphql";
import React, { Component, useState } from 'react';
import { TextField, makeStyles, Theme, createStyles, IconButton } from "@material-ui/core";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import MusixMatchContainer from "../MusixMatch/MuixmatchContainer";

const InputMessage = () => {
    const [content, setContent] = useState("");

    const [addMessage] = useCreateChatMutationMutation()

    const useStyles = makeStyles((theme: Theme) =>
      createStyles({
        root: {
          // backgroundColor: "#ffe5d9",
          // padding: theme.spacing(1),
          margin: theme.spacing(2)
        },
      }),
    );
    const _createChat = async e => {
      if (e.key === 'Enter' && !(regEx.test(content))) {
        const chat = {
          message: content,
          extraInfo: {
            type: 'message'
          }
        }
         await addMessage({
           variables: { content: JSON.stringify(chat) }
         });
         setContent( '' );
       }
     }; 
     const classes = useStyles();
     const regEx = new RegExp('(^\/mxm)')
     console.log("REGEX", regEx.test(content))
    return (
      <React.Fragment>
      {
        (regEx.test(content)) ? <MusixMatchContainer query={content} /> : ""
      }
      <TextField
      className={classes.root}
          id="writeMessage"
          label="write a message"
          variant="outlined"
          value={content}
          color="secondary"
          onChange={e => setContent(e.target.value)}
          onKeyPress={_createChat}
          >
          <IconButton disabled={(regEx.test(content))} aria-label="login" color="primary" onClick={_createChat}>
          <ArrowForwardIcon />
        </IconButton>
        </TextField>
      </React.Fragment>
    )
    
  }

export default InputMessage