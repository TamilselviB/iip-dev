import React, { useState, useEffect } from 'react';
import S3 from 'react-aws-s3';
import { config } from '../../Services/Config';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import './Info.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFilePdf,
  faArrowCircleUp
} from '@fortawesome/free-solid-svg-icons';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Upload({values}) {
  const classes = useStyles();
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [document, setDocument] = useState([]);

  function multipleFileChangeHandler(event) {
    setSelectedFiles(event.target.files);
    console.log(event.target.files);
  }

  async function multipleFileUploadHandler() {
    const ReactS3Client = new S3(config);
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
      setDocument(file);
      values.document=file
    }

    console.log(document);
  }
  return (
    <div>
      <Typography>
        <div class="row" style={{ marginLeft: '-195px' }}>
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
                  <FontAwesomeIcon
                    icon={faArrowCircleUp}
                    className="uploadDocs"
                  />
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
            <div class="card-body" style={{ marginLeft: '86px' }}>
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
                    style={{ marginLeft: '-24px', marginTop: '5px' }}
                    multiple
                    onChange={multipleFileChangeHandler}
                  />
                  <button
                    type="button"
                    class="btn btn-primary"
                    onClick={multipleFileUploadHandler}
                    style={{ width: '97px', height: '40px', marginTop: '-4px' }}
                  >
                    Upload
                                  </button>
                </div>
                <br></br>

                <div
                  class="wrapper"
                  style={{
                    marginLeft: '-71px',
                    width: '475px',
                  }}
                >
                  <ul>
                    <li style={{ listStyle: 'none' }}>
                      <div class="fileitem">
                        <FontAwesomeIcon
                          icon={faFilePdf}
                          style={{
                            color: 'red',
                            backgroundColor: 'white',
                            fontSize: '22px',
                          }}
                        />
                        <div class="fileprogress">
                          {document ? (
                            <div>
                              {document.map(doc => (
                                <div class="fileinfo">
                                  <div>
                                    <Link
                                      href={doc.location}
                                      class="filename"
                                      target="__blank"
                                    >
                                      {doc.name}
                                    </Link>
                                  </div>
                                  <div class="filesize">
                                    <div class="fileclose">X</div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Typography>
    </div>
  );
}
