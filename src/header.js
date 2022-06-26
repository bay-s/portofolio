import React from "react";
import { Link } from "react-router-dom";


class Header extends React.Component{
constructor(){
  super()
  this.state = {
   header:React.createRef(),
   dropMenu:React.createRef(),
    y:window.scrollX ,
    dropDown:true
  }
}

componentDidMount(){
  window.addEventListener('scroll',this.scrolls)
 }
 
 scrolls = (e) => {
   let x = window.scrollY;
 const header = this.state.header.current
 if (x > 0) {
   header.classList.add("fixed-header");
 }else {
   header.classList.remove("fixed-header");
 }
 
 this.setState({y:x})
 }
 
 dropDown = (e) => {
   e.preventDefault()
   const showMenu = this.state.dropMenu.current
   showMenu.classList.toggle('opens')
 }

  render(){
    return(
      <>
            <header class="header" ref={this.state. header}>
<nav className="navbar">
<ul class="menu-kiri">
          <li>
            <Link to='/'>HOME</Link>
          </li>
        </ul>
        <ul class="menu-mid">
          <li>
            <Link to='/project/'>Project</Link>
          </li>
          <li>
            <Link to='/about/'>About</Link>
          </li>
        </ul>
        <ul class="menu-kanan">
        <li className="contacts">
            <Link to='/contact/'>Contact</Link>
        </li>
          <li>
            <a href="#">
              <div class="hamburger"  onClick={this.dropDown} >
                <div class="spinner diagonal part-1" ></div>
                <div class="spinner horizontal"></div>
                <div class="spinner diagonal part-2" ></div>
              </div>
            </a>
          </li>
        </ul>
</nav>
      </header>

            <div class="box" ref={this.state.dropMenu}>
            <ul>
              <li>
                <span> <Link to='/'>HOME</Link></span>
              </li>
              <li>
                <span><Link to='/about/'>About</Link></span>
              </li>
              <li>
                <span><Link to='/project/'>Project</Link></span>
              </li>
              <li>
                <span><Link to='/contact/'>Contact</Link></span>
              </li>
            </ul>
          </div>
      </>
    )
  }
}

export default Header;