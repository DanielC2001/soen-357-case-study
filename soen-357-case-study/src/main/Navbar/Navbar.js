import "./Navbar.css";
import { useEffect } from 'react';
/* eslint-disable jsx-a11y/anchor-is-valid */
const Navbar = () => {

    const handlestickyNavBarScroll = () => {
        // Get the navbar
        var navbar = document.getElementById("navbar");

        // Get the offset position of the navbar
        var sticky = navbar.offsetTop;
        if (window.scrollY >= sticky) {
            navbar.classList.add("sticky");
        } else {
            navbar.classList.remove("sticky");
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handlestickyNavBarScroll);
        return () => {
            window.removeEventListener('scroll', handlestickyNavBarScroll);
        }
    },[]);

    return (
        <div id="navbar" class="topnav">
            <a href="#">FitMeet</a>
            <a href="#conclusion" class="right-link">Conclusion</a>
            <a href="#designs" class="right-link">Designs</a>
            <a href="#research" class="right-link">Research</a>
            <a href="#solution" class="right-link">The Solution</a>
            <a href="#problem" class="right-link">The Problem</a>
            <a class="right-link" href="#">Home</a>
        </div> 
    );
}

export default Navbar;