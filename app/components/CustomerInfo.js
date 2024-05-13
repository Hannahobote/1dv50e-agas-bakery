import React from 'react'
import StyledHeading from './StyledHeading'
import StyledInputDefaultValue from './StyledInputDefaultValue'

export default function CustomerInfo({order, onChange}) {
  return (
    <div>
      <StyledHeading text={'Beställare'} />
      <StyledInputDefaultValue
        type={'text'}
        name={'name'}
        htmlFor={'name'}
        defaultValue={order.name}
        lableText={'Namn: '}
        onChange={onChange}
      />

      <StyledInputDefaultValue
        type={'text'}
        name={'surname'}
        htmlFor={'surname'}
        defaultValue={order.surname}
        lableText={'Efternamn: '}
        onChange={onChange}

      />
      <StyledInputDefaultValue
        type={'text'}
        name={'phonenr'}
        htmlFor={'phonenr'}
        defaultValue={order.phonenr}
        lableText={'Mobil nummer: '}
        onChange={onChange}

      />
      <StyledInputDefaultValue
        type={'text'}
        name={'epost'}
        htmlFor={'epost'}
        defaultValue={order.epost}
        lableText={'E-post: '}
        onChange={onChange}

      />

      <StyledInputDefaultValue
        type={'text'}
        name={'leveransadress'}
        htmlFor={'leveransadress'}
        defaultValue={order.delivery_adress}
        lableText={'Leveransadress: '}
        onChange={onChange}

      />

    </div>
  )
}
