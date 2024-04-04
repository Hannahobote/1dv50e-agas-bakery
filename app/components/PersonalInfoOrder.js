import React from 'react'
import StyledInput from './StyledInput'

export default function PersonalInfoOrder() {
  return (
    <div className='container  mx-auto'>

      <br></br>
      <h1>Personlig info:</h1>
      <br></br>

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

      
    </div>
  )
}
