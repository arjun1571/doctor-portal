import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const LogIn = () => {
  const { LoginUser } = useContext(AuthContext);
  const [loginError, setLogInError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleLogIn = (data) => {
    setLogInError("");
    console.log(data);
    LoginUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
        setLogInError(error.message);
      });
  };
  return (
    <div className="h-[750px] flex justify-center items-center">
      <div className="w-96">
        <h2 className="text-3xl mb-3 text-center font-bold">LOGIN</h2>
        <form onSubmit={handleSubmit(handleLogIn)}>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              {...register("email", { required: "Email Address is required" })}
              className="input input-bordered w-full "
            />
            {errors.email && (
              <p className="text-red-600" role="alert">
                {errors.email?.message}
              </p>
            )}
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: "password is required",
                minLength: {
                  value: 6,
                  message: "password must be 6 character or longer",
                },
              })}
              className="input input-bordered w-full "
            />
            {errors.password && (
              <p className="text-red-600" role="alert">
                {errors.password?.message}
              </p>
            )}
            {loginError && <p className="text-red-600">{loginError}</p>}
            <span className="label-text underline mt-2">Foggot Password ?</span>
          </div>
          <input
            className="btn btn-black text-white w-full mt-4"
            type="submit"
            value="LogIn"
          />
        </form>
        <p className="mt-1">
          New to Doctors Portal?
          <Link className="text-secondary" to="/signup">
            Create new account
          </Link>
        </p>
        <div className="divider">OR</div>
        <button className="btn btn-outline w-full">CONTINUE WITH GOOGLE</button>
      </div>
    </div>
  );
};

export default LogIn;
