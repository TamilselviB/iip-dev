import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf, faArrowCircleUp } from '@fortawesome/free-solid-svg-icons';
import S3 from 'react-aws-s3';
import { terms } from '../../../Services/Config';
import TextField from '@material-ui/core/TextField';

import Button from '@material-ui/core/Button';

export default function UplDocs({ data,handleNext }) {
  const fileInput = useRef();
  const [selectedFiles, setSelectedFiles] = useState([]);
  let fileName = [];
  const [document, setDocument] = useState([]);
  function fileUpload(event) {
    event.preventDefault();
    setSelectedFiles(event.target.files);
    console.log(event.target.files);
  }

  async function handleUpload() {
    const ReactS3Client = new S3(terms);
    let files = selectedFiles;
    let file = [];
    if (files) {
      for (let i = 0; i < files.length; i++) {
        await ReactS3Client.uploadFile(files[i], files[i].name).then(data => {
          console.log(data);
          file.push({
            name: files[i].name,
            location: data.location,
          });
        });
      }
      document.push.apply(document,file)
    }

    console.log(document);
  }

  return (
    <div>
      <div class="row">
      
      <div class="col-5">
                            <div class="card-body">
                              <div
                                class="container"
                                style={{
                                  border: '1px dashed gray',
                                  height: '265px',
                                  fontWeight: 'bold',
                                  backgroundColor: '#efefef',
                                  width: '310px',
                                  textAlign: 'center',
                                  marginLeft: '110px',
                                }}
                              >
                                <div class="header" />
                                <div class="file upload">
                                  <FontAwesomeIcon icon={faArrowCircleUp} className="uploadDocs" />
                                  <div
                                    class=" box"
                                    style={{
                                      border: '1px dashed gray',
                                      textAlign: 'center',
                                      marginLeft: '67px',
                                      marginTop: '20px',
                                      width: '286px',
                                      backgroundColor: 'white',
                                    }}
                                  >
                                    <h6>Choose or Drag files to Upload</h6>

                                    <div>
                                      <input
                                        type="file"
                                        id="myfile"
                                        name="myfile"
                                        style={{
                                          textAlign: 'center',
                                          marginTop: '-33px',
                                          position: 'absolute',
                                          marginLeft: '-93px',
                                          opacity: '0',
                                        }}
                                      />
                                    </div>
                                    <div></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
        <div class="col-7">
          <div class="card-body">
            <div
              class="container"
              style={{
                border: '0px dashed gray',
                height: '271px',
                width: '513px',
              }}
            >
              <div class="row">
                
                <input
                  type="file"
                  style={{ marginLeft: '13px', marginTop: '5px' }}
                  multiple
                  onChange={fileUpload}
                />
                <button type="button" className="btn btn-primary" onClick={handleUpload}>
                  Upload
                </button>
                
              </div>
              <br></br>

              <div class="wrapper">
                <ul>
                  {document ? (
                    <li style={{ listStyle: 'none' }}>
                      {document.map(result => (
                        <div class="fileitem">
                          <FontAwesomeIcon
                            icon={faFilePdf}
                            style={{ color: 'red', backgroundColor: 'white', fontSize: '22px' }}
                          />
                          <div class="fileprogress">
                            <div class="fileinfo">
                              <a href={result.location} class="filename" target="__blank">
                                {result.name}
                              </a>
                              <div class="filesize">
                                <div class="fileclose">X</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </li>
                  ) : null}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12"> <Button variant="contained" color="primary" className="nextEndt" onClick={handleNext?handleNext:''}>
        Next
     </Button></div>
    </div>
  );
}
