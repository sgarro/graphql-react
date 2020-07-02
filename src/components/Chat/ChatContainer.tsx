import {
  useMessageSentSubscriptionSubscription,
  useAllChatsQueryQuery,
} from "../../generated/graphql";
import React, { useRef } from "react";
import Chatbox from "./Chatbox";
import { Paper, Chip, useTheme } from "@material-ui/core";
import { Skeleton, Alert } from "@material-ui/lab";
import ErrorAlert from "../Error";
const ChatContainer = (): any => {
  const theme = useTheme();
  const skeleton = (
    <div style={{ display: "flow-root" }}>
      <Paper
        elevation={3}
        style={{
          backgroundColor: theme.palette.primary.main,
          margin: theme.spacing(2),
          width: "40%",
          padding: theme.spacing(1),
        }}
      >
        <div className="chat-box">
          <div className="chat-message">
            <Chip
              icon={
                <Skeleton
                  animation="wave"
                  variant="circle"
                  height={20}
                  width={20}
                  style={{ marginRight: 6 }}
                />
              }
              label={<Skeleton animation="wave" width={280} height={20} />}
              color={"primary"}
            />
            <p style={{ marginLeft: 5 }}>
              <Skeleton
                animation="wave"
                variant="rect"
                height={100}
                style={{ marginBottom: 6 }}
              />
            </p>
          </div>
        </div>
      </Paper>
    </div>
  );

  let { data, error, loading } = useAllChatsQueryQuery();
  const initialMessages = data ? data.chats : [];
  const resp = useMessageSentSubscriptionSubscription();
  const messagesEndRef = useRef(null);
  if (resp.data) {
    const newMessages = resp.data.messageSent as any;
    newMessages.isNew = true;
    initialMessages.push(newMessages);
    setTimeout(() => {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }, 51);
  }
  if (loading) {
    return skeleton;
  }

  if (error || !data) {
    console.log(error.message);
    return <ErrorAlert error={error.message} />;
  }

  return (
    <div style={{ display: "flow-root" }}>
      {initialMessages.map((chat, index) => {
        return <Chatbox key={chat.id} message={chat} index={index} />;
      })}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default ChatContainer;
