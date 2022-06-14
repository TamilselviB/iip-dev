import React, { useState } from 'react';
import ConfirmPage from '../../../../pages/Customer/ConfirmPage';
import FormInsuredDetails from '../FormInsuredDetails';
import FormPropertyDetails from '../FormPropertyDetails';
import * as getQuoteService from '../../../../Services/getQuoteService';
import FormsTerms from '../FormsTerms';
import { useSelector } from 'react-redux';

const FormUser = props => {
  console.log(props);
  const userid = useSelector(state => state.authReducer.userid);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    userId: userid,
    product: '',
    insuredType: '',
    insuredName: useSelector(state => state.authReducer.username),
    contactPerson: useSelector(state => state.authReducer.username),
    alternateContact: '',
    mobileNumber: useSelector(state => state.authReducer.mobile),
    emailId: useSelector(state => state.authReducer.email),
    regNo: '',
    city: '',
    state: '',
    pincode: '',
    occupancy: '',
    address: '',
    block: '',
    products: [],
    insuredTypes: [],
    subsidiaryCompany: '',
    propertyName: '',
    propertyGovernate: '',
    propertyStreet: '',
    propertyBlock: '',
    propertyArea: '',
    propertyCity: '',
    propertyCountry: '',
    geoCode: '',
    occupancyType: '',
    constructionType: '',
    yearBuilt: '',
    noOfFloors: '',
    buildingHeight: '',
    locationDescription: '',
    clSumInsured: '',
    clExpectedRate: '',
    plSumInsured: '',
    plExpectedRate: '',
    deductible: '',
    expectedCoverage: '',
    remarks: '',
    covers: {},
    productCovers: [],
    safetyMeasures: {},
    insuranceCompanies: '',
    notes: '',
    terms: {},
    termsInclusion: Array(4).fill(''),
    termsExclusion: Array(4).fill(''),
    termsWarranty: Array(4).fill(''),
    termsSubjectivity: Array(4).fill(''),
  });
  React.useEffect(() => {
    const products = [];
    let covers = {};
    let safetyMeasures = {};
    const payload = {
      lineOfBusinessId: 6,
    };
    getQuoteService
      .getMotorInsurance(payload)
      .then(data => {
        data.forEach(e => {
          products.push({
            value: e.id,
            label: e.productName,
          });
          covers[e.id] = e.covers;
          safetyMeasures[e.id] = e.safetyMeasures;
        });
        setFormData({
          products,
          covers,
          safetyMeasures,
        });
      })
      .catch(error => {
        console.log('error', error);
      });
  }, []);
  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  switch (step) {
    case 1:
      return (
        <FormInsuredDetails
          // eslint-disable-next-line no-undef
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
          props={props}
        />
      );
    case 2:
      return (
        <FormPropertyDetails
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
          prevStep={prevStep}
          props={props}
        />
      );
    
    case 3:
      return (
        <FormsTerms
          formData = {formData}
          setFormData = {setFormData}
          nextStep = {nextStep}
          prevStep = {prevStep}
        />
      )

    case 4:
      return (
        <ConfirmPage formData={formData} prevStep={prevStep} nextStep={nextStep} props={props} />
      );
    default:
      return <h6>Default</h6>;
  }
};

export default FormUser;


 