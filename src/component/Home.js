import {React,useState} from 'react'
import { ResultCard } from './ResultCard';
export const Home_Page = () => {

    const [results, setResults] = useState([])
    fetch(
        `https://api.themoviedb.org/3/discover/movie?with_genres=27&api_key=80689e52a4f65d58050c47dc30e5c578`
    )
    .then((res)=> res.json())
    .then((data)=> {
        if(!data.errors){
            setResults(data.results);
        }else{
            setResults([])
        }
    });
    return (
        <div>
            <main id="main">
            {results.length>0 &&(
                <ul className='movie'>
                {results.map((movie) => (
                <li key={movie.id}>
                    <ResultCard movie = {movie}/>
                </li>
                ))}
                </ul>
            )};
            </main>
            <div className="Identitas">
                <a href="https://www.linkedin.com/in/kahfi-rizky/" className="Identitas">
                Created by : Kahfi Rizky Kosasih
                </a>        
        </div>
        
        </div>
        
    )
}
