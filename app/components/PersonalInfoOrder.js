import React, { useEffect, useState } from 'react'
import StyledInput from './StyledInput'
import StyledHeading from './StyledHeading';


export default function PersonalInfoOrder() {

  const [minDate, setMinDate] = useState('');

  useEffect(() => {
    const date = new Date();
    date.setDate(date.getDate() + 14);
    setMinDate(date.toISOString().substr(0, 10));
  }, []);


  return (
    <div className='container  mx-auto'>

      <br></br>
      <StyledHeading text={'Personlig info:'} />
      <StyledInput
        type={'text'}
        htmlFor={'name'}
        name={'name'}
        lableText={'Namn:'}
      />

      <StyledInput
        type={'text'}
        htmlFor={'surname'}
        name={'surname'}
        lableText={'Efternamn:'}
      />

      <StyledInput
        type={'text'}
        htmlFor={'e-post'}
        name={'e-post'}
        lableText={'E-post:'}
      />

      <StyledInput
        type={'text'}
        htmlFor={'phonenr'}
        name={'phonenr'}
        lableText={'Mobil nr:'}
      />

      <StyledInput
        type={'text'}
        htmlFor={'adress'}
        name={'adress'}
        lableText={'Leveransadress:'}
      />

      <label htmlFor="dateInput">Leveransdatum:</label>
      <br></br>
      <input type="date" id="dateInput" min={minDate} className='border rounded border-gray-700' />
      <br></br>
      <br></br>
    </div>
  )
}
