import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Layout from "../Layout/Layout";
import Courses from "../Courses/Courses";
import Login from "../Login/Login";
import Register from "../Register/Register";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children : [
        {
            path:'/',
            loader : async() =>{
              return fetch('http://localhost:1000/')
            },

            element: <Home></Home>
        },
        {
          path:'/Courses',
          loader : async() =>{
            return fetch('http://localhost:1000/')
          },

          element:<Courses></Courses>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element: <Register></Register>
        }
      ]
    },
  ]);