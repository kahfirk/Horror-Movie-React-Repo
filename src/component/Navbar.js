import {React,useState} from 'react'
import {Link} from 'react-router-dom'
export const Navbar = () => {
    const [query, setQuery] = useState("")
    const [results, setResults] = useState([]);

    const onChange = e => {
        e.preventDefault();

        setQuery(e.target.value);

        fetch(`https://api.themoviedb.org/3/search/movie?with_genres=27&primary_release_year=2021&api_key=80689e52a4f65d58050c47dc30e5c578&query=${e.target.value}`)
        .then((res) => res.json())
        .then((data) =>{
            console.log(data);
            if(!data.errors) {
                setResults(data.results);
            } else {
                setResults([]);
            }
        })
    };

    return (
        <header>
                <li>
                    <Link to="" className="Navbar_Home">Horror Movie 2021</Link>
                </li>
                <li>
                    <Link to="/component/Wishlist" className="Navbar_Wishlist">Wishlist</Link>
                </li>
        <form id="form">
            <input type="text" placeholder="Search" id="search" className="search" 
                value={query}
                onChange={onChange}
            />
            </form>
        </header>
    )
}
