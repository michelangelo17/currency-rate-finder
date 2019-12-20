import { createSlice } from '@reduxjs/toolkit'
import Axios from 'axios'
import Timeout from 'await-timeout'
import moment from 'moment'

const currencySlice = createSlice({
  name: 'currency',
  initialState: {
    currencyOptions: [
      {
        currencyCode: 'AED',
        currencyName: 'UAE Dirham',
        countries: ['United Arab Emirates'],
      },
      {
        currencyCode: 'ARS',
        currencyName: 'Argentine Peso',
        countries: ['Argentina'],
      },
      {
        currencyCode: 'AUD',
        currencyName: 'Australian Dollar',
        countries: ['Australia'],
      },
      {
        currencyCode: 'BGN',
        currencyName: 'Bulgarian Lev',
        countries: ['Bulgaria'],
      },
      {
        currencyCode: 'BRL',
        currencyName: 'Brazilian Real',
        countries: ['Brazil'],
      },
      {
        currencyCode: 'BSD',
        currencyName: 'Bahamian Dollar',
        countries: ['Bahamas'],
      },
      {
        currencyCode: 'CAD',
        currencyName: 'Canadian Dollar',
        countries: ['Canada'],
      },
      {
        currencyCode: 'CHF',
        currencyName: 'Swiss Franc',
        countries: ['Switzerland'],
      },
      {
        currencyCode: 'CLP',
        currencyName: 'Chilean Peso',
        countries: ['Chile'],
      },
      {
        currencyCode: 'CNY',
        currencyName: 'Chinese Renminbi',
        countries: ['China'],
      },
      {
        currencyCode: 'COP',
        currencyName: 'Colombian Peso',
        countries: ['Colombia'],
      },
      {
        currencyCode: 'CZK',
        currencyName: 'Czech Koruna',
        countries: ['Czech Republic'],
      },
      {
        currencyCode: 'DKK',
        currencyName: 'Danish Krone',
        countries: ['Denmark'],
      },
      {
        currencyCode: 'DOP',
        currencyName: 'Dominican Peso',
        countries: ['Dominican Republic'],
      },
      {
        currencyCode: 'EGP',
        currencyName: 'Egyptian Pound',
        countries: ['Egypt'],
      },
      {
        currencyCode: 'EUR',
        currencyName: 'Euro',
        countries: [
          'Germany',
          'Austria',
          'Belgium',
          'Cyprus',
          'Estonia',
          'Finland',
          'France',
          'Greece',
          'Ireland',
          'Italy',
          'Latvia',
          'Lithuania',
          'Luxembourg',
          'Malta',
          'Netherlands',
          'Portugal',
          'Slovakia',
          'Slovenia',
          'Spain',
        ],
      },
      {
        currencyCode: 'FJD',
        currencyName: 'Fiji Dollar',
        countries: ['Fiji'],
      },
      {
        currencyCode: 'GBP',
        currencyName: 'Pound Sterling',
        countries: ['United Kingdom'],
      },
      {
        currencyCode: 'GTQ',
        currencyName: 'Guatemalan Quetzal',
        countries: ['Guatemala'],
      },
      {
        currencyCode: 'HKD',
        currencyName: 'Hong Kong Dollar',
        countries: ['Hong Kong'],
      },
      {
        currencyCode: 'HRK',
        currencyName: 'Croatian Kuna',
        countries: ['Croatian'],
      },
      {
        currencyCode: 'HUF',
        currencyName: 'Hungarian Forint',
        countries: ['Hungary'],
      },
      {
        currencyCode: 'IDR',
        currencyName: 'Indonesian Rupiah',
        countries: ['Indonesia'],
      },
      {
        currencyCode: 'ILS',
        currencyName: 'Israeli Shekel',
        countries: ['Israel'],
      },
      {
        currencyCode: 'INR',
        currencyName: 'Indian Rupee',
        countries: ['India'],
      },
      {
        currencyCode: 'ISK',
        currencyName: 'Icelandic Krona',
        countries: ['Iceland'],
      },
      {
        currencyCode: 'JPY',
        currencyName: 'Japanese Yen',
        countries: ['Japan'],
      },
      {
        currencyCode: 'KRW',
        currencyName: 'South Korean Won',
        countries: ['Korea'],
      },
      {
        currencyCode: 'KZT',
        currencyName: 'Kazakhstani Tenge',
        countries: ['Kazakhstan'],
      },
      {
        currencyCode: 'MXN',
        currencyName: 'Mexican Peso',
        countries: ['Mexico'],
      },
      {
        currencyCode: 'MYR',
        currencyName: 'Malaysian Ringgit',
        countries: ['Malaysia'],
      },
      {
        currencyCode: 'NOK',
        currencyName: 'Norwegian Krone',
        countries: ['Norway'],
      },
      {
        currencyCode: 'NZD',
        currencyName: 'New Zealand Dollar',
        countries: ['New Zealand'],
      },
      {
        currencyCode: 'PAB',
        currencyName: 'Panamanian Balboa',
        countries: ['Panama'],
      },
      {
        currencyCode: 'PEN',
        currencyName: 'Peruvian Nuevo Sol',
        countries: ['Peru'],
      },
      {
        currencyCode: 'PHP',
        currencyName: 'Philippine Peso',
        countries: ['Philippines'],
      },
      {
        currencyCode: 'PKR',
        currencyName: 'Pakistani Rupee',
        countries: ['Pakistan'],
      },
      {
        currencyCode: 'PLN',
        currencyName: 'Polish Zloty',
        countries: ['Poland'],
      },
      {
        currencyCode: 'PYG',
        currencyName: 'Paraguayan Guarani',
        countries: ['Paraguay'],
      },
      {
        currencyCode: 'RON',
        currencyName: 'Romanian Leu',
        countries: ['Romania'],
      },
      {
        currencyCode: 'RUB',
        currencyName: 'Russian Ruble',
        countries: ['Russian Federation'],
      },
      {
        currencyCode: 'SAR',
        currencyName: 'Saudi Riyal',
        countries: ['Saudi Arabia'],
      },
      {
        currencyCode: 'SEK',
        currencyName: 'Swedish Krona',
        countries: ['Sweden'],
      },
      {
        currencyCode: 'SGD',
        currencyName: 'Singapore Dollar',
        countries: ['Singapore'],
      },
      {
        currencyCode: 'THB',
        currencyName: 'Thai Baht',
        countries: ['Thailand'],
      },
      {
        currencyCode: 'TRY',
        currencyName: 'Turkish Lira',
        countries: ['Turkey'],
      },
      {
        currencyCode: 'TWD',
        currencyName: 'New Taiwan Dollar',
        countries: ['Taiwan'],
      },
      {
        currencyCode: 'UAH',
        currencyName: 'Ukrainian Hryvnia',
        countries: ['Ukraine'],
      },
      {
        currencyCode: 'USD',
        currencyName: 'US Dollar',
        countries: ['United States'],
      },
      {
        currencyCode: 'UYU',
        currencyName: 'Uruguayan Peso',
        countries: ['Uruguay'],
      },
      {
        currencyCode: 'VND',
        currencyName: 'Vietnamese Dong',
        countries: ['Vietnam'],
      },
      {
        currencyCode: 'ZAR',
        currencyName: 'South African Rand',
        countries: ['South Africa'],
      },
    ],
    firstCountryName: '',
    baseCurrency: null,
    rates: null,
    allRates: null,
    ratesError: null,
    allRatesError: null,
    secondCountryName: null,
    comparisonCurrency: null,
    selectedExchangeRate: null,
    byCountry: false,
    timeStamp: null,
    useOffline: false,
  },
  reducers: {
    setBaseCountry(state, action) {
      state.firstCountryName = action.payload
      state.baseCurrency = state.currencyOptions.find(currency =>
        currency.countries.find(country => country === action.payload)
      )
      state.secondCountryName = null
      state.comparisonCurrency = null
      state.selectedExchangeRate = null
    },
    setBaseCurrency(state, action) {
      state.baseCurrency = state.currencyOptions.find(
        currency => currency.currencyCode === action.payload
      )
      state.secondCountryName = null
      state.comparisonCurrency = null
      state.selectedExchangeRate = null
    },
    setRates(state, action) {
      state.rates = action.payload
      state.ratesLoading = false
      state.ratesError = null
      state.useOffline = false
    },
    setRatesError(state, action) {
      state.ratesError = action.payload
    },
    setComparisonCountry(state, action) {
      state.secondCountryName = action.payload
      state.comparisonCurrency = state.currencyOptions.find(currency =>
        currency.countries.find(country => country === action.payload)
      )
      state.selectedExchangeRate =
        state.rates[state.comparisonCurrency.currencyCode]
    },
    setComparisonCurrency(state, action) {
      state.comparisonCurrency = state.currencyOptions.find(
        currency => currency.currencyCode === action.payload
      )
      state.selectedExchangeRate =
        state.rates[state.comparisonCurrency.currencyCode]
    },
    setByCountry(state) {
      state.byCountry = !state.byCountry
    },
    setAllRates(state, action) {
      state.allRates = action.payload
      state.allRatesError = null
    },
    setAllRatesError(state, action) {
      state.allRatesError = action.payload
    },
    setRatesOffline(state, action) {
      state.rates = state.allRates.find(rates => rates[action.payload])[
        action.payload
      ]
      state.ratesLoading = false
      state.useOffline = true
    },
    setTimeStamp(state, action) {
      state.timeStamp = action.payload
    },
  },
})

