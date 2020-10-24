import React, { Component } from 'react';
import {Link,NavLink} from 'react-router-dom';
import './Nav.css';
const Nav = () => {
    return(
        <nav class="navbar">
	<div class="navbrand">
		<h1><a href="./index.html" class="brand">Brand</a></h1>
		<div class="burger" id="burger">
			<span class="burger-open">
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="16">
					<g fill="#252a32" fill-rule="evenodd">
						<path d="M0 0h24v2H0zM0 7h24v2H0zM0 14h24v2H0z" />
					</g>
				</svg>
			</span>
			<span class="burger-close">
				<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
					<path fill="#252a32" fill-rule="evenodd" d="M17.778.808l1.414 1.414L11.414 10l7.778 7.778-1.414 1.414L10 11.414l-7.778 7.778-1.414-1.414L8.586 10 .808 2.222 2.222.808 10 8.586 17.778.808z" />
				</svg>
			</span>
		</div>
	</div>
	<ul class="menu" id="menu">
		<li class="menu-item"><NavLink to="/home" class="menu-link">Home</NavLink></li>
		<li class="menu-item"><NavLink to="/about" class="menu-link">About</NavLink></li>
	</ul>
	<div class="social">
		<a href="#" class="social-item"><i class="fab fa-facebook"></i></a>
		<a href="#" class="social-item"><i class="fab fa-twitter"></i></a>
		<a href="#" class="social-item"><i class="fab fa-instagram"></i></a>
		<a href="#" class="social-item"><i class="fab fa-pinterest"></i></a>
	</div>
</nav>
    )
}
export default Nav;