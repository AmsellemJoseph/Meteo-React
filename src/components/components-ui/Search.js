import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
// import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
// import DirectionsIcon from '@material-ui/icons/Directions';
// import ApiMeteo from '../ApiMeteo'

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 400,
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

    const [search, setSearch] = useState("");
    const [city, setCity] = useState('');



    const onSubmit = (e) => {
        e.preventDefault();
        if(!city){
            alert("erreur");
            return
        }
        // setCity(search);
        subSearch({ city })
        // console.log("La ville depuis onsubmit de search est "+city);
        setSearch('');

    }

    return (
        <Paper component="form" className={classes.root} onSubmit={onSubmit}>
            {/* <IconButton className={classes.iconButton} aria-label="menu">
      </IconButton> */}

            <InputBase
                className={classes.input}
                placeholder="Search Google Maps"
                inputProps={{ 'aria-label': 'search google maps' }}
                onChange={(e)=>setCity(e.target.value)}
            />
            <IconButton type="submit" className={classes.iconButton} aria-label="search" >
                <SearchIcon />
            </IconButton>
        </Paper>
    );
}
