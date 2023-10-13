import { NavLink } from "react-router-dom";
import { useContext } from "react";
import CurrentUserContext from "../contexts/current-user-context";
import img from "../assets/out-app-logo.png";

export default function SiteHeadingAndNav() {
  const { currentUser } = useContext(CurrentUserContext);

  return <header >
    <a id='logo' href='/'>
      Out App
    </a>
    <nav>
      <ul>
        {/* <li><NavLink to='/'>Home</NavLink></li> */}
        <li><NavLink to='/map'>Map</NavLink></li>
        <li><NavLink to='/users' end={true}>Users</NavLink></li>
        {
          currentUser
            ? <li><NavLink to={`/users/${currentUser.id}`}>{currentUser.username}</NavLink></li>
            : <>
              <li><NavLink to='/login'>Login</NavLink></li>
              <li><NavLink to='/sign-up'>Sign Up</NavLink></li>
            </>
        }
      </ul>
    </nav>
  </header>;
}
