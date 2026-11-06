import { useState } from 'react'
import useCurrencyInfo from '../hooks/userCurrencyInfo'
import InputCurrency from './InputCurrency'

function CurrencyConverter() {
  const [amount, setAmount] = useState(1)
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('npr')
  const [convertedAmount, setConvertedAmount] = useState(0)

  // Fetch all exchange rates for the 'from' currency
  const rates = useCurrencyInfo(from)

  // List of all available currencies
  const currencyList = Object.keys(rates)

  // Convert button handler
  function handleConvert(e) {
    e.preventDefault()
    if (rates[to]) {
      setConvertedAmount((amount * rates[to]).toFixed(4))
    }
  }

  // Swap from <-> to currencies
  function handleSwap() {
    setFrom(to)
    setTo(from)
    setAmount(convertedAmount)
    setConvertedAmount(amount)
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-gray-800 p-8 rounded-xl shadow-lg w-full max-w-md">
        <h1 className="text-white text-2xl font-bold mb-6 text-center">
          💱 Currency Converter
        </h1>

        <form onSubmit={handleConvert}>
          {/* From Input */}
          <InputCurrency
            label="From"
            amount={amount}
            currency={from}
            currencyList={currencyList}
            onAmountChange={setAmount}
            onCurrencyChange={setFrom}
          />

          {/* Swap Button */}
          <div className="flex justify-center my-2">
            <button
              type="button"
              onClick={handleSwap}
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded-full text-sm transition"
            >
              ⇅ Swap
            </button>
          </div>

          {/* To Input */}
          <InputCurrency
            label="To"
            amount={convertedAmount}
            currency={to}
            currencyList={currencyList}
            onCurrencyChange={setTo}
            amountDisabled={true}
          />

          {/* Convert Button */}
          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-lg transition text-lg mt-4"
          >
            Convert
          </button>
        </form>
      </div>
    </div>
  )
}

export default CurrencyConverter
