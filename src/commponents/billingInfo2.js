// import { useState } from 'react';
import './form.css'
import Header from './header';
import Button from './button'
import PaymentAdvice from './paymentAdvice';


function BillingInfo2({ onNext, onTab }) {
  return (

    <div className='form'>

      <form className='form-container'>
        <Header page={2} onNext={(value) => onTab(value)} />
        <PaymentAdvice />
        <Button value={"Pay"} next={onNext} />

      </form>

    </div>
  );

};

export default BillingInfo2;