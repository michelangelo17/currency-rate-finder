import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './App.scss'
import FirstCurrency from './components/main/dropdowns/FirstCurrency'
import SecondCurrency from './components/main/dropdowns/SecondCurrency'
import ExchangeInfo from './components/main/ExchangeInfo'
import { getLocation } from '../redux/slices/locationSlice'
import {
  setByCountry,
  setAllRates,
  setTimeStamp,
} from '../redux/slices/currencySlice'

const App = () => {
  const { userLocation } = useSelector(state => state.location)
  const { byCountry, allRates, timeStamp, useOffline } = useSelector(
    state => state.currency
  )

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getLocation())
  }, [dispatch, userLocation])

  // update offline data anytime allRates call succeeds.
  useEffect(() => {
    if (allRates) {
      try {
        localStorage.setItem('allRates', JSON.stringify(allRates))
      } catch (err) {
        console.log(err)
      }
    }
  }, [allRates])
  // Get offline data
  useEffect(() => {
    try {
      dispatch(setAllRates(JSON.parse(localStorage.getItem('allRates'))))
      dispatch(setTimeStamp(JSON.parse(localStorage.getItem('timeStamp'))))
    } catch (err) {
      console.log(err)
    }
  }, [dispatch])

  return (
    <>
      <div>
        <div
          className='set-by-country'
          onClick={() => dispatch(setByCountry())}
        >
          <p>{byCountry ? 'Find by Currency' : 'Find by Country'}</p>
        </div>
      </div>
      <h1 className='siteTitle'>Simple Currency Exchange</h1>
      {useOffline && (
        <p className='offlineMessage'>
          (Using offline data, last updated: {timeStamp})
        </p>
      )}
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
