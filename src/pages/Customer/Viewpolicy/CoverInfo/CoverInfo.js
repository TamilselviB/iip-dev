import React from 'react';
import '../../../../components/pages/Customer/TableSub.css';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import Typography from '@material-ui/core/Typography';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    // marginLeft: theme.spacing(12)
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    borderColor: 'black',
  },
  tablerow: {
    backgroundColor: '#35baf6',
    color: theme.palette.common.white,
    fontSize: 15,
    padding: 0,
    fontWeight: 'bold',
    borderWidth: 1,
    borderColor: '#fff',
    borderStyle: 'soild',
  },
  tablerow1: {
    fontWeight: 'bold',
    fontSize: 16,
    padding: 20,
    paddingBottom: '12px',
    backgroundColor: '#e9e9e9',
    borderStyle: 'hidden',
    wordWrap: 'break-word',
  },
  tablerow2: {

    borderStyle: 'hidden',
  },
  tablerow3: {
    fontSize: 16,
    borderStyle: 'hidden',
    backgroundColor: '#fff',
    padding: 0,
  },
  tablerow4: {
    backgroundColor: '#35baf6',
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    borderSpacing: theme.spacing(22),
    borderColor: '#fff',
    borderStyle: 'soild',
    borderCollapse: 'collapse',
  },
  tablerow5: {
    fontWeight: 'bold',
    fontSize: 16,
    padding: 20,
    paddingBottom: '16px',
    backgroundColor: '#e9e9e9',
    borderStyle: 'hidden',
    wordWrap: 'break-word',
  },
  icon: {
    marginLeft: theme.spacing(12),
  },
}));

