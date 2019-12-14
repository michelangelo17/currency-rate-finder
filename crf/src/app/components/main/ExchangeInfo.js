import React from 'react'
import { useSelector } from 'react-redux'

const ExchangeInfo = () => {
  const {
    baseCurrency,
    selectedExchangeRate,
    comparisonCurrency,
  } = useSelector(state => state.currency)
  return (
    <>
      {selectedExchangeRate && (
        <>
          <h1>Exchange Rate</h1>
          <h2>{`1 ${baseCurrency.currencyName} is worth ${selectedExchangeRate} ${comparisonCurrency.currencyName}`}</h2>
        </>
      )}
    </>
  )
}

export default ExchangeInfo
