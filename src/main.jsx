import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import  { Toaster } from 'react-hot-toast';

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayOut from "./Components/MainLayOut";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Registration from "./Components/Registration";
import AuthProvider from "./Components/Provider/AuthProvider";
import ResetPassword from "./Components/ResetPassword";
import AllProducts from "./Components/AllProducts/AllProducts";
import MensWears from "./Components/Products/MensWears";
import AddPorducts from "./Components/Products/AddPorducts";
import LiveChat from "./Components/LiveChat/LiveChat";
import Contact from "./Components/Contact/Contact";
import Error from "./Components/Error/Error";
import RoomDetails from "./Components/Pages/RoomDetails";
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import Stores from "./Components/Stores/Stores";
import axios from "axios";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

axios.defaults.baseURL = "http://localhost:5000" //for axios use 
axios.interceptors.request.use(request => {
  console.log("From main.js Request", request);
  return request;
})
axios.interceptors.response.use(response => {
  console.log("From main.js Response", response);
  return response;
})

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/room/:id",
        element: <RoomDetails></RoomDetails>
      },

      {
        path: "/register",
        element: <Registration></Registration>,
      },
      {
        path: "/liveChat",
        element: <LiveChat></LiveChat>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/allProducts",
        element: <AllProducts></AllProducts>,
        loader: () => fetch("http://localhost:5000/allProducts"),
      },
      {
        path: "/mensWears",
        element: <MensWears></MensWears>,
        loader: () => fetch("http://localhost:5000/allProducts"),
      },
      {
        path: "/addProduct",
        element: <AddPorducts></AddPorducts>,
      },
      {
        path: "/addProducts",
        element: <PrivateRoute><AddPorducts></AddPorducts></PrivateRoute>
      },
      {
        path:'/stores',
        element:<Stores></Stores>
      }
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/resetPassword",
    element: <ResetPassword></ResetPassword>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <Toaster />
    </AuthProvider>
  </React.StrictMode>
);
