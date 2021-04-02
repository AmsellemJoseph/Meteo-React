import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Meteo from '../Meteo'
import Carte from '../Carte'
import Weekly from '../Weekly'
import LogoTemp from '../LogoTemp'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function CardMeteo({ ville, pays, temp, coord, daily, logo }) {


  const classes = useStyles();
  const temperature = Math.trunc(temp);
  return (
    <Card className={classes.root} id="containerCardMeteo">
      <CardContent>
        <div className='meteoCard'>
          <Meteo ville={ville} pays={pays} temp={temperature} />
        </div>
        <div className='carteCard'>
          <Carte coord={coord} />
        </div>
        <div className="weeklyCard">
          <Weekly daily={daily} />
        </div>
        <div className="logoCard">
          <LogoTemp logo={logo} />
        </div>
      </CardContent>
      {/* <div className='favoriteCard'>
        {favorite.isFavorite?(<FavoriteIcon style={{color:'red'}} onClick={()=>setFavorite({isFavorite:!favorite.isFavorite})}/>):<FavoriteBorderIcon  onClick={()=>setFavorite({isFavorite:!favorite.isFavorite})}/>}

      </div> */}
    </Card>
  );
}

