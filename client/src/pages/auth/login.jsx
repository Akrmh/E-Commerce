import CommonForm from "@/components/common/form";
import { loginFormControls } from "@/config";
import { useState } from "react";
import { Link } from "react-router-dom";

function AuthLogin() {
  const initialState = {
    email: "",
    password: "",
  };

  const [formdata, setFormdata] = useState(initialState);

  function onSubmit() {}

  return (
    <div className="mx-auto w-full max-w-md space-y-6 ">
      <div className="text-center ">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Sign in to your account
        </h1>
        <p className="mt-2">
          Don't have an account
          <Link
            className="font-medium text-primary hover:underline ml-2"
            to="/auth/register"
          >
            Register
          </Link>
        </p>
      </div>
      <CommonForm
        formControls={loginFormControls}
        buttonText={"Sign IN"}
        formData={formdata}
        setFormData={setFormdata}
        onSubmit={onSubmit}
      />
    </div>
  );
}

export default AuthLogin;
