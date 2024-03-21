import { Form, Link } from "react-router-dom";
import { Button, FormInput } from "../components";

const Login = () => {
  return (
    <div className="h-screen grid place-items-center">
      <Form
        method="post"
        className="grid place-items-center shadow-md mx-auto w-1/2 rounded-md p-4"
      >
        <h3 className="capitalize text-4xl mb-8 font-bold ">login</h3>
        <FormInput label="username" type="text" name="username" />
        <FormInput label="password" type="password" name="password" />
        <Button type="submit" text="login" />
        <div>
          Not a member yet?{" "}
          <Link
            to="/register"
            className="underline text-blue-400 hover:text-blue-600"
          >
            Register
          </Link>
        </div>
      </Form>
    </div>
  );
};
export default Login;
