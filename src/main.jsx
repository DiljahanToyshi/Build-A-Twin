import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App'
import Home from './Components/Home';
import Login from './Components/Shared/Login';
import AllToys from './Components/AllToys';
import MyToys from './Components/MyToys';
import Register from './Components/Shared/Register';
import AuthProvider from './providers/Authprovider';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "allToys",
        element: <AllToys></AllToys>,
      },
      {
        path: "myToys",
        element: <MyToys></MyToys>,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <RouterProvider router={router}></RouterProvider>
  </AuthProvider>
);
