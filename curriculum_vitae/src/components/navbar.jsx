import React, { Component } from 'react'
import SvgComponent from './basic/svgComponent';
import { Outlet, Link } from "react-router-dom";

class Navbar extends Component {

    static defaultProps = {
        nameIcon: "logo.svg",
        contextIcon: require.context("../assets/img/", true, /.svg$/)
    };

    constructor(props) {
        super(props)
        this.state = {
            data: props.data,
            nameIcon: props.nameIcon || this.defaultProps.nameIcon,
            nameClassIcon: props.nameClassIcon,
            contextIcon: props.contextIcon || this.defaultProps.contextIcon,
        }
    }

    printPage() {
        window.print();
    }

    render() {
        return (
            <>
                <nav className="navbar navbar-light fixed-top bg-dark p-0 ">
                    <div className="container-fluid p-0">
                        <span>
                            <SvgComponent name="spinning-cogs.svg" className="ms-2 icon-logo" />
                            <SvgComponent name="logo.svg" className="me-1 icon-logo-text" />
                        </span>
                        <span>
                            <button className="navbar-toggler text-light m-1" type="button" onClick={this.printPage}>
                            <SvgComponent name="icon-print.svg" className="icon-logo-text" />
                            </button>
                            <button className="navbar-toggler text-light me-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                                <span className="navbar-toggler-icon button-icon"></span>
                            </button>
                        </span>
                        <div className="offcanvas offcanvas-start" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" style={{ width: '15rem' }}>
                            <div className="offcanvas-header">
                                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Curriculum vitae</h5>
                                <button type="button" className="btn-close btn-close-white text-light" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body">
                                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                    <li className="nav-item">
                                        <a href="https://www.linkedin.com/in/edymar-gonz%C3%A1lez-albarracin-08328733" className="">Linkedin</a>
                                    </li>
                                    {/*<li className="nav-item">
                                        <Link to="Curriculum_vitae/MakeCV" className="">Linkedin</Link>
                                    </li>*/}
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
                <Outlet />
            </>
        )
    }
}

export default Navbar





