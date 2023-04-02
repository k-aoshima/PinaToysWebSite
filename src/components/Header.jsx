/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from "react-router-dom"
import logoSmallImage from "../images/PinatoysLogo_small.png";
import {useRef, useState} from 'react';
import { Menu, MenuItem } from "@mui/material";

const Header = () => {
    const [open, setOpen] = useState(false);
    const anchorEl = useRef(null);

    const handleClick = () =>{
        setOpen(!open);
    }
    const handleClose = () =>{
        setOpen(false);
    };

  return <header>
    <Link to='/'>
        <img src={ logoSmallImage } className="headerLogo" alt='PinatyosLogo'/>
    </Link>
    <nav>
        <ul>
            <li ref={anchorEl}
                onClick={handleClick}
            >
                <a>Series</a>
            </li>
            <Menu
                anchorEl={anchorEl.current}
                open={open}
                disableAutoFocusItem={false}
                autoFocus={false}
                onClose={handleClose}
                keepMounted
                transitionDuration={"auto"}
                sx={{
                }}
                transformOrigin={{
                    vertical:"top",
                    horizontal:"right"
                }}
                MenuListProps={{}}
                PaperProps={{
                    elevation: 3
                }}
                className='Menu'
            >
                <Link to="./">
                    <MenuItem onClick={handleClose}>Home</MenuItem>
                </Link>
                <Link to="ElezooHome">
                    <MenuItem onClick={handleClose}>Elezoo</MenuItem>
                </Link>
                <Link to="EyelandHome">
                    <MenuItem onClick={handleClose}>Eyeland</MenuItem>
                </Link>
            </Menu>
            <li>
                <Link to="About">About</Link>
            </li>
            <li>
                <Link to="Contact">Contact</Link>
            </li>
        </ul>
    </nav>
  </header>
}

export default Header