import React, {useState} from "react";
import styles from './index.module.scss'
import {useDispatch} from "react-redux";
import {login} from "../../features/userSlice";

const Login = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const dispatch = useDispatch()

    const onHandleFormSubmit = (e) => {
      e.preventDefault()
      dispatch(login({
          name: name,
          email: email,
          password: password,
          loggedIn: true
      }))
    }

  return(
      <div className={styles.login_container}>
          <form
              className={styles.login_form}
              onSubmit={(e) => onHandleFormSubmit(e)}
          >
              <h1>Login Here</h1>
              <input
                  type="name"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
              />
              <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e)=> setEmail(e.target.value)}
              />
              <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
              />
              <button
                  className={styles.login_button}
                  type="submit"
                  name="'LOGIN"
              >Login</button>
          </form>
      </div>
  )
}
export default Login