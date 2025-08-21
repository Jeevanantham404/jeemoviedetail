import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import jee from "../assets/images/photo-1103595_1280.webp"

export const Moviedetails=()=>{
    const st={
        color :'white'
    }

    const params = useParams()
    const [movie, setMovie] =useState([])
    const key=import.meta.env.VITE_API_KEY
      const image = movie.poster_path ?`https://image.tmdb.org/t/p/original${movie.poster_path}` : jee;

            const url=`https://api.themoviedb.org/3/movie/${params.id}?api_key=${key}&`


    useEffect(()=>{
        async function fetchMovies() {
            fetch(url)
            .then((res)=>res.json())
            .then((jsonData)=>setMovie(jsonData));
        }
        fetchMovies()
    })

    useEffect(()=>{
        document.title=`${movie.title}`
    })

    return(
        <main className="container" ><h5 className="taxt-danger py-2 border-bottom mb-3">{movie.title}</h5>
            <div className="row">
                <div className="col-md-4">
                    <img src={image} className="img-fluid img-thumbnail"/>
                </div>
                <div className="col-md-4"b>
                    <h5 className="text-primary " style={st}>{movie.title}</h5>
                    <p style={st}>{movie.overview}</p>

                    { movie.genres?(
                            <p className="d-flex gap-3 " style={st}>{movie.genres.map((genre)=>(
                                <span key={genre.id} className="badge bg-primary">{genre.name}</span>

                            )
                            )}</p>
                        ):(
                            ""
                            )}
                    
      <small>
          <i className="bi bi-star-fill text-warning"></i>{movie.vote_average}| {movie.vote_count} review
        </small>

        <table className="table table-bordered w-70 mt-2">
            <tbody>
                <tr>
                    <th>
                        Runtime
                    </th>
                    <td>{movie.runtime}minutes</td>

                </tr>
                <tr><th>Budget</th>
                <td>{movie.budget}</td></tr>
                <tr><th>Revenue</th>
                <td>{movie.revenue}</td></tr>
                <tr><th>Release Date</th>
                <td>{movie.release_date}</td></tr>
            </tbody>
        </table>

        <a className="btn btn-warning" target="_blank" href={`https://www.imdb.com/title/${movie.imdb_id}/`}>View in IMDB</a>
        <br /><br />
      
        </div>
                </div>
                <br /><br /><br />
            


        </main>
    )
}
