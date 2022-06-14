import React, { useRef, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import S3 from 'react-aws-s3';
import { terms } from '../../../Services/Config';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

function UploadDocs({ data }) {
  const fileInput = useRef();
  let fileName = [];
  const [filename, setFile] = useState([]);
  const fileUpload = e => {
    e.preventDefault();
    let newArr = fileInput.current.files;
    for (let i = 0; i < newArr.length; i++) {
      handleUpload(newArr[i]);
    }
  };

  const handleUpload = file => {
    let newFileName = file.name.replace(/\..+$/, '');
    const ReactS3Client = new S3(terms);
    ReactS3Client.uploadFile(file, newFileName).then(data => {
      if (data.status === 204) {
        console.log(data);
        let name = data.key.split('/');
        name = name[1];
        fileName.push({
          name: newFileName,
          location: data.location,
        });
        console.log('success', fileName);
        setFile(fileName);
      } else {
        console.log('fail');
      }
    });
  };

  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    paper1: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: '#000',
      backgroundColor: '#fff',
      borderStyle: 'dashed',
      borderColor: 'green',
    },
    paper2: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: '#000',
      backgroundColor: '#fff',
      padding: 8,
    },
    button: {
        marginRight: theme.spacing(50),
        marginTop: theme.spacing(2),
      },
  }));
  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Paper className={classes.paper1}>
            <h5>Choose or Drag files to Upload</h5>
            <Button>
              <label>
                <input
                  style={{ display: 'none', fontSize: '100px' }}
                  id="upload-photo"
                  name="upload-photo"
                  type="file"
                  multiple
                  ref={fileInput}
                  onChange={fileUpload}
                />
                <CloudUploadIcon style={{ fontSize: 250, color: 'green' }} />
              </label>
            </Button>
          </Paper>
        </Grid>

        <Grid item xs>
          <Paper className={classes.paper2}>
            <Grid>
              <TextField
                id="outlined-select-type-native"
                as="select"
                name="propertyCountry"
                label="Filename"
                // value={countryName}
                // onChange={handleCountryChange}
                SelectProps={{
                  native: true,
                }}
                variant="outlined"
                className="selectCountry"
                style={{ marginLeft: '34px' }}
              ></TextField>
              <input type="file" style={{ marginLeft: '13px', marginTop: '5px' }} />
              <Button
                variant="contained"
                color="secondary"
                className={classes.button}
                startIcon={<AddIcon />}
              >
                Add file
              </Button>
            </Grid>

            <div class="wrapper">
              <ul>
                {filename ? (
                  <li style={{ listStyle: 'none' }}>
                    {filename.map(result => (
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
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
export default UploadDocs;
