import React, {useContext} from 'react'
import {Globalcontext} from '../context/Globalstates'
import { WishCard} from './WishCard'

export const Wishlist_Page = () => {
    const{wishlist} = useContext(Globalcontext)
    return (
        <div>
        <h1 className="Header_Wish"> My Wishlist</h1>
            <main id="main">
            {wishlist.length>0 ? (
                <div className='movie'>
                {wishlist.map((movie) => (
                    <WishCard movie = {movie}/>
                ))}
                </div>
            ) : (
                <h2 className="no-movies">TAMBAHKAN WISHLIST MU ! ! !</h2>
            )}
            </main>
            <div className="Identitas">
                <a href="https://www.linkedin.com/in/kahfi-rizky/" className="Identitas">
                Created by : Kahfi Rizky Kosasih
                </a>        
        </div>
        </div>
        
    )
}
