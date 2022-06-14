import React, { useEffect } from 'react';
import userInfo from '../../../pages/EndorsementPage/userInfo';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import TextField from '@material-ui/core/TextField';
import { fetchPoliciesById } from '../../../actions/userQuote';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import UserInfo from '../../../pages/EndorsementPage/userInfo';
import UserInfoConfirm from '../../../pages/EndorsementPage/UserInfoConfirm';

const EditEndorsement = () => {
  const dispatch = useDispatch();
  // const [policieById, setPolicieById] = React.useState('female');
  // setPolicieById(useSelector(state => state.userQuoteReducer.policieById));
  const policieById = useSelector(state => state.userQuoteReducer.policieById);
  console.log('policieById', policieById);
  const [type, setType] = React.useState('female');
  const [id, setId] = React.useState('');
  const [userInfoConfirmPage, setUserInfoConfirmPage] = React.useState(false);
  const [userInfoConfirmPageValue, setUserInfoConfirmPageValue] = React.useState('');
  useEffect(() => {
    const queryString = window.location.search;
    console.log(queryString);
    const urlParams = new URLSearchParams(queryString);
    setType(urlParams.get('type'));
    setId(urlParams.get('id'));
    console.log('id', urlParams.get('id'));
    console.log('type', urlParams.get('type'));
    dispatch(fetchPoliciesById(urlParams.get('id')));
  }, [setType, setId]);

  const setUserInfoConPage = (values) => {
    setUserInfoConfirmPageValue(values);
    setUserInfoConfirmPage(true);
  };

  const setUserInfo = (values) => {
    console.log('passed back data', values)
  };

  return (
    // <userInfo></userInfo>
    <>
      <h1>EditEndorsement</h1>
      {type === 'userInfo' &&  !userInfoConfirmPage ? (
        <UserInfo setUserInfoConPage={setUserInfoConPage} policieById={policieById}></UserInfo>
      ) : null}
      {type === 'userInfo' &&  userInfoConfirmPage ? (
        <UserInfoConfirm setUserInfo={setUserInfo} userInfoConfirmPageValue={userInfoConfirmPageValue}></UserInfoConfirm>
      ) : null}
      {type === 'male' ? <h1 index={type}>male edit form</h1> : null}
    </>
  );
};

export default EditEndorsement;
