import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Body from './component/Body.jsx'
import Offers from './component/Offers.jsx'
import Help from './component/Help.jsx'
import Signin from './component/Signin.jsx'
import ResDetails from './component/ResDetails.jsx'
import Clock from './component/Clock.jsx'
const appRoutes=createBrowserRouter([
       {
          path:"/",
          element:<App/>,
          children:[
            
        {
        path:"/",
        element: <Body />
      },

      {
        path:"/offers",
        element: <Offers />
      },

      {
        path: "/help",
        element: <Help />
      },

      {
        path:"/signin",
        element: <Signin />
      }
       ,{
        path:"/restaurants/:id",
        element: <ResDetails/>
      },{
        path:"/clock",
        element: <Clock/>
      }

          ]
       }
])
createRoot(document.getElementById('root')).render(
  <RouterProvider router={appRoutes}></RouterProvider>
    
  
)
