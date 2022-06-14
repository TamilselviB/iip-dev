import React from 'react';
import './App.css';
import { Redirect, Route, Switch } from 'react-router';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import Customer from './pages/Customer/Customer';
import GetQuote from './pages/Customer/GetQuote/GetQuote';
import UserForm from './components/pages/Customer/UserForm';
import FormUser from './components/pages/Customer/EngineeringInsurance/FormUser';
import MotorIns from './components/pages/Customer/MotorIns';
import Insurance from './pages/Insurance/Insurance';
import NewRequest from './components/pages/Customer/NewRequest';
import EditCustomerReq from './components/pages/Customer/EditCustomerReq';
import Broker from './pages/Broker/Broker';
import Submitted from './pages/Customer/Submitted/Submitted';
import ViewForm from './components/pages/Customer/ViewForm';
import InProgress from './pages/Customer/InProgress/InProgress';
import Draft from './pages/Customer/Draft/Draft';
import QuoteTab from './pages/Customer/QuoteTab';
import Active from './pages/Customer/Active/Active';
import ComparePolicy from './pages/Compare/ComparePolicy';
import EditEndorsement from './components/pages/Customer/EditEndorsement';
// layout
import HomeLayout from './pages/Layout/HomeLayout/HomeLayout';
import AuthLayout from './pages/Layout/AuthLayout/AuthLayout';
import Viewpolicy from './pages/Customer/Viewpolicy/Viewpolicy';
import InsurePolicy from './pages/Customer/InsurePolicy/InsurePolicy';
// Endorsement Page
import ConfirmNewLocation from './pages/EndorsementPage/ConfirmNewLocation';
import NewLocation from './pages/EndorsementPage/NewLocation';
import userInfo from './pages/EndorsementPage/userInfo';
import UserInfoConfirm from './pages/EndorsementPage/UserInfoConfirm';
import AddCover from './pages/EndorsementPage/AddCover';
import AddRisk from './pages/EndorsementPage/AddRisk';
import AddTerms from './pages/EndorsementPage/AddTerms';
import Claims from './pages/Claims/Claims';
import ViewClaims from './pages/Claims/ViewClaims';
import AddDocs from './pages/EndorsementPage/AddDocs';
import Endorse from './pages/EndorsementPage/Endorse';
import Adjuster from './pages/Adjuster/Adjuster';
import FormEngineeringInsurance from './components/pages/Customer/EngineeringInsurance/FormEngineeringInsurance';
import ClaimStatus from './pages/Customer/ClaimStatus/ClaimStatus';
import FormGeneral from './components/pages/Customer/GeneralAccident/FormGeneral';
import PublicLiability from './components/pages/Customer/GeneralAccident/PublicLiability';

const AuthenticatedRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = !!sessionStorage.getItem('token');
  return <HomeLayout>{isAuthenticated ? <Component {...rest} /> : <Redirect to="/" />}</HomeLayout>;
};

const UnAuthenticatedRoute = ({ component: Component, ...rest }) => {
  return (
    <AuthLayout>
      {' '}
      <Component {...rest} />{' '}
    </AuthLayout>
  );
};

function App() {
  return (
    <div className="App">
      {/* <Router/> */}

      {/* <Header /> */}
      <Switch>
        <UnAuthenticatedRoute exact path="/" component={Login} message="/Customer" />
        <UnAuthenticatedRoute path="/Register" component={Register} />
        <AuthenticatedRoute exact path="/Customer" component={Customer} />
        <AuthenticatedRoute exact path="/Insurance" component={Insurance} />
        <AuthenticatedRoute exact path="/adjuster" component={Adjuster} />
        <AuthenticatedRoute exact path="/Insurance/NewRequest" component={NewRequest} />
        <AuthenticatedRoute exact path="/Insurance/NewRequest/:id" component={EditCustomerReq} />
        <AuthenticatedRoute
          exact
          path="/Insurance/NewRequest/InsurePolicy/:id"
          component={InsurePolicy}
        />
        {/* Claims Page */}
        <AuthenticatedRoute exact path="/Customer/claims" component={Claims} />
        <AuthenticatedRoute exact path="/Insurance/claims" component={Claims} />
        <AuthenticatedRoute exact path="/Insurance/claims/:id" component={ViewClaims} />

        <AuthenticatedRoute exact path="/Broker" component={Broker} />
        <AuthenticatedRoute exact path="/Customer/GetQuote" component={GetQuote} />
        <AuthenticatedRoute exact path="/Customer/GetQuote/UserForm" component={UserForm} />
        <AuthenticatedRoute exact path="/Customer/GetQuote/FormUser" component={FormUser} />
        <AuthenticatedRoute exact path="/Customer/GetQuote/MotorIns" component={MotorIns} />
        <AuthenticatedRoute exact path="/Customer/Draft" component={Draft} />
        <AuthenticatedRoute exact path="/Customer/Submitted" component={Submitted} />
        <AuthenticatedRoute exact path="/Customer/Submitted/ViewForm" component={ViewForm} />
        <AuthenticatedRoute exact path="/Customer/Received Quotes" component={InProgress} />
        <AuthenticatedRoute
          exact
          path="/Customer/EngineeringInsurance/FormEngineeringInsurance"
          component={FormEngineeringInsurance}
        />
        <AuthenticatedRoute exact path="/Customer/FormGeneral" component={FormGeneral} />
        <AuthenticatedRoute exact path="/Customer/My Policies" component={Active} />
        <AuthenticatedRoute exact path="/Customer/Quotation/:id" component={QuoteTab} />
        <AuthenticatedRoute exact path="/Customer/compare" component={ComparePolicy} />

        <AuthenticatedRoute exact path="/Customer/editEndorsement" component={EditEndorsement} />
        <AuthenticatedRoute exact path="/Customer/viewpolicy/:id" component={Viewpolicy} />
        <AuthenticatedRoute
          exact
          path="/Customer/ConfirmNewLocation"
          component={ConfirmNewLocation}
        />
        <AuthenticatedRoute exact path="/Customer/Endorsement" component={Endorse} />
        {/* EndorsementPage */}
        <AuthenticatedRoute exact path="/Customer/NewLocation" component={NewLocation} />
        <AuthenticatedRoute exact path="/Customer/PublicLiability" component={PublicLiability} />
        <AuthenticatedRoute exact path="/Customer/userInfo" component={userInfo} />
        <AuthenticatedRoute exact path="/Customer/AddRisk" component={AddRisk} />
        <AuthenticatedRoute exact path="/Customer/AddTerms" component={AddTerms} />
        <AuthenticatedRoute exact path="/Customer/AddCover" component={AddCover} />
        <AuthenticatedRoute exact path="/Customer/UserInfoConfirm" component={UserInfoConfirm} />
        <AuthenticatedRoute exact path="/Customer/viewpolicy/:id" component={Viewpolicy} />
      </Switch>
    </div>
  );
}

export default App;
