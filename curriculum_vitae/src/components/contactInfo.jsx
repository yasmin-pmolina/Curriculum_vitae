import React, { Component } from 'react'
import SvgComponent from './basic/svgComponent'
import { colorIconDefault, colorIconHoverDefault } from '../consts';


class ContactInfo extends Component {

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

        const { contextIcon, data } = this.props;
        let listHtml = [];

        if (Array.isArray(data)) {
            data.forEach((element, index) => {

                if (element.hasOwnProperty('type') & element.hasOwnProperty('name') & element.hasOwnProperty('link')) {

                    let href, target;

                    switch (element.type) {
                        case "phone":
                            href = "#";
                            target = "";
                            break
                        case "mail":
                            href = `mailto:${element.link}?`;
                            target = "_blank";
                            break
                        case "linkedin":
                        case "github":
                        default:
                            target = "_blank";
                            href = `${element.link}`;
                            break;
                    }

                    listHtml.push(<span className="my-bg-light row my-1 p-0 gap-1" key={`contactInfo-${index}`}>
                        <a href={href} target={target} className="my-bg-light col ps-1 pe-1">
                            <SvgComponent key={index} contextIcon={contextIcon} name={element.type} text={element.name}  colorIcon={colorIconDefault} colorHover={colorIconHoverDefault} className="icon-format small me-1" isIconList='true' />
                        </a>
                    </span>)
                }
            })
        }

        return (
            <>{listHtml}</>
        )

    }
}


export default ContactInfo
