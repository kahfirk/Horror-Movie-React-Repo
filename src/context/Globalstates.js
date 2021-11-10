import React, {createContext, useReducer, useEffect} from 'react'
import AppReducer from './Appreducer'
//initial state
const initialState = {
    wishlist: localStorage.getItem('wishlist') ? JSON.parse(localStorage.getItem('wishlist')) 
    : [],
}

// create context
export const Globalcontext = createContext(initialState);

// provider components
export const Globalprovider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)
    
    useEffect(()=>{
        localStorage.setItem('wishlist',JSON.stringify(state.wishlist))
    }, [state]);

    // Actions
    const addMovieToWishList = (movie) => {
        dispatch({type: "ADD_MOVIE_TO_WISHLIST", payload: movie})
    };

    const removeMovieFromWishList = (id) => {
        dispatch({type: "REMOVE_MOVIE_FROM_WISHLIST", payload: id})
    };

    return(
        <Globalcontext.Provider value ={{wishlist: state.wishlist, addMovieToWishList, removeMovieFromWishList}}>
        {props.children}
        </Globalcontext.Provider>
    )
};
