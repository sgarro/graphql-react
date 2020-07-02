import {
  useUsersOnlineSubscriptionSubscription,
  useCreateChatMutationMutation,
  useAllUsersQueryQuery,
} from "../../generated/graphql";
import React, { Component, useState } from "react";
import {
  Card,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  Chip,
  ListItemText,
} from "@material-ui/core";
import classes from "*.module.css";
import ImageIcon from "@material-ui/icons/Image";
import FaceIcon from "@material-ui/icons/Face";
import Skeleton from "@material-ui/lab/Skeleton";

import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import ErrorAlert from "../Error";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      ...theme.typography.button,
      backgroundColor: "#CEB7B3",
      padding: theme.spacing(1),
      margin: theme.spacing(2),
    },
  })
);
const UserContainer = () => {
  const classes = useStyles();

  const skeleton = (
    <Card className={classes.root}>
      <ListItem>
        <ListItemAvatar>
          <Skeleton animation="wave" variant="circle" width={40} height={40} />
        </ListItemAvatar>
        <ListItemText
          primary={
            <Skeleton
              animation="wave"
              height={10}
              width="80%"
              style={{ marginBottom: 6 }}
            />
          }
          secondaryTypographyProps={{ component: "span" }}
          secondary={
            <Skeleton
              animation="wave"
              height={10}
              width="80%"
              style={{ marginBottom: 6 }}
            />
          }
        />
      </ListItem>
    </Card>
  );

  let { data, error, loading } = useAllUsersQueryQuery();
  let usersOnline = data ? data.usersOnline : [];
  const resp = useUsersOnlineSubscriptionSubscription();
  if (resp.data) {
    console.log("RESP", resp);
    usersOnline = resp.data.usersOnline;
  }
  if (loading) {
    return skeleton;
  }

  if (error || !data) {
    console.log(error.message);
    return <ErrorAlert error={error.message} />;
  }
  console.log("USERSONLINE", usersOnline)

  return (
    <List>
      {usersOnline.map((user) => {
        const chip = user.isOnline ? (
          <Chip icon={<FaceIcon />} label="Online" color="secondary" />
        ) : (
          <Chip icon={<FaceIcon />} label="Offline" color="primary" />
        );

        return (
          <Card className={classes.root} key={user.id}>
            <ListItem>
              <ListItemAvatar>
                <Avatar>{user.username[0]}</Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={user.username}
                secondaryTypographyProps={{ component: "span" }}
                secondary={<div>{chip}</div>}
              />
            </ListItem>
          </Card>
        );
      })}
    </List>
  );
};

export default UserContainer;
