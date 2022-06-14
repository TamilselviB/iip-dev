import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
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

export default function UploadDocs() {
  const classes = useStyles();
  return (
    <div>
      <Typography>
        <div class="row">
          <div class="col-5">
            <div class="card-body">
              <div
                className="containerUpl"
              >
                <div class="header" />
                <div class="file upload">
                  <FontAwesomeIcon
                    icon={faArrowCircleUp}
                    className="uploadDocs"
                  />
                  <div
                    className="box"
                  >
                    <h6>Choose or Drag files to Upload</h6>

                    <div>
                      <input
                        type="file"
                        id="myfile"
                        name="myfile"
                        className="fileUpl"
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
                class="container contain"
              >
                <div class="row">
                  <input
                    type="file"
                    className="uplFile"
                    multiple
                  // onChange={multipleFileChangeHandler}
                  />
                  <button
                    type="button"
                    class="btn btn-primary alignBtn"
                  // onClick={multipleFileUploadHandler}
                  >
                    Upload
                                  </button>
                </div>
                <br></br>

                <div
                  className="wrapper wrap"
                >
                  <ul>
                    {/* <li style={{ listStyle: 'none' }}>
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
                    </li> */}
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
