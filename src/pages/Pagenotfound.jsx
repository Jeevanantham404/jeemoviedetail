import not from "../assets/images/istockphoto-1011853308-1024x1024.jpg"
export const Pagenotfound =()=>{
    return(
        <div className="container">
            <img src={not} className="img-fluid" />
            <p className="text-center">
                <Link to ="/" className="btn btn-danger">Go To Home Page</Link>
            </p>
        </div>
    )
}
