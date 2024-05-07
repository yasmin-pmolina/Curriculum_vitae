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
            const html = <span key={`skill-${index}`}>{element.name}</span>
            htmlList.push(html)
        })

        return (
            <div className="mb-2 pb-2 softSkills">
                <div className="col ps-3">
                    <p className="fw-bolder">SOFT SKILLS</p>
                    <ListItem data={htmlList} />
                </div>
            </div>
        )
    }
}

export default SoftSkills
