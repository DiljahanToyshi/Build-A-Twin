import  { useContext } from "react";
import {  Container, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/Authprovider";

const Login = () => {
  const { signIn, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
//   console.log("login page location", location);
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Container className="md:my-20 ml-3 md:ml-64 md:px-48  ">
      <h3 className="text-5xl font-semibold mb-4 text-indigo-700">
        Please Login
      </h3>
      <Form onSubmit={handleLogin} className="md:pr-96 pl-1  space-y-6 m-5">
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" placeholder="Your Name" required />
        </div>

        <div className="form-control">
          <label htmlFor="email">Email address</label>
          <input type="email" name="email" placeholder="Enter email" required />
        </div>

        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </div>

        <div className="md:flex gap-4">
          {" "}
          <button
            className="btn btn-active border-0 text-white font-semibold bg-indigo-500"
            type="submit"
          >
            login
          </button>
          <button
            className="rounded-md p-3 border-2 border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-white  font-semibold "
            onClick={handleGoogleSignIn}
          >
            Login with Google
          </button>
        </div>
        <br />
        <Form.Text className="text-indigo-800">
          New to Build A Twin? <Link to="/register">Please Register</Link>
        </Form.Text>
        <Form.Text className="text-success"></Form.Text>
        <Form.Text className="text-danger"></Form.Text>
      </Form>
    </Container>
  );
};

export default Login;
