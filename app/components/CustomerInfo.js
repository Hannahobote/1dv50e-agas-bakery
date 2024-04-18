import React from 'react'
import StyledHeading from './StyledHeading'
import StyledInputDefaultValue from './StyledInputDefaultValue'

export default function CustomerInfo({order}) {
  return (
    <div>
      <StyledHeading text={'Beställare'} />
      <StyledInputDefaultValue
        type={'text'}
        name={'name'}
        htmlFor={'name'}
        defaultValue={`${order.name}`}
        lableText={'Namn: '}
      />

      <StyledInputDefaultValue
        type={'text'}
        name={'surname'}
        htmlFor={'surname'}
        defaultValue={`${order.surname}`}
        lableText={'Efternamn: '}
      />
      <StyledInputDefaultValue
        type={'text'}
        name={'phonenr'}
        htmlFor={'phonenr'}
        defaultValue={`${order.phonenr}`}
        lableText={'Mobil nummer: '}
      />
      <StyledInputDefaultValue
        type={'text'}
        name={'epost'}
        htmlFor={'epost'}
        defaultValue={`${order.epost}`}
        lableText={'E-post: '}
      />

      <StyledInputDefaultValue
        type={'text'}
        name={'leveransadress'}
        htmlFor={'leveransadress'}
        defaultValue={`${order.leveransadress}`}
        lableText={'Leveransadress: '}
      />

    </div>
  )
}
