import React, { useState } from 'react'
import photo from '../models/applicant.jpg'
import FileUploader from '../components/basic/fileinput'


const MakeCV = ({ dataView }) => {

  /*
    const location = useLocation();
    const history = useHistory();

    console.log('We are in Route:', location.pathname); // '/about | /faqs'

    const navigate = (path) => {
        history.push(path);
    }

    const navigateProps = (path) => {
        history.push({
            pathname: path,
            search: '?online=true', // Query Params
            state: {
                online: true
            }
        });
    }*/

  const [selectedFile, setSelectedFile] = useState(null);

  function handleFileUpload(file) {
    setSelectedFile(file);
  }

  return (
    <div className="main-container rounded-3">
      <div className="row bg-secundary gap-2 header-container">
        <span className='col-4 align-self-center bg-ocre text-center m-1 p-4'>
            <FileUploader onFileSelect={handleFileUpload} typeFile=".jpg,.png" />
          {selectedFile && (<span>Tamaño: {selectedFile.size} bytes</span>)}
        </span>

        <span className='col-4 align-self-center'>
        </span>

        <span className='col-4 align-self-center'>


        </span>

      </div>
    </div >
  );
}

export default MakeCV;
