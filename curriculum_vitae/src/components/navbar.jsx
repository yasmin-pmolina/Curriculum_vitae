import React, { Component } from 'react'
import SvgComponent from './basic/svgComponent';

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
        console.log('CONSTRUCTOR: Cuando se instancia el componente Languages');
    }

    render() {
        return (
            <nav className="navbar navbar-light fixed-top bg-dark p-0 ">
                <div className="container-fluid p-0">
                <span>
                    <SvgComponent name="spinning-cogs.svg" className="ms-2 icon-logo" />
                    <SvgComponent name="logo.svg" className="me-1 icon-logo-text" />
                </span>
                    <button className="navbar-toggler text-light me-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                        <span className="navbar-toggler-icon button-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-start" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" style={{ width: '15rem' }}>
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Plantillas de CV</h5>
                            <button type="button" className="btn-close btn-close-white text-light" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/MakeCV">Crear CV</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar





