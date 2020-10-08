import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import avatarImg from "../assets/Decio_4x4.jpg"

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    large: {
        width: theme.spacing(10),
        height: theme.spacing(10),
    },
}));

export default function ImageAvatar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Avatar alt="Decio Soares" src={avatarImg} className={classes.large} />
        </div>
    );
}
