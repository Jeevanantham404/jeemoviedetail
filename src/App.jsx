import { Header,Footer } from './components'
import Allrouters from './routers/Allrouters'
import { ScrollTop } from './components/ScrollTop'
import './App.css'


function App() {
  

  return (
    <>
      <div>
        <Header></Header>
        <ScrollTop />
        <Allrouters/>
        <Footer></Footer>
      </div>
      
    </>
  )
}

export default App
