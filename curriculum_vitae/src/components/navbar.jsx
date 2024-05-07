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
            selectedLanguage: props.selectedLanguage ,
            onChangeLanguage: props.onChangeLanguage
        }
    }

    printPage() {
        window.print();
    }

    handleLanguageChange = (newLanguage) => {
        this.setState({ selectedLanguage: newLanguage });
        this.props.onChangeLanguage(newLanguage);
    };

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
                        <div className="offcanvas offcanvas-start backgorund-color-navbar" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" style={{ width: '15rem' }}>
                            <div className="offcanvas-header">
                                {/*<h5 className="offcanvas-title" id="offcanvasNavbarLabel">Curriculum</h5>
                                   <button type="button" className="btn-close btn-close-white text-light" data-bs-dismiss="offcanvas" aria-label="Close"></button>*/}
                            </div>
                            <div className="offcanvas-body">
                                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <spam className="row layout-border">
                                    <li className="nav-item">
                                        <a href="https://github.com/yasmin-pmolina" className="">Github</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="https://www.linkedin.com/in/yasmin-patricia-molina" className="">Linkedin</a>
                                    </li>
                                    </spam>
                                    <li className="layout-border">
                                          <p className="m-1">Language:</p>
                                          <select className="m-0 m-0 custom-select" value={this.state.selectedLanguage} onChange= {e => this.handleLanguageChange(e.target.value)}>
                                            <option value="en">English</option>
                                            <option value="es">Español</option>
                                        </select>
                                    </li>
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





