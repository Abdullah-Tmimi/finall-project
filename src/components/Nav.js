import { NavLink, useLocation } from "react-router-dom"
import reactLogo from "../images/react-logo.png"

function Nav() {
  const location = useLocation()
  console.log(location.pathname)
  return (
    <>
    <header>
      <div>
        <img src={reactLogo} alt="" />
        <p>React</p>
      </div>
        <ul>
          <NavLink to="/" className={() => location.pathname === "/" ? "active" : ""}>الرئيسية</NavLink>
          <NavLink to="/cours">الدورات</NavLink>
        </ul>
    </header>
    <div className="main-image" />
    </>
  )
}

export default Nav