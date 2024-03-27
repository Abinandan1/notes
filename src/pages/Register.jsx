import { Form, Link, redirect, useActionData } from "react-router-dom";
import { Button, FormInput } from "../components";
import { customFetch } from "../utils";
import { register } from "../features/user/userSlice";

export const action = (store) => {
  return async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    if (data.password !== data["confirm password"]) {
      console.log(data.password, data["confirm password"]);
      return false;
    }
    try {
      const user = await customFetch.post("/auth/register", data);
      store.dispatch(register(user.data));
      return redirect("/dashboard");
    } catch (error) {
      console.log(error);
    }
    return null;
  };
};

const Register = () => {
  let passwordsMatch = useActionData();
  passwordsMatch = passwordsMatch === undefined ? true : false;
  return (
    <div className="h-screen grid place-items-center">
      <Form
        method="post"
        className="grid place-items-center shadow-md mx-auto w-[40vw] max-sm:w-[90vw] rounded-md p-4"
      >
        <h3 className="capitalize text-4xl mb-8 font-bold ">register</h3>
        <FormInput
          validator={true}
          label="username"
          type="text"
          name="username"
        />
        <FormInput
          validator={true}
          label="password"
          type="password"
          name="password"
        />
        <FormInput
          validator={passwordsMatch}
          label="confirm password"
          type="password"
          name="confirm password"
        />
        {!passwordsMatch && (
          <p className="text-sm mb-8">Passwords should match</p>
        )}
        <Button type="submit" text="submit" />
        <div className="mt-8">
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
