import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Select from 'react-select'
import { setBase, getRates } from '../../../../redux/slices/currencySlice'

const FirstCurrency = () => {
  const { currencyOptions, baseCurrency, firstCountryName } = useSelector(
    state => state.currency
  )
  const { userLocation } = useSelector(state => state.location)

  const dispatch = useDispatch()
  const countryList = currencyOptions
    .flatMap(currency => currency.countries)
    .sort()
    .map(country => ({ value: country, label: country }))

  useEffect(() => {
    baseCurrency && baseCurrency.currencyCode
      ? dispatch(getRates(baseCurrency.currencyCode))
      : userLocation && dispatch(setBase(userLocation))
  }, [baseCurrency, dispatch, userLocation])

  const handlChange = e => {
    dispatch(setBase(e.value))
  }

  return (
    <div>
      <Select
        placeholder='Select country'
        onChange={handlChange}
        className='FirstCurrencySelector'
        options={countryList}
        value={countryList.filter(
          country => country.value === firstCountryName
        )}
      />
      {baseCurrency && baseCurrency.currencyName && (
        <>
          <h2>{firstCountryName}</h2>
          <h3>Currency: {baseCurrency.currencyName}</h3>
          <h3>Currency Code: {baseCurrency.currencyCode}</h3>
        </>
      )}
    </div>
  )
}

export default FirstCurrency
