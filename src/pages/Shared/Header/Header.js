import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth'
import './Header.css'

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div className='mb-5'>
            <Navbar collapseOnSelect expand="lg" className='p-2 nav-bg' fixed="top">
                <Container>
                    <Navbar.Brand className='fs-4 fw-bolder'>
                        <span className='text-color'><span className='text-white'><i className="fas fa-paper-plane"></i> BrahmaPutra</span>Travels</span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto nav-items d-flex align-items-center">
                            <NavLink className='nav-item' to="/home">Home</NavLink>
                            <NavLink className='nav-item' to="/tours">Tours</NavLink>
                            <NavLink className='nav-item' to="/about">About</NavLink>
                            <NavLink className='nav-item' to="/contact">Contact</NavLink>
                            {
                                !user.email ? <span>
                                    <Button className='btn-styled ms-3 my-3 btn-sm'><NavLink className='text-dark text-decoration-none fw-bold' to="/login">Sign In</NavLink></Button>
                                </span>
                                    :
                                    <>
                                        <NavLink className='nav-item' to="/myorders">My Orders</NavLink>
                                        <NavLink className='nav-item' to="/manage">Manage Orders</NavLink>
                                        <NavLink className='nav-item' to="/add">Add New Service</NavLink>
                                        <Button onClick={logOut} className='btn-styled mx-2 my-3 btn-sm'><NavLink className='text-dark text-decoration-none fw-bold' to="/home">Log Out</NavLink></Button>
                                    </>
                            }
                        </Nav>
                        <Nav>
                            <Navbar.Text>
                                {
                                    user.email ?
                                        <span className='text-capitalize text-white fw-bold'>
                                            {user.displayName}
                                        </span>

                                        :
                                        ''
                                }
                            </Navbar.Text>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;