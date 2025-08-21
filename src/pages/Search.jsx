import { useEffect } from "react"
import { Card } from "../components"
import { usefetch } from "../../hooks/usefetch"
import { useSearchParams } from "react-router-dom"

export const Search = ({apiPath}) => {
const [searchParams] = useSearchParams();
  const queryTerm =searchParams.get("q")

  const {data:movies}= usefetch(apiPath,queryTerm)

  useEffect(()=>{
    document.title= `Search result for ${queryTerm}`

  })
  return (
    <main  className="container">
      <h4 className="text-danger py-2 border-bottom">
        {movies.length==0?`No movies found for ${queryTerm}`:`The movies are ${queryTerm}`}
      </h4>
                  <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 py-2">
                      {movies.map((movie)=>{
                          return <Card key={movie.id} movie={movie}/>
                      })}
                  </div>
    </main>

  )
}

