import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Select from 'react-select'
import {
  setBaseCountry,
  setBaseCurrency,
  getRates,
} from '../../../../redux/slices/currencySlice'

const FirstCurrency = () => {
  const {
    currencyOptions,
    baseCurrency,
    firstCountryName,
    byCountry,
  } = useSelector(state => state.currency)
  const { userLocation } = useSelector(state => state.location)

  const dispatch = useDispatch()
  const countryList = currencyOptions
    .flatMap(currency => currency.countries)
    .sort()
    .map(country => ({ value: country, label: country }))

  const currencyList = currencyOptions.map(currency => ({
    value: currency.currencyCode,
    label: currency.currencyName,
  }))

  useEffect(() => {
    baseCurrency && baseCurrency.currencyCode
      ? dispatch(getRates(baseCurrency.currencyCode))
      : userLocation && dispatch(setBaseCountry(userLocation))
  }, [baseCurrency, dispatch, userLocation])

  const handlChange = e => {
    byCountry
      ? dispatch(setBaseCountry(e.value))
      : dispatch(setBaseCurrency(e.value))
  }

  return (
    <div>
      <Select
        placeholder={byCountry ? 'Select country' : 'Select currency'}
        onChange={handlChange}
        className='FirstCurrencySelector'
        options={byCountry ? countryList : currencyList}
        value={
          byCountry
            ? countryList.find(country => country.value === firstCountryName)
            : baseCurrency &&
              currencyList.find(
                currency => currency.value === baseCurrency.currencyCode
              )
        }
      />
      {byCountry ? baseCurrency && (
        <>
          <h2>{firstCountryName}</h2>
          <h3>Currency: {baseCurrency.currencyName}</h3>
          <h3>Currency Code: {baseCurrency.currencyCode}</h3>
        </>
      ) : baseCurrency &&
      <>
        <h2>{baseCurrency.currencyName}</h2>
        <h3>Currency Code: {baseCurrency.currencyCode}</h3>
      </>
      }
    </div>
  )
}

export default FirstCurrency
