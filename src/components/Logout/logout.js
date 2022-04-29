import React from "react";
import styles from "./index.module.scss"
import {useDispatch, useSelector} from "react-redux";
import {logout, selectUser} from "../../features/userSlice";

const Logout = () => {
    const user = useSelector(selectUser)

    const dispatch = useDispatch()

    const onHandleLogout = (e) => {
      e.preventDefault()
        dispatch(logout())
    }

  return(
      <div className={styles.logout_container}>
          <h1>Welcome <span className={styles.logged_name}>{user.name}</span></h1>
          <button
              type="button"
              onClick={(e) => onHandleLogout(e)}
              className={styles.logout_button}
          >Logout</button>
      </div>
  )
}

export default Logout