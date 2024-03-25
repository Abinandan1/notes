import { Form, Link, redirect, useNavigate } from "react-router-dom";
import { Button, FormInput } from "../components";
import { login } from "../features/user/userSlice";
import { customFetch } from "../utils";
import { toast } from "react-toastify";

export const action = (store) => {
  return async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    try {
      const user = await customFetch.post("/auth/login", data);
      store.dispatch(login(user.data));
      return redirect("/dashboard");
    } catch (error) {
      console.log(error);
      toast.error(
        error?.response?.data?.msg || "Please double check your credentials"
      );
    }
    return null;
  };
};

const Login = () => {
  return (
    <div className="h-screen grid place-items-center">
      <Form
        method="post"
        className="grid place-items-center shadow-md mx-auto w-1/2 rounded-md p-4"
      >
        <h3 className="capitalize text-4xl mb-8 font-bold ">login</h3>
        <FormInput
          label="username"
          type="text"
          name="username"
          required={true}
          validator={true}
        />
        <FormInput
          label="password"
          type="password"
          name="password"
          required={true}
          validator={true}
        />
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
