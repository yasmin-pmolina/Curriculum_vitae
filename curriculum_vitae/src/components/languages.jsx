import React, { Component } from 'react'
import ListItem from './basic/listComponent';
import SvgComponent from './basic/svgComponent';
import { colorIconDefault } from '../consts';

class Languages extends Component {

    static defaultProps = {
        nameIcon: "icon-date.svg",
        nameClassIcon: "icon-format",
    };

    constructor(props) {
        super(props)
        this.state = {
            data: props.data,
            nameIcon: props.nameIcon || this.defaultProps.nameIcon,
            nameClassIcon: props.nameClassIcon || this.defaultProps.nameClassIcon,
        }
    }

    render() {

        const data = this.props.data;
        let htmlList = [];
        let contexpfd =  require.context("../models/certificates", true, /.pdf$/)
        let certfPdf = "";

        data.forEach((element, index) => {

            if(element.hasOwnProperty('fileName') && element.fileName !== null && element.fileName !== "")
                certfPdf = contexpfd(`./${element.fileName}`);

            const html = <span key={`languages-${index}`}><b>{element.name + ": "}
            </b>{(element?.link && element.link !== "") ? <a href={ certfPdf !== "" ? certfPdf : element.link} target="_blank" className="fst-italic" rel="noreferrer">{element.level}</a> : element.level}</span>

            htmlList.push(html)
        })

        return (
            <span className="">
                <div className="mb-2 ms-1">
                    <SvgComponent name="icon-bi-translate.svg" colorIcon={colorIconDefault} className="me-1 icon-format" />
                    <span className="fw-bolder">IDIOMAS</span>
                </div>
                <span className="paragraph"><ListItem data={htmlList} /></span>
            </span>
        )
    }
}

export default Languages
