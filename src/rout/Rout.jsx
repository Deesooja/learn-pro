import {createBrowserRouter} from 'react-router-dom'
// import Home from './pages/Home'
createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/course",
      element: <Navbar/>,
    }
  ])