export default (state, action) => {
    switch (action.type){
        case "ADD_MOVIE_TO_WISHLIST":
            return{
                ...state,
                wishlist: [action.payload, ...state.wishlist]
            }
        case "REMOVE_MOVIE_FROM_WISHLIST":
            return{
                ...state,
                wishlist: state.wishlist.filter(movie=>movie.id !== action.payload)
            }
        default:
            return state;
    }
}