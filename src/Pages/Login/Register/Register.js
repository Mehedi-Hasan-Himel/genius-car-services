import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
   const navigate = useNavigate()
   const navigateLogin = () => {
      navigate('/login')
   }

   const handleRegister = event => {
      event.priventDefault()
   }

   return (
     <div>
       <h2>Please Register.</h2>
       <Form onSubmit={handleRegister} className="container w-50 mx-auto">
         <Form.Group className="mb-3">
           <Form.Label>Your Name</Form.Label>
           <Form.Control type="text" placeholder="Enter Your Name" required />
           <Form.Text className="text-muted">
             We'll never share your name with anyone else.
           </Form.Text>
         </Form.Group>
         <Form.Group className="mb-3" controlId="formBasicEmail">
           <Form.Label>Email address</Form.Label>
           <Form.Control type="email" placeholder="Enter email" required />
           <Form.Text className="text-muted">
             We'll never share your email with anyone else.
           </Form.Text>
         </Form.Group>

         <Form.Group className="mb-3" controlId="formBasicPassword">
           <Form.Label>Password</Form.Label>
           <Form.Control type="password" placeholder="Password" required />
         </Form.Group>
         <Form.Group className="mb-3" controlId="formBasicCheckbox">
           <Form.Check type="checkbox" label="Check me out" />
         </Form.Group>
         <Button variant="primary" type="submit">
           Submit
         </Button>
       </Form>
       <p>
         Already have an account ?{" "}
         <Link
           to="/login"
           className="text-danger pointer-event "
           onClick={navigateLogin}
         >
           Please Login
         </Link>
       </p>
     </div>
   );
};

export default Register;