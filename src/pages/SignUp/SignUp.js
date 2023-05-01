import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import { toast } from "react-hot-toast";
import useToken from "../../hooks/useToken";

const SignUp = () => {
  const { createSignInuser, upProfile } = useContext(AuthContext);
  const [signUpError, setSingupError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [createUserEmail,setCreateUserEmail]=useState("")
  const [token]=useToken(createUserEmail)
  const navigate= useNavigate()
  if(token){
    navigate('/')
  }

  const handleSingUp = (data) => {
    setSingupError("");
    createSignInuser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast("user created successfully");
        const userInfo = {
          displayName: data?.name,
        };
        upProfile(userInfo)
        .then(()=>{
          saveUser(data.name,data.email)
        })
        .catch((error)=>{console.error(error)})
      })
      .catch((error) => {
        console.error(error);
        setSingupError(error.message);
      });
    console.log("save user ",data);
    console.log(errors);
  };

  const saveUser =(name,email)=>{
    const user = {name,email}
    fetch(`http://localhost:5000/user`,{
      method:"POST",
      headers:{
        "content-type":"application/json"
      },
      body: JSON.stringify(user)
    })
    .then(res=>res.json())
    .then(data => {
      setCreateUserEmail(email)
    })
  }


  return (
    <div className="h-[750px] flex justify-center items-center">
      <div className="w-96">
        <h2 className="text-3xl text-center mb-4 font-bold">SignUp</h2>
        <form onSubmit={handleSubmit(handleSingUp)}>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              name="name"
              {...register("name", { required: "name is reqired" })}
              type="text"
              className="input input-bordered w-full "
            />
            {errors.name && (
              <p className="text-red-600">{errors.name.message}</p>
            )}
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              name="email"
              {...register("email", { required: "password is required" })}
              className="input input-bordered w-full "
            />
            {errors.email && (
              <p className="text-red-600">{errors.email.message}</p>
            )}
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              {...register("password", {
                required: "password is required",
                minLength: {
                  value: 6,
                  message: "password should be 6 charecter",
                },
              })}
              className="input input-bordered w-full "
            />
            {errors.password && (
              <p className="text-red-600">{errors.password.message}</p>
            )}
          </div>

          <input
            className="btn btn-black text-white w-full mt-4"
            type="submit"
            value="LogIn"
          />
        </form>
        {signUpError && <p className="text-red-600">{signUpError}</p>}
        <p className="mt-1">
          Already have an account?
          <Link className="text-secondary" to="/login">
            Please LogIn
          </Link>
        </p>
        <div className="divider">OR</div>
        <button className="btn btn-outline w-full">CONTINUE WITH GOOGLE</button>
      </div>
    </div>
  );
};

export default SignUp;
