import CommonForm from "@/components/common/form";
import { registerFormControls } from "@/config";
import { useToast } from "@/hooks/use-toast";
import { registerUser } from "@/store/auth-slice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

function AuthRegister() {
  
  const initialState = {
    userName : '',
    email : '',
    password : ''
  }

  const [formdata, setFormdata] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {toast} = useToast();

  function onSubmit (e) {
    e.preventDefault()
    dispatch(registerUser(formdata)).then((data)=>{
      if(data?.payload?.success){
        toast({
          title : data?.payload?.message
        })
         navigate('/auth/login')
      }
    });
  }

    return (
      <div className="mx-auto w-full max-w-md space-y-6 ">
        <div className="text-center ">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Create new account</h1>
          <p className="mt-2">Already have an account
            <Link className="font-medium text-primary hover:underline ml-2" to='/auth/login'>Login</Link>
          </p>
        </div>
        <CommonForm 
        formControls={registerFormControls}
        buttonText={'Sign Up'}
        formData={formdata}
        setFormData={setFormdata}
        onSubmit={onSubmit}
        />
      </div>
    );
  }
  
  export default AuthRegister;