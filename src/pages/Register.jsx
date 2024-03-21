import { Form, Link } from "react-router-dom";
import { Button, FormInput } from "../components";

const Register = () => {
  return (
    <div className="h-screen grid place-items-center">
      <Form
        method="post"
        className="grid place-items-center shadow-md mx-auto w-1/2 rounded-md p-4"
      >
        <h3 className="capitalize text-4xl mb-8 font-bold ">register</h3>
        <FormInput label="username" type="text" name="username" />
        <FormInput label="password" type="password" name="password" />
        <FormInput
          label="confirm password"
          type="password"
          name="confirm password"
        />
        <Button type="submit" text="submit" />
        <div>
          Already a member?{" "}
          <Link
            to="/login"
            className="underline text-blue-400 hover:text-blue-600"
          >
            Login
          </Link>
        </div>
      </Form>
    </div>
  );
};
export default Register;
