import React, { Component } from 'react'
import PropTypes from 'prop-types'

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
            { name: "link", icon: "icon-link.svg"}
          ]
    };



    constructor(props) {
        super(props)
        this.state = {
            name: props.name,
            className: props.className,
            contextIcon: props.contextIcon || this.defaultProps.contextIcon,
            listIcon: props.listIcon || this.defaultProps.listIcon,
            isIconList: props.isIconList
        }
        console.log('CONSTRUCTOR: Cuando se instancia el componente SvgComponent');
    }

    /***
    componentWillMount() {
        console.log('WillMount: Antes del montaje del componente');
    }
    */
    componentDidMount() {
        console.log('DidMount: Justo al del montaje del componente, antes de renderizarlo')

        
    }
   /*
    componentWillReceiveProps(nextProps) {
        console.log('WillReceiveProps: Si va a recibir nuevas props')
    }

    shouldComponentUpdate(nextProps, nextState) {
        
        // Controlar si el componente debe o no actualizarse
        // return true / false
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('WillUpdate: Justo antes de actualizarse');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('DidUpdate: Justo después de actualizarse');

       
    }

    componentWillUnmount() {
        console.log('WillUnmount: Justo antes de desaparecer')
    }
   */
    render() {

        const {contextIcon, name, isIconList, className, listIcon } = this.props;
        const iconName = listIcon.filter(item => name.toLowerCase() === item.name.toLowerCase());

        const icon = contextIcon(`./${ isIconList ? iconName[0]?.icon: name }`);

        return (
            <span className={ className ? className : "icon-format"}> 
               {icon ?  <img src={icon} alt={name} className={className} /> : ''}  
            </span>
        )
    }
}

SvgComponent.propTypes = {
  data: PropTypes.string,
}

export default SvgComponent
