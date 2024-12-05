import "../loginPage/LoginPage.css";
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaUserAlt } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";

const SignUpPage = () => {
  return (
    <form className="form">
      <div className="flex-column">
        <label>Email</label>
      </div>
      <div className="inputForm">
        <FaUserAlt />
        <input
          type="email"
          className="input"
          placeholder="Enter your Email"
          required
        />
      </div>

      <div className="flex-column">
        <label>Password</label>
      </div>
      <div className="inputForm">
        <RiLockPasswordLine />
        <input
          type="password"
          className="input"
          placeholder="Enter your Password"
          required
        />
      </div>

      <div className="flex-row">
        <div>
          <input type="checkbox" id="remember" />
          <label htmlFor="remember">Remember me</label>
        </div>
      </div>

      <button type="submit" className="button-submit">
        Sign up
      </button>

      <p className="p">
        Already have a account?{" "}
        <a href="#" className="span">
          Sign In
        </a>
      </p>

      <p className="p line">Or Sign In With</p>

      <div className="flex-row">
        <button className="btn google">
          <FcGoogle size={20} />
          Google
        </button>
        <button className="btn apple">
          <FaApple size={20} />
          Apple
        </button>
      </div>
    </form>
  );
};

export default SignUpPage;
