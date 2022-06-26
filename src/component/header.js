import React from 'React'

function Header(){

    return(
      <header class="header">
        <ul class="menu-kiri">
          <li>
            <a href="#">HOME</a>
          </li>
        </ul>
        <ul class="menu-kanan">
          <li><i class="fab fa-twitter"></i></li>
          <li><i class="fab fa-facebook"></i></li>
          <li><i class="fab fa-instagram"></i></li>
          <li><a href="">Facebook</a></li>
      <li><a href="">twitw</a></li>
      <li><a href="">youtubek</a></li>
          <li>
            <a href="">
              <div class="hamburger">
                <div class="spinner diagonal part-1"></div>
                <div class="spinner horizontal"></div>
                <div class="spinner diagonal part-2"></div>
              </div>
            </a>
          </li>
        </ul>
      </header>
    )
}

export default Header;