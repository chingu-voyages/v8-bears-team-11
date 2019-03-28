import React from 'react';
import { Link } from 'react-router-dom';
import { SecondNavbar } from './SecondNavbar/SecondNavbar';
import './Navbar.sass';

export const Navbar = props => (
    <div className='Navbar'>
        <div className='wrapper nav__bar'>
            <div className="brand-logo">
                <Link to="/">
                    <h1 className="title-brand">Test</h1>
                </Link>
            </div>
            <nav>
                <ul className='nav__bar__first__child'>
                    <div className='nav__data lead__white'>
                        <ul>
                            <li className='txt__mg'>Hi! welcome</li>
                        </ul>
                    </div>
                </ul>
            </nav>
        </div>
        <SecondNavbar></SecondNavbar>
    </div>
);
// <LinkNav to='/#' icon='fas fa-user'/>
