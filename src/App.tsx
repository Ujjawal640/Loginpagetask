import Banner from "./components/Banner"
import Login from "./components/Login"



function App() {

  return (
    <>
  <div className="flex">
   <div className="ml-20 my-5">
    <Banner/>
   </div>
    <div className="ml-36">
    <Login/>
    </div>
    </div>
    </>
  )
}

export default App
