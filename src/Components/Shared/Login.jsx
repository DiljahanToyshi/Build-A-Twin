import  { useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/Authprovider";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  console.log("login page location", location);
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

  return (
    <Container className="md:mt-20 ml-3 md:ml-96 md:px-48 w-25 ">
      <h3>Please Login</h3>
      <Form onSubmit={handleLogin} className="pr-56 pl-12 space-y-6">
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" placeholder="Your Name" required />
        </div>
        <div className="form-control">
          <label htmlFor="photo">Photo URL</label>
          <input type="text" name="photo" placeholder="Photo URL" required />
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

        <button
          className="btn btn-active border-0 text-white font-semibold bg-indigo-500"
          type="submit"
        >
          login
        </button>

        <br />
        <Form.Text className="text-indigo-800">
          New to Build A Twin? <Link to="/register">Register</Link>
        </Form.Text>
        <Form.Text className="text-success"></Form.Text>
        <Form.Text className="text-danger"></Form.Text>
      </Form>
    </Container>
  );
};

export default Login;
