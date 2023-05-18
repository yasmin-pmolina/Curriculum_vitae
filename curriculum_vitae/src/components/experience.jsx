import React, { Component } from 'react'
import SvgComponent from './basic/svgComponent.jsx'
import ListItem from './basic/listComponent.jsx';
import TableComponent from './basic/TableComponent';
import { colorIconDefault, currentJobs } from '../consts.jsx';

class Experience extends Component {

    static defaultProps = {
        nameIcon: 'icon-briefcase-fill.svg',
        nameClassIcon: "icon-format",
        contextIcon: require.context("../assets/img/", true, /.svg$/)
    };

    constructor(props) {
        super(props)
        this.state = {
            data: props.data,
            contextIcon: props.contextIcon || this.defaultProps.contextIcon,
            nameIcon: props.nameIcon || this.defaultProps.nameIcon,
            nameClassIcon: props.nameClassIcon || this.defaultProps.nameClassIcon,
        }
    }

    render() {

        const { contextIcon, data } = this.props;
        let rows = [], auxstring = '';
        const headers = ['COMPANY', 'POSITION', 'RESPONSIBILITIES'];

        data.forEach((element, indexRow) => {

            let period = element.period, dateIni, dateEnd;

            if (element.data.length > 0) {

                if (element.data[0].endDate.length === 0 || currentJobs === element.data[0].endDate) {

                    var currentTime = new Date();
                    auxstring = currentTime.getMonth() + '-' + currentTime.getFullYear();

                } else
                    auxstring = element.data[0].endDate;


                dateEnd = auxstring.split("-");
                dateIni = element.data[element.data.length - 1].startDate.split("-");

                dateEnd = new Date(parseInt(dateEnd[1]), parseInt(dateEnd[0]) + 1, 20).getTime();
                dateIni = new Date(parseInt(dateIni[1]), parseInt(dateIni[0]) + 1, 1).getTime();

                let years = Math.trunc((dateEnd - dateIni) / (1000 * 60 * 60 * 24 * 364));
                let meses = Math.round((dateEnd - dateIni) / (1000 * 60 * 60 * 24 * 30) - years * 12);

                if (meses === 12) { ++years; meses = 0 }

                years = years > 0 ? `${years} años ` : "";
                meses = meses > 0 ? `${meses} meses` : "";

                period = years + meses;
            }


            const VerticalHeader = (
                <span>
                    <p className="entity">{element.entity}</p>
                    <p className="small-thin-paragraph fst-italic pt-2 time-range p-0 m-0">{period}</p>
                    <span className="small-thin-paragraph fst-italic fw-normal">
                        <SvgComponent contextIcon={contextIcon} name='icon-place.svg' colorIcon={colorIconDefault} className="icon-format small" ></SvgComponent>
                        <span className="place">{element.place}</span>
                    </span>
                </span>
            )

            element.data.forEach((row, index) => {

                const listPositions = <span>
                    <p className="positions">{row.positions}</p>
                    <span className="small-thin-paragraph fst-italic">
                        <span className="date-ini">{row.startDate}</span> - <span className="date-end">{row.endDate}</span>
                    </span>
                </span>

                if (index === 0)
                    rows.push([VerticalHeader, listPositions, row.responsibilities.length > 1 ? <ListItem data={row.responsibilities} classNameList ='experience-responsabilidad' /> : <p className='small-paragraph'>{row.responsibilities[0]}</p>]);
                else
                    rows.push(['', listPositions, row.responsibilities.length > 1 ? <ListItem data={row.responsibilities} classNameList ='experience-responsabilidad' /> : <p className='small-paragraph'>{row.responsibilities[0]}</p>]);
            })

        })

        return (
            <div>
                <span className="ms-2 fw-bolder"><SvgComponent name="icon-briefcase-fill.svg" colorIcon={colorIconDefault} className="clase-0 icon-format" ></SvgComponent></span>
                <span className="ms-2 fw-bolder">WORK EXPERIENCE</span>
                <TableComponent headers={headers} rows={rows} verticalHeader={true} horizontalHeaderRowSpan={2} classNameTable="table table-striped table-hover mb-0" />
            </div>
        )
    }
}


export default Experience
