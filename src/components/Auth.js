import classes from "./Auth.module.css";
import {useSelector, useDispatch} from "react-redux";
import {authsliceactions} from "../redux/auth";
import { useRef } from "react";
const Auth = () => {
  const dispatch = useDispatch();
  const emailref=useRef();
  const passref=useRef()
  // const isAuthenticated = useSelector((state) => state.isAuthenticated);
  const loginhandler = (e) => {
    e.preventDefault();
    dispatch(authsliceactions.login({email:emailref.current.value,password:passref.current.value}));
  };

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={loginhandler}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input ref={emailref}type="email" id="email" />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" ref={passref} id="password" />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
