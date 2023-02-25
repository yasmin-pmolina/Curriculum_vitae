import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Color, Solver, hexToRgb } from '../../color'

class SvgComponent extends Component {

    static defaultProps = {
        name: " ",
        className: " ",
        contextIcon: require.context("../../assets/img/", true, /.svg$/),
        listIcon: [
            { name: "Git", icon: "icon-git.svg" },
            { name: "JavaScript", icon: "icon-javascript.svg" },
            { name: "HTML5", icon: "icon-html_5.svg" },
            { name: "SASS/SCSS", icon: "icon-sass.svg" },
            { name: "React.js", icon: "icon-react.svg" },
            { name: "Bootstrap", icon: "icon-bootstrap.svg" },
            { name: "JQuery", icon: "icon-jquery.svg" },
            { name: "MySql", icon: "icon-mysql.svg" },
            { name: "PostgreSQL", icon: "icon-postgresql.svg" },
            { name: "C", icon: "icon--c-programación.svg" },
            { name: "C++", icon: "icon-c-plus-plus.svg" },
            { name: "C#", icon: "icon-c-sharp.svg" },
            { name: "Node.js", icon: "icon-node-js.svg" },
            { name: "Qt", icon: "icon-qt.svg" },
            { name: "Jira", icon: "icon-jira.svg" },
            { name: "Github", icon: "icon-github.svg" },
            { name: "google", icon: "icon-google.svg" },
            { name: "mail", icon: "icon-envelope-at-fill.svg" },
            { name: "linkedin", icon: "icon-linkedin.svg" },
            { name: "phone", icon: "icon-phone.svg" },
            { name: "mortarboard", icon: "icon-mortarboard-fill.svg" },
            { name: "place", icon: "icon-place.svg" },
            { name: "link", icon: "icon-link.svg" }
        ]
    };

    constructor(props) {
        super(props)
        this.state = {
            name: props.name,
            className: props.className,
            contextIcon: props.contextIcon || this.defaultProps.contextIcon,
            listIcon: props.listIcon || this.defaultProps.listIcon,
            isIconList: props.isIconList,
            colorIcon: props.colorIcon,
            colorHover: props.colorHover,
            colorIcoUse: props.colorIcon,
            text: props.text || '',
        }
    }

     handleMouseOver = () => {
        const {colorHover} = this.state;
        if(colorHover) this.setState({colorIcoUse: colorHover});
     }

     handleMouseEnter = () => {
     }

     handleMouseLeave= () => {
        const {colorIcon} = this.state;
         this.setState({colorIcoUse: colorIcon});
     }

     handleMouseEnterImg = () => {
     }

     handleMouseLeaveImg = () => {
     }

    setColor(colorIcon) {
        
        let filter = " ";

        if (colorIcon) {
            const rgbColor = [];
            rgbColor.push(hexToRgb(colorIcon));
            const colorc = new Color(rgbColor[0][0], rgbColor[0][1], rgbColor[0][2]);
            const solver = new Solver(colorc);
            const result = solver.solve();
            filter = result.style;
        }
        return filter;
    }

    render() {

        const { contextIcon, name, isIconList, className, listIcon } = this.props;
        const iconName = listIcon.filter(item => name.toLowerCase() === item.name.toLowerCase());
        let icon = ''; 
       
        const {colorIcoUse, text} = this.state;

        try {
            const iconSVG = contextIcon(`./${isIconList ? (iconName[0]?.icon || ' ' ) : name}`);
            const filter = this.setColor(colorIcoUse);
            icon = iconSVG ? <img src={iconSVG} alt={name} className={className} style={{filter}} 
              onMouseEnter={this.handleMouseOverImg}
              onMouseLeave={this.handleMouseLeaveImg}
               /> : ''
          } catch {
            console.log(`Error: Ocurrio un error al intentar agregar el icono: {name}` );
         }

        return (
            <span className={className ? className : "icon-format"} 
              onMouseOver={this.handleMouseOver}
              onMouseEnter={this.handleMouseOver}
              onMouseLeave={this.handleMouseLeave}
               >
              {icon}<span>{text}</span>
            </span>
        )
    }
}

SvgComponent.propTypes = {
    className: PropTypes.string,
    name: PropTypes.string,
}

export default SvgComponent
