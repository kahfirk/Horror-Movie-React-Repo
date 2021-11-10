import React, {useContext} from 'react'
import { Globalcontext } from '../context/Globalstates'

export const MovieControls = ({movie, type}) => {
    const{removeMovieFromWishList} = useContext(Globalcontext)
    return (
        <div className="Remove">
            <button className='rmv-btn' onClick = {() => removeMovieFromWishList(movie.id)}>
            Remove Movie
            </button>
        </div>
    )
}
