import React, { useState, useEffect } from 'react'
import NavBar from './components/components-ui/NavBar'
import Search from './components/components-ui/Search'
import Home from './components/home/Home'
import Favori from './components/Favorite'
import HistoryModal from './components/components-ui/HistoryModal'
import FavoriteIcon from '@material-ui/icons/Favorite';
import Badge from '@material-ui/core/Badge';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import { Alert } from '@material-ui/lab';


const useStyles = makeStyles((theme) => ({

  title: {
    flexGrow: 1,
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  icon: {
    '&:hover': {
      backgroundColor: '#9FB1B9',
    }
  }
}));

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: 4,
    top: 8,
    backgroundColor: 'orange',
    color: 'black'
  },
}))(Badge);


const App = () => {



  const classes = useStyles();
  const [ville, setCity] = useState('Netanya');
  const searchCity = ({ city }) => {
    setCity('');
    setCity(city);
  }
  const [fav, setFav] = useState({ isFavorite: false });
  const [favorite, setFavorite] = useState({ isFavorite: false })
  const onClick = () => {
    setFavorite({ isFavorite: !favorite.isFavorite })
  }
  const [tailleFav, setTaillefav] = useState(localStorage.favorite ? JSON.parse(localStorage.favorite) : [])
  const [flag, setFlag] = useState(false);
  useEffect(() => {
    setFlag(false)
    setFavorite({ iseFavorite: false })
  }, [ville])
  useEffect(() => {
    setTaillefav(localStorage.favorite ? JSON.parse(localStorage.favorite) : [])
    if (favorite.isFavorite) {
      handleClick()
      setFlag(true)
    } else if (!favorite.isFavorite && flag) {
      handleClick()
    }


  }, [favorite])

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };


  const setFavori = () => {
    setFav({ isFavorite: !fav.isFavorite })
    if (fav.isFavorite) {
      handleClick()
    }
  }

  return (
    <div className="App">
      <div className='containerNav'>
        <div className='navBar'>
          <NavBar />
          <HistoryModal />
          <Snackbar
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            open={open}
            autoHideDuration={1000}
            onClose={handleClose}
            message="Added to your favorites">
            {favorite.isFavorite && flag ? (<Alert onClose={handleClose} severity="info">
              Added to your favorites
            </Alert>) : (<Alert onClose={handleClose} severity="info">
              Deleted from your favorites
            </Alert>)}
          </Snackbar>
          <div className="Favoriteicon">
            <StyledBadge badgeContent={tailleFav.length} color="primary">
              {fav.isFavorite ? <FavoriteIcon style={{ color: '#f1f1f1', fontSize: '50px', cursor: 'pointer' }} onClick={setFavori} /> :
                (<FavoriteIcon style={{ color: '#f1f1f1', fontSize: '50px', cursor: 'pointer' }} onClick={setFavori} />)}
            </StyledBadge>
          </div>
        </div>
        <div className='search'>
          <Search subSearch={searchCity} />
        </div>
      </div>
      <div className="containerMain">
        <div className='containerHome'>
          <Home city={ville} onClick={onClick} />
        </div>
        <div className='containerFav'>
          {fav.isFavorite ? <Favori fav={tailleFav} /> : null}
        </div>
      </div>
    </div>
  );
}

export default App;
