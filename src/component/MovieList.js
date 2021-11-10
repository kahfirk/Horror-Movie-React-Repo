import React from 'react'

export const MovieList = (props) => {
    return (
        <>
            {props.movies.map((movie,index) =><div>
                <img src = {movie.poster_path}> alt='movie' </img>
            </div>
            )}
        </>
    )
}
