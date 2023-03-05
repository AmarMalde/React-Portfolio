import React from "react";
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

function Header() {
    return <header>
        <Nav className="justify-content-center" variant="tabs" defaultActiveKey="/home">
            <Nav.Item>
                <NavLink
                    to="/"
                    className='nav-link'
                >Home</NavLink>
            </Nav.Item>

            <Nav.Item>
                <NavLink
                    to="projects"
                    className='nav-link'
                >Projects</NavLink>
            </Nav.Item>

            <Nav.Item>
                <NavLink
                    to="contactme"
                    className='nav-link'
                >Contact Me</NavLink>
            </Nav.Item>

        </Nav>
    </header>
}

export default Header;