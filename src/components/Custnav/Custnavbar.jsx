import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { BsEnvelopeFill } from 'react-icons/bs';
import { ImHome} from 'react-icons/im';
import { FaUser } from 'react-icons/fa';
import { FaToolbox} from 'react-icons/fa';
import { RiServiceFill } from 'react-icons/ri';
import { NavLink} from "react-router-dom";
import "../Custnav/custnavbar.css"


export const Custnavbar = () => { 
    return (
        <div>
        <div className="header__socials">
        <a href="mailto:mayb80@hotmail.fr" target="_blank" rel="noopener noreferrer"><BsEnvelopeFill /></a>
        <a href="https://www.linkedin.com/in/maibelline-quilliet-41492a20b/" target="_blank" rel="noopener noreferrer" ><BsLinkedin /></a>
        <a href="https://github.com/m-quilliet" target="_blank" rel="noopener noreferrer" ><FaGithub /></a>
        </div>
            <div className="header__header">
            <NavLink to="/"><ImHome /></NavLink>
            <NavLink to="/about">< FaUser/></NavLink>
            <NavLink to="/tool">< FaToolbox/></NavLink>
            <NavLink to="/services">< RiServiceFill/></NavLink>
    
        </div>
        </div>
    )
}




