import React, { Component } from 'react'

class ListItem extends Component {

    static defaultProps = {
        nameIcon: "icon-date.svg",
        nameClassIcon: "icon-format",
        type: "ul",
        contextIcon: require.context("../../assets/img/", true, /.svg$/)
    };

    constructor(props) {
        super(props)
        this.state = {
            data: props.data,
            type: props.type || this.defaultProps.type,
            contextIcon: props.contextIcon || this.defaultProps.contextIcon,
            nameIcon: props.nameIcon || this.defaultProps.nameIcon,
            nameClassIcon: props.nameClassIcon || this.defaultProps.nameClassIcon,
            nameClassItem: props.nameClassItem || "",
            classNameList: props.classNameList || ""
        }
    }

    render() {

        const {data, type, nameClassItem, classNameList} = this.props;
        let htmlList = [];

        data.forEach((element,index)  => {
            const html = <li className={nameClassItem} key = {`item-${index}`}>{element}</li>
            htmlList.push(html)
        });

        return (
          (type === 'ol') ? <ol className={classNameList}>{htmlList}</ol> : <ul className={classNameList}>{htmlList}</ul>
        )
    }
}

export default ListItem
