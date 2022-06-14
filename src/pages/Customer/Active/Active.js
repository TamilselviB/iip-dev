import React, { useEffect, useState } from 'react';
import Container from '@material-ui/core/Container';
import { useSelector, useDispatch } from 'react-redux';
import { DataGrid } from '@material-ui/data-grid';
import InputBase from '@material-ui/core/InputBase';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import PolicyColumns from '../../../columns/PolicyColumns';
import { fetchMyPolicies, searchMypolicies } from '../../../actions/userQuote';

import useStyles from './Active.styles.js';

function formatRow(data) {
  let rows = [];
  if (data && data.length > 0) {
    rows = data.map(value => {
      const format = { ...value };
      format.productName = value.product.productName;
      format.companyName = value.company.companyName;
      return format;
    });
  }
  return rows;
}

function Active() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const id = useSelector(state => state.authReducer.userId) || sessionStorage.getItem('userid');
  const activePolicies = useSelector(state => state.userQuoteReducer.myPolicies);
  const columns = PolicyColumns;

  useEffect(() => {
    dispatch(fetchMyPolicies(id));
  }, [id]);

  useEffect(() => {
    if (search === '') {
      dispatch(fetchMyPolicies(id));
    } else {
      dispatch(searchMypolicies(search));
    }
  }, [search]);

  return (
    <Container maxWidth="lg">
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder={'Enter Request ID'}
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ 'aria-label': 'search' }}
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>
      <div style={{ height: 550, width: '100%' }}>
        <Grid container style={{ display: 'flex', height: '100%' }}>
          <DataGrid columns={columns} rows={formatRow(activePolicies)} pageSize={10} />
        </Grid>
      </div>
    </Container>
  );
}

export default Active;
