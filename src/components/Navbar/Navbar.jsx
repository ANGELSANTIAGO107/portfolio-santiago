
import "../Navbar/Navbar.css"
import { NavLink } from "react-router-dom";

const profile = 'https://media1.giphy.com/media/Hx1s0C1uZ3snptyIcM/giphy.gif?cid=6c09b952u4ahw2t7fxhz82ubw9201kxtku4eyhnutjzhfgup&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s'

export const Navbar = () => {
  return (
    <>

      <nav id="nav">
        <div className="ident">
          <img src={profile} id="img-header" alt="img" />
          <h1 className='title'>AS</h1>
        </div>
        <ul id="nav-link">
          <li><NavLink to='/' >Home</NavLink></li>
          {/* <li><NavLink to='*' >My projects</NavLink></li> */}
          <li><NavLink to='*' >About me</NavLink></li>
          <li><NavLink to='/Contact' >Contact</NavLink></li>
          <li><NavLink to='/Shop' >Shop</NavLink></li>
        </ul>
      </nav>
      
    </>
  )
}
