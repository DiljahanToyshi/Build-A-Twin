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
import PrivateRoute from './privateRoute/PrivateRoute';
import ErrorPage from './Components/ErrorPage';
import SingleToyDetails from './Components/SingleToyDetails';
import AddToys from './Components/AddToys';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
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
        path: "addToys",
        element: <AddToys></AddToys>,
      },
      {
        path: "/toys/:id",
        element: (
          <PrivateRoute>
            <SingleToyDetails></SingleToyDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/toys/${params.id}`),
      },

      {
        path: "myToys",
        element: (
          <PrivateRoute>
            {" "}
            <MyToys></MyToys>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <RouterProvider router={router}></RouterProvider>
  </AuthProvider>
);
