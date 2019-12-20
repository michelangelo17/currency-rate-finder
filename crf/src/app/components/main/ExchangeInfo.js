import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const ExchangeInfo = () => {
  const {
    baseCurrency,
    selectedExchangeRate,
    comparisonCurrency,
  } = useSelector(state => state.currency)
  const [amount, setAmount] = useState(1)
  const handleChange = e => setAmount(e.target.value)
  return (
    <>
      {selectedExchangeRate && (
        <>
          <h1>Exchange Rate</h1>
          <div className='exchangeInput'>
            <label htmlFor='initialAmount'>Enter An Amount To Convert</label>
            <input
              placeholder='enter an amount'
              onChange={handleChange}
              type='number'
              required
              name='initialAmount'
              min='0'
              value={amount}
              step='.01'
            />
          </div>
          <h2>{`${new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: `${baseCurrency.currencyCode}`,
          }).format(amount)} is worth ${new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: `${comparisonCurrency.currencyCode}`,
          }).format(amount * selectedExchangeRate)}`}</h2>
        </>
      )}
    </>
  )
}

export default ExchangeInfo
