import "../App.css"
export const Footer = () => {
  const st={
        color :'white'
    }
  return (
    <div className="container">
      <footer className="py-3 my-6 border-top">
        <p className="text-center text-body-secondary" style={st}>&copy;2025 MovieHub</p>
      </footer>
    </div>
  )
}

