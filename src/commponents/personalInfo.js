// import { useState } from 'react';
import './form.css'
import InputBar from "./inputBar";
import Header from './header';
import SpInputBars from './spInputBars'
import Button from './button';

function PersonalInfo({ onNext, onTab }) {



  return (

    <div className='form'>

      <form className='form-container'>
        <Header page={0} onNext={(value) => onTab(value)} />
        <InputBar name='Name' placeholder="Opara Linus Ahmed" />
        <InputBar name='Email Address' label='The purchase reciecpt will bepurchased for this address' placeholder="Opara Linus Ahmed@devmail.com" />
        <InputBar name='Address 1' placeholder='The Address of the user goes here' />
        <InputBar name='Address 2' placeholder="and here" />
        <SpInputBars />
        <Button value={"Next"} next={onNext} />
      </form>

    </div>

  )

}

export default PersonalInfo; 