import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const LogIn = () => {
  const { register, handleSubmit } = useForm();

  const handleLogIn = (data) => {
    console.log(data);
  };
  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="w-96">
        <h2 className="text-3xl">Login</h2>
        <form onSubmit={handleSubmit(handleLogIn)}>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              {...register("email")}
              className="input input-bordered w-full "
            />
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password")}
              className="input input-bordered w-full "
            />
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
