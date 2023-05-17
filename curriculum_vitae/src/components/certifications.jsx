import React, { Component } from 'react'
import SvgComponent from './basic/svgComponent'
import { colorIconDefault } from '../consts'

class Certifications extends Component {

    static defaultProps = {
        nameIcon: "icon-date.svg",
        nameClassIcon: "icon-format",
        context: require.context("../assets/img/", true, /.svg$/)
    };

    constructor(props) {
        super(props)
        this.state = {
            data: props.data,
            context: props.context || this.defaultProps.context,
            nameIcon: props.nameIcon || this.defaultProps.nameIcon,
            nameClassIcon: props.nameClassIcon || this.defaultProps.nameClassIcon,
        }
    }

    render() {

        const { context, data } = this.props;
        let htmlList = [];

        data.forEach((element, index) => {
            const html = <div key={`certification-${index}`} className="py-2 paragraph">
                <div className='fw-bolder entity'>{element.entity}</div>
                {(element.date) ?
                    <span>
                        <SvgComponent context={context} name={this.props.nameIcon} colorIcon={colorIconDefault} className="icon-format small me-1" ></SvgComponent>
                        <span className='fst-italic'>{element.date}</span>
                    </span> : ""
                }

                <div><a href={element.link} target="_blank" rel="noreferrer" className="fst-italic">{element.name}</a></div>
            </div>
            htmlList.push(html)
        });

        return (
            <span className="ms-1">
                <div className="my-1">
                    <SvgComponent name="icon-award-fill.svg" colorIcon={colorIconDefault} className="me-1 icon-format" ></SvgComponent>
                    <span className="fw-bolder text-uppercase">Professional Development</span>
                </div>
                <div className="my-2">{htmlList}</div>
            </span>
        )
    }
}


export default Certifications
