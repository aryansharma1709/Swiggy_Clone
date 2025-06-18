import Header from "./component/Header"
import Body  from "./component/Body"
import Footer from "./component/Footer";
import { Outlet } from "react-router-dom";
function App() {

  return (
    <div>
       <Header/>
       {/* <Body/> */}
       <Outlet/>
       <Footer/>
       
    </div>
  )
}

export default App;
