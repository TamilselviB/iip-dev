import React, { useEffect, useState } from 'react';
import * as getQuoteService from '../../../Services/getQuoteService';
import ConfirmPage from '../../../pages/Customer/ConfirmPage';

const ViewForm = props => {
  let quoteId = props.location.aboutProps.details.id;
  const [step, setStep] = useState(1);
  let details;
  console.log('----->quoteId', quoteId);
  const [formData, setFormData] = useState();
  useEffect(() => {
    getQuoteService
      .getQuote(quoteId)
      .then(result => {
        console.log(result);
        setFormData(result)
        console.log(formData);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  return (
    <div>
      {formData && (
        <ConfirmPage formData={formData} prevStep={prevStep} nextStep={nextStep} props={props} />
      )}
    </div>
  );
};

export default ViewForm;
