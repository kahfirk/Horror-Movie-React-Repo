import React, {useContext} from 'react'
import { Globalcontext } from '../context/Globalstates'
export const ResultCard = ({movie}) => {
  const{
    addMovieToWishList,wishlist
  } = useContext(Globalcontext);

  let storedMovie = wishlist.find(o =>o.id === movie.id)

  const wishlistDisabled = storedMovie ? true: false;
    return (
    <div className="result-card">
      <div className="poster-wrapper">
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={`${movie.title} Poster`}
          />
        ) : (
          <div className="filler-poster" />
        )}
      </div>
      <div className="info">
            <div className="Info_Header">
                <h3 className="movie-info">{movie.title} <span className={getColor(movie.vote_average)}>{movie.vote_average}</span></h3>
            
      <div className="controls">
        <button
            className="btn"
            disabled={wishlistDisabled}
            onClick={() => addMovieToWishList(movie)}>
            Add to Wishlist
          </button>
          </div>
        </div>
    </div>
  </div>
    )
}

function getColor(vote){
    if(vote >= 7) {
        return 'green'
    }else if (vote >= 5.5){
        return 'orange'
    }else {
        return ' red'
    }
}

