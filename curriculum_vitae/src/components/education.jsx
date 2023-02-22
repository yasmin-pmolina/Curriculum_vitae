import React, { Component } from 'react'
import SvgComponent from './basic/svgComponent'


class Education extends Component {

    static defaultProps = {
        nameIcon: "icon-date.svg",
        nameClassIcon: "icon-format",
        contextIcon: require.context("../assets/img/", true, /.svg$/)
    };

    constructor(props) {
        super(props)
        this.state = {
            data: props.data,
            contextIcon: props.contextIcon || this.defaultProps.contextIcon,
            nameIcon: props.nameIcon || this.defaultProps.nameIcon,
            nameClassIcon: props.nameClassIcon || this.defaultProps.nameClassIcon,
        }
        console.log('CONSTRUCTOR: Cuando se instancia el componente Education');
    }

    render() {

        const { contextIcon } = this.props.contextIcon;
        const data = this.props.data;
        let htmlList = [];

        data.forEach((element, index) => {
            const html = <span key={`education-${index}`} className="ms-1 paragraph">
                <div className='fw-bolder entity'>{element.entity}</div>
                <SvgComponent contextIcon={contextIcon} name={this.props.nameIcon} className="icon-format small me-1" ></SvgComponent>
                <span className='fst-italic'>{element.date}</span>
                <div>{element.degree}</div>
            </span>
            htmlList.push(html)
        });

        return (
            <span className="education ms-1">
                <div className="my-1">
                    <SvgComponent name="icon-mortarboard-fill.svg" className="me-1 icon-format" ></SvgComponent>
                    <span className="m-0 p-0 fw-bolder">EDUCACIÓN</span>
                </div>
                <div className="mb-2">{htmlList}</div>
            </span>
        )

    }
}


export default Education