export const {
  setBaseCountry,
  setBaseCurrency,
  setRatesError,
  setRates,
  setComparison,
  setComparisonCountry,
  setComparisonCurrency,
  setByCountry,
  setAllRatesError,
  setAllRates,
  setRatesOffline,
  setTimeStamp,
  setExchangeRate
} = currencySlice.actions

export default currencySlice.reducer

// Thunks must be defined outside the slice object

export const getAllRates = currencyOptions => async dispatch => {
  const allCurrencies = currencyOptions.map(currency =>
    Axios.get(
      `https://api.exchangerate-api.com/v4/latest/${currency.currencyCode}`
    ).then(res => {
      return {
        [currency.currencyCode]: res.data.rates,
      }
    })
  )
  dispatch(setAllRates(await Promise.all(allCurrencies)))
}

export const getRates = currencyCode => async dispatch => {
  const timer = new Timeout()
  try {
    await Promise.race([
      Axios.get(`https://api.exchangerate-api.com/v4/latest/${currencyCode}`)
        .then(res => {
          localStorage.setItem(
            'timeStamp',
            JSON.stringify(moment().format('MMMM Do YYYY, h:mm a'))
          )
          dispatch(setRates(res.data.rates))
        })
        .catch(err => {
          dispatch(setRatesOffline(currencyCode))
          dispatch(setRatesError(`${err}`))
        }),
      timer.set(500, 'Timeout!'),
    ])
  } catch (err) {
    dispatch(setRatesOffline(currencyCode))
  } finally {
    timer.clear()
  }
}
