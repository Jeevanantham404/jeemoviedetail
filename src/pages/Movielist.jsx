import { useEffect } from "react"
import {Card} from "../components"
import { useNavigate } from "react-router-dom";
import { usefetch } from "../../hooks/usefetch";

export const Movielist =({title , apiPath})=>{
    const {data:movies} = usefetch(apiPath)
    useEffect(()=>{
        document.title= title;
    })
    const navigator=useNavigate();
    return(
        <>
        <div>
            <main className="container">
                {title =="Movie Titles" ? (
                <div className="bg-body-tertiary p-5 border mb-5">
                    <h2 className="primary">Welcome to JeeMovie</h2>
                
                <p className="lead">Find the new movie details..</p>
                
                    
                    <button className="btn btn-primary" onClick={()=>{
                        navigator("/movies/upcoming");}}>Explore Now</button>
               
                </div>):""}
                
            <h4 className="text-danger py-2 border-bottom">{title}</h4>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 py-2">
                {movies.map((movie)=>{
                    return <Card key={movie.id} movie={movie}/>
                })}
            </div>
            </main>
        </div>
        </>
    )
}
