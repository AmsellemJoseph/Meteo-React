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

  useEffect(() => {
    setTaillefav(localStorage.favorite ? JSON.parse(localStorage.favorite) : [])

  }, [favorite])



  console.log(tailleFav);

  return (
    <div className="App">
      <div className='containerNav'>
        <div className='navBar'>
          <NavBar />
          <HistoryModal />
          <div className="Favoriteicon">
            <StyledBadge badgeContent={tailleFav.length} color="primary">
              {fav.isFavorite ? <FavoriteIcon style={{ color: '#f1f1f1', fontSize: '50px', cursor: 'pointer' }} onClick={() => setFav({ isFavorite: !fav.isFavorite })} /> : <FavoriteIcon style={{ color: '#f1f1f1', fontSize: '50px', cursor: 'pointer' }} onClick={() => setFav({ isFavorite: !fav.isFavorite })} />}
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
