import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './App.scss'
import FirstCurrency from './components/main/dropdowns/FirstCurrency'
import SecondCurrency from './components/main/dropdowns/SecondCurrency'
import ExchangeInfo from './components/main/ExchangeInfo'
import { getLocation } from '../redux/slices/locationSlice'
import { setByCountry } from '../redux/slices/currencySlice'

const App = () => {
  const { userLocation } = useSelector(state => state.location)
  const { byCountry } = useSelector(state => state.currency)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getLocation())
  }, [dispatch, userLocation])

  return (
    <>
      <div className='set-by-country' onClick={() => dispatch(setByCountry())}>
        <p>{byCountry ? 'Find by Currency' : 'Find by Country'}</p>
      </div>
      <h1 className='siteTitle'>Simple Currency Exchanger</h1>
      <main>
        <section className='dropdowns'>
          <FirstCurrency />
          <SecondCurrency />
        </section>
        <section className='result'>
          <ExchangeInfo />
        </section>
      </main>
    </>
  )
}

export default App
