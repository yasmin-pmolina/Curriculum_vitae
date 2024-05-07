import React, { useState } from 'react'
import FileUploader from '../components/basic/fileinput'
import FloatingPanel from '../components/floatingPanel'

const MakeCV = (props) => {

  /*
    const location = useLocation();
    const history = useHistory();
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
  const [isOpen, setIsOpen] = useState(false);

  function handleFileUpload(file) {
    setSelectedFile(file);
  }

  const togglePanel = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="main-container rounded-3">
        <div className="row bg-secundary gap-2 header-container">
          <span className='col-4 align-self-center bg-ocre text-center m-1 p-4'>
            <FileUploader onFileSelect={handleFileUpload} typeFile=".jpg,.png" />
            {selectedFile && (<span>Tamaño: {selectedFile.size} bytes</span>)}
          </span>

          <span className='col-4 align-self-center'>
            <div>
              <button onClick={togglePanel}></button>
              {isOpen && <FloatingPanel onClick={handleClose} />}
            </div>
          </span>

          <span className='col-4 align-self-center'>

          </span>

        </div>
      </div>
    </>
  );
}

export default MakeCV;
