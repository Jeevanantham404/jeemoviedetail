import { NavLink, useNavigate } from "react-router-dom"

export const Header = () => {
  const navigator=useNavigate()

  const handles =(j)=>{
     j.preventDefault();
     const queryTerm =j.target.search.value;
     j.target.reset()
     return navigator(`/search?q=${queryTerm}`)
  }
  return (
    <>
    <nav className="navbar navbar-expand-md fixed-top bg-primary navbar-dark">
      <div className="container-fluid">
        <a href="#" className="navbar-brand"><i className="bi bi-camera-reels-fill"></i>JeeMovie</a>
        <button className="navbar-toggler" type="button" data-bs-toggle ="collapse" data-bs-target="#menu">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="menu">

        <ul className="navbar-nav me-auto mb-2 mb-md-0">

          <li className="nav-item">
            <NavLink to="/" className="nav-link">
            Home
            </NavLink ></li>

          <li className="nav-item"><NavLink to="/movies/toprated" className="nav-link">
            Top Rated
            </NavLink ></li>

          <li className="nav-item"><NavLink to="/movies/popular" className="nav-link">
            Popular
            </NavLink ></li>

          <li className="nav-item"><NavLink to="/movies/upcoming" className="nav-link">
            Upcoming
            </NavLink ></li>

        </ul>
        <form onSubmit={handles}>
          <input type="search" className="form-control" placeholder="Search" name="search" />
        </form>
        </div>
      </div>

    </nav>
    </>

  )
}

