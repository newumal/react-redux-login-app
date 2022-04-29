import './App.scss';
import Login from "./components/Login/login";
import Logout from "./components/Logout/logout";
import {useSelector} from "react-redux";
import {selectUser} from "./features/userSlice";

function App() {
    const user = useSelector(selectUser)

  return (
    <div className="App">
        { user ? <Logout/> : <Login/> }
    </div>
  );
}

export default App;
