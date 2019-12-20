import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Select from 'react-select'
import {
  setComparisonCountry,
  setComparisonCurrency,
} from '../../../../redux/slices/currencySlice'

const SecondCurrency = () => {
  const {
    currencyOptions,
    secondCountryName,
    firstCountryName,
    comparisonCurrency,
    byCountry,
    baseCurrency,
  } = useSelector(state => state.currency)

  const dispatch = useDispatch()

  const countryList = currencyOptions
    .flatMap(currency => currency.countries)
    .sort()
    .filter(country => country !== firstCountryName)
    .map(country => ({ value: country, label: country }))

  const currencyList =
    baseCurrency &&
    currencyOptions
      .filter(currency => currency.currencyCode !== baseCurrency.currencyCode)
      .map(currency => ({
        value: currency.currencyCode,
        label: currency.currencyName,
      }))

  const handlChange = e => {
    byCountry
      ? dispatch(setComparisonCountry(e.value))
      : dispatch(setComparisonCurrency(e.value))
  }

  return (
    <div>
      <Select
        placeholder={
          byCountry ? 'Select country to compare' : 'Select currency to compare'
        }
        onChange={handlChange}
        className='SecondCurrencySelector'
        options={byCountry ? countryList : currencyList}
        value={
          byCountry
            ? secondCountryName &&
              countryList.find(country => country.value === secondCountryName)
            : comparisonCurrency &&
              currencyList.find(
                currency => currency.value === comparisonCurrency.currencyCode
              )
        }
      />
      {byCountry
        ? secondCountryName && (
            <>
              <h2>{secondCountryName}</h2>
              <h3>Currency: {comparisonCurrency.currencyName}</h3>
              <h3>Currency Code: {comparisonCurrency.currencyCode}</h3>
            </>
          )
        : comparisonCurrency && (
            <>
              <h2>{comparisonCurrency.currencyName}</h2>
              <h3>Currency Code: {comparisonCurrency.currencyCode}</h3>
            </>
          )}
    </div>
  )
}

export default SecondCurrency
