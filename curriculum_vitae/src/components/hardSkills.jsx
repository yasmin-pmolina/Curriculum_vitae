import React, { Component } from 'react'
import SvgComponent from './basic/svgComponent.jsx'


class HardSkills extends Component {

    static defaultProps = {
        contextIcon: require.context("../assets/img/", true, /.svg$/)
    };

    constructor(props) {
        super(props)
        this.state = {
            data: props.data,
            contextIcon: props.contextIcon || this.defaultProps.contextIcon,
        }
    }

    render() {

        const { data, contextIcon } = this.props;
        let htmlList = [];

        data.forEach((element, index) => {
            const html = <span key={`languages-${index}`} className="col text-center py-2 px-0 m-0">
                <SvgComponent contextIcon={contextIcon} name={element.name} isIconList='true' className="icon-skills"/>
                <p>{element.name}</p>
            </span>
            htmlList.push(html)
        })

        return (
            <div className="col-8 m-0 p-0 hardSkills ">
                <div className="row p-2">
                <p className="fw-bolder">HARD SKILLS</p>
                </div>
                <div className="row row-cols-6 justify-content-start">
                    {htmlList}
                </div>
            </div>
        )
    }
}

export default HardSkills
