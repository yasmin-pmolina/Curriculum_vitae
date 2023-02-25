import React, { useState } from 'react';
import SvgComponent from './svgComponent';
import { colorIconDefault } from '../../consts';

export default function FileUploader(props) {

    const contextIcon = require.context("../../assets/img/", true, /.svg$/)

    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileInputChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
        props.onFileSelect(file);
    };

    const handleSelectFileButtonClick = () => {
        document.getElementById('fileInput').click();
    };

    return (
        <span>
            <input
                type="file"
                id="fileInput"
                style={{ display: 'none' }}
                onChange={handleFileInputChange}
                accept={props.typeFile}
            />
            <span
                style={{ cursor: 'pointer'}}
                onClick={handleSelectFileButtonClick}
            >
                <span  style={{ cursor: 'pointer'}}>
                    {!selectedFile && <SvgComponent contextIcon={contextIcon} name='icon-plus-circle.svg' colorIcon={colorIconDefault} className="icon-format m-1" ></SvgComponent>}
                    {!selectedFile && <span>Seleccione un archivo</span>}
                    {selectedFile && <SvgComponent contextIcon={contextIcon} name='icon-file-image.svg' colorIcon={colorIconDefault} className="icon-format m-1" ></SvgComponent>}
                    {selectedFile && <span>Archivo seleccionado: {selectedFile.name}</span>}
                </span>
            </span>
        </span>
    )
}