function CoverInfo(data) {
  const classes = useStyles();
  const inputData = data?.data?.riskDetails;
  const policyLevelCover = data?.data?.policyLevelCover;

  let coverName = data?.data?.product?.covers;
  const arrayOne = data?.data?.product?.covers;
  let finalArray = [];
  if (inputData) {
    inputData.map(arr => {
      let arrayTwo = arr.covers;
      const objOne = arrayOne.reduce((aggObj, item) => {
        aggObj[item.coverName] = item;
        return aggObj;
      }, {});

      const mergedObjOutput = arrayTwo.reduce((aggObj, item) => {
        aggObj[item.coverName] = item;
        return aggObj;
      }, objOne);

      let mergedFinalOutput = [...arrayTwo];
      mergedFinalOutput = Object.values(mergedObjOutput);

      console.log(mergedFinalOutput);
      finalArray.push(mergedFinalOutput);
      arr.covers = mergedFinalOutput;
    });
  }
  console.log(inputData);

  return (
    <div className={classes.root}>
      <Grid container xs={12}>
        <TableContainer component={Paper} elevation={12}>
          <Table className={classes.table} stickyHeader={true} aria-label="sticky table">
            <TableHead>
              {inputData ? (
                <TableRow>
                  <TableCell align="center" className={classes.tablerow}>
                    Subsidiary Company, Property
                  </TableCell>
                  {inputData.map(data => (
                    <TableCell align="center" className={classes.tablerow}>
                      {data.subsidiaryCompany} , {data.propertyName}
                    </TableCell>
                  ))}
                </TableRow>
              ) : null}
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <Table>
                    <TableHead>
                      <TableRow style={{ paddingBottom: 0}}>
                        <TableCell align="center" className={classes.tablerow}>
                          Cover Name
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {coverName?.map(cover => {
                        return (
                          <>
                            {''}
                            {!cover?.isPolicyLevel ? (
                              <TableRow>
                                <TableCell className={classes.tablerow1}>
                                <Typography style={{fontWeight: 'bold'}}>{cover?.coverName}</Typography>
                                </TableCell>
                              </TableRow>
                            ) : null}{' '}
                            {''}
                          </>
                        );
                      })}
                    </TableBody>
                  </Table>
                </TableCell>
                {inputData?.map((data, index) => {
                  return (
                    <TableCell style={{ paddingBottom: '16px' }}>
                      <Table>
                        <TableHead>
                          <TableRow>
                            <TableCell align="center" className={classes.tablerow}>
                              Sum Insured
                            </TableCell>
                            <TableCell align="center" className={classes.tablerow}>
                              Expected Rate
                            </TableCell>
                            <TableCell align="center" className={classes.tablerow} colSpan={5}>
                              Premium
                            </TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {data?.covers?.map((cover, index) => {
                            return (
                              <>
                                {!cover?.isPolicyLevel ? (
                                  <TableRow>
                                    <TableCell className={classes.tablerow2}>
                                      <Typography>{cover?.sumAssured}</Typography>
                                    </TableCell>
                                    <TableCell className={classes.tablerow2}>
                                      <Typography>{cover?.rate}</Typography>
                                    </TableCell>
                                    <TableCell className={classes.tablerow2}>
                                      <Typography>{cover?.coverPremium}</Typography>
                                    </TableCell>
                                  </TableRow>
                                ) : null}
                              </>
                            );
                          })}
                        </TableBody>
                      </Table>
                    </TableCell>
                  );
                })}
              </TableRow>
              <TableRow>
                <TableCell>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell align="center" className={classes.tablerow}>
                          Policy Level Coverage
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {policyLevelCover?.map(cover => {
                        return (
                          <>
                            {''}
                            {cover?.isPolicyLevel ? (
                              <TableRow>
                                <TableCell className={classes.tablerow5}>
                                  {cover?.coverName}
                                </TableCell>
                              </TableRow>
                            ) : null}{' '}
                            {''}
                          </>
                        );
                      })}
                    </TableBody>
                  </Table>
                </TableCell>
                {inputData?.map((data, index) => {
                  return (
                    <TableCell style={{ paddingBottom: '20px' }}>
                      <Table>
                        <TableHead>
                          <TableRow>
                            <TableCell align="center" className={classes.tablerow}>
                              Sum Insured
                            </TableCell>
                            <TableCell align="center" className={classes.tablerow}>
                              Expected Rate
                            </TableCell>
                            <TableCell align="center" className={classes.tablerow} colSpan={5}>
                              Premium
                            </TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {policyLevelCover?.map((cover, index) => {
                            return (
                              <>
                                {cover?.isPolicyLevel ? (
                                  <TableRow style={{ padding: '22px'}}>
                                    <TableCell className={classes.tablerow2}>
                                      {cover?.sumAssured}
                                    </TableCell>
                                    <TableCell className={classes.tablerow2}>
                                      {cover?.rate}
                                    </TableCell>
                                    <TableCell className={classes.tablerow2}>
                                      {cover?.coverPremium}
                                    </TableCell>
                                  </TableRow>
                                ) : null}
                              </>
                            );
                          })}
                        </TableBody>
                      </Table>
                    </TableCell>
                  );
                })}
              </TableRow>

              <TableRow>
                <TableCell>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell align="center" className={classes.tablerow}>
                          Deductible
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <>
                        {''}

                        <TableRow>
                          <TableCell className={classes.tablerow4} align="center">
                            Remarks
                          </TableCell>
                        </TableRow>

                        {''}
                      </>
                    </TableBody>
                  </Table>
                </TableCell>
                {inputData?.map((data, index) => {
                  return (
                    <TableCell style={{ paddingBottom: '30px' }}>
                      <Table>
                        <TableBody>
                          <>
                            <TableRow>
                              {inputData?.map(data => (
                                <TableCell className={classes.tablerow2}>
                                  {data.deductible}
                                </TableCell>
                              ))}
                            </TableRow>
                            <TableRow>
                              {inputData?.map(data => (
                                <TableCell className={classes.tablerow2}>
                                  {data.remarks}
                                </TableCell>
                              ))}
                            </TableRow>
                          </>
                        </TableBody>
                      </Table>
                    </TableCell>
                  );
                })}
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </div>
  );
}

export default CoverInfo;
