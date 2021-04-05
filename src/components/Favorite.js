import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AccordionFavorite from './components-ui/AccordionFavorite'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));

export default function Favorite({ fav }) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            {fav.map((favori, i) => {
                return (
                    <AccordionFavorite ville={favori.ville} key={i} />
                )
            })}

        </div>
    );
}
