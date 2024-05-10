import React from 'react'
import { Link } from 'react-router-dom'
// import PropTypes from 'prop-types'
const Navbar = (props) => {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      {/* <Link className="navbar-brand" to="/">{props.Title}</Link> */}
      <Link className="navbar-brand" to="/">Tile</Link>

      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link" aria-current="page" to="/Home">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/About">{props.About}</Link>
          </li>
        </ul>
{/* toogle button */}
{/* <div class={`form-check form-switch text-${props.mode} mx-2`}>   -----------here i want reverse functinality for the text*/}
<div class={`form-check form-switch text-${props.mode === 'light'? 'dark':'light'} mx-2`}>
  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"   onClick={props.toggl}/>
  <label class="form-check-label" for="flexSwitchCheckDefault">Enable toogle</label>
</div>

        {/* search option */}
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
  )
}




// Navbar.propTypes= {
//      Title:PropTypes.string,
//      About:PropTypes.number  //we will geterror because we mentioned prop value in string 
// }

// Navbar.defaultProps={
//     Title: 'set the title',
//     About:'set some about desc'
// }
export default Navbar

