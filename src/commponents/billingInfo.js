// import { useState } from 'react';
import './form.css'
import InputBar from "./inputBar";
import Header from './header';
import SpInputBars2 from './spInputBars2'
import Button from './button'


function BillingInfo({ onNext, onTab }) {
  return (

    <div className='form'>

      <form className='form-container'>
        <Header page={1} onNext={(value) => onTab(value)} />
        <InputBar name='Name on Card'
          placeholder='Opara Linus Ahmed' />
        <InputBar name='Card Type'
          placeholder='Visa' label='The purchase reciecpt will bepurchased for this address' />
        <SpInputBars2 />
        <Button value="Next" next={onNext} />

      </form>

    </div>
  );

};

export default BillingInfo;