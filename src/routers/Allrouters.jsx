import { Route,Routes } from "react-router-dom"
import {Moviedetails,Movielist, Pagenotfound, Search} from "../pages"

const Allrouters = () => {
  return (
<>
<Routes>
    <Route path="/" element={<Movielist title="Movie Titles" apiPath="movie/now_playing" />}/>
    <Route path="movies/popular" element={<Movielist title="Popular Movies" apiPath="movie/popular" />}/> 
    <Route path="movies/toprated" element={<Movielist title="Top-rated" apiPath="movie/top_rated" />}/> 
    <Route path="movies/upcoming" element={<Movielist title="Upcoming Movie" apiPath="movie/upcoming" />}/> 
    <Route path="movie/:id" element={<Moviedetails/>}/> 
    <Route path="search" element={<Search apiPath="search/movie"/>}/>
    
</Routes>
</> 
 )
}

export default Allrouters