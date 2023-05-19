import  { useContext } from "react";
import { Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import { AuthContext } from "../../providers/Authprovider";

const Register = () => {
  const { createUser } = useContext(AuthContext);
const [error,setError] = useState('');
  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const displayName = form.displayName.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;

    console.log(displayName, photo, email, password, confirm);
    if (password !== confirm) {
      setError("your password did not match");
      return;
    }
    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        console.log(createdUser);
        form.reset();
      })
      .catch((error) => {
        console.log(error);
      });
  };
// eslint-disable-next-line no-undef



  return (
    <Container className=" md:my-20 ml-3 md:ml-64 md:px-48  ">
      <h3 className="text-5xl font-semibold mb-4 text-indigo-700">
        Please Register
      </h3>
      <Form onSubmit={handleRegister} className="md:pr-96 pl-1 space-y-6">
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="displayName"
            placeholder="Your Name"
            required
          />
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
        <div className="form-control">
          <label htmlFor="password">Confirm your Password</label>
          <input
            type="password"
            name="confirm"
            placeholder="confirm your Password"
            required
          />
        </div>
        <p className="text-red-500">
          <small>{error}</small>
        </p>

        <button
          className="btn btn-active border-0 text-white font-semibold bg-indigo-500"
          type="submit"
        >
          Register
        </button>
        <br />
        <Form.Text className="text-indigo-500">
          Already Have an Account? <Link to="/login">Login</Link>
        </Form.Text>
        <Form.Text className="text-success"></Form.Text>
        <Form.Text className="text-danger"></Form.Text>
      </Form>
    </Container>
  );
};

export default Register;
