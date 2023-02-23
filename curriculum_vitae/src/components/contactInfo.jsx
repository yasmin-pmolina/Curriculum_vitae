import React, { Component } from 'react'
import SvgComponent from './basic/svgComponent'


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
        console.log('CONSTRUCTOR: Cuando se instancia el componente ContactInfo');
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

                    listHtml.push(<span className="d-flex align-items-center m-0 p-0 gap-1 my-bg-light"  key={`contactInfo-${index}`}>
                        <SvgComponent key={index} contextIcon={contextIcon} name={element.type} className="icon-format small" isIconList='true' />
                        <a href={href} target={target} className="">{element.name}</a>
                    </span>)
                }
            })
        }

        return (
            <div className="m-2">{listHtml}</div>
        )

    }
}


export default ContactInfo
