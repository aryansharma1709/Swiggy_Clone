import Header from "./component/Header"
import Body  from "./component/Body"
import Footer from "./component/Footer";
import { Outlet } from "react-router-dom";
import {Provider} from  "react-redux";
import appStore from "./utils/appStore";
function App() {

  return (
      <Provider store={appStore}>
       <div>
       <Header/>
       {/* <Body/> */}
       <Outlet/>
       <Footer/>
       
    </div>
    </Provider>
  )
}

export default App;
