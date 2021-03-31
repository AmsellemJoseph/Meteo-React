import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 180,
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        height: 28,
        margin: 4,
    },
}));

export default function Search({ subSearch }) {
    const classes = useStyles();

    const [city, setCity] = useState('');

    const onChange = (e) => {
        setCity(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (!city) {
            alert("erreur");
            return
        }
        subSearch({ city })
        setCity('');

    }

    return (
        <Paper component="form" className={classes.root} onSubmit={onSubmit}>
            <InputBase
                className={classes.input}
                placeholder="Search a city"
                inputProps={{ 'aria-label': 'Search a city' }}
                onChange={onChange}
            />
            <IconButton type="submit" className={classes.iconButton} aria-label="search" >
                <SearchIcon />
            </IconButton>
        </Paper>
    );
}
