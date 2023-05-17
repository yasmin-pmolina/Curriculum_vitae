import React, { Component } from 'react'
import ListItem from './basic/listComponent';

class SoftSkills extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: props.data,
        }
    }

    render() {

        const data = this.props.data;
        let htmlList = [];

        data.forEach((element, index) => {
            const html = <span key={`languages-${index}`}>{element.name}</span>
            htmlList.push(html)
        })

        return (
            <div className="col-4 m-0 p-0 softSkills">
                <div className="row p-3">
                    <p className="fw-bolder">SOFT SKILLS</p>
                    <ListItem data={htmlList} />
                </div>
            </div>
        )
    }
}

export default SoftSkills
