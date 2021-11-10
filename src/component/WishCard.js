import React from 'react'
import { MovieControls } from './MovieControls'

export const WishCard = ({movie,type}) => 
{
    return (
    <div className="main-wish">
      <div className="wish-card">
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={`${movie.title} Poster`}
          />
        ) : (
          <div className="filler-poster" />
        )}
        <MovieControls type={type} movie={movie} />
      </div>
      
  </div>
    )
}
