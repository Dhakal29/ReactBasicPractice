function InputCurrency({
  label,
  amount,
  onAmountChange,
  currency,
  onCurrencyChange,
  currencyList = [],
  amountDisabled = false,
  currencyDisabled = false,
}) {
  return (
    <div className="bg-gray-700 rounded-lg p-4 mb-4">
      <label className="text-gray-400 text-sm mb-2 block">{label}</label>

      <div className="flex gap-3">
        {/* Amount Input */}
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          disabled={amountDisabled}
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
          className="w-full bg-gray-800 text-white rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-green-500 disabled:opacity-60"
        />

        {/* Currency Dropdown */}
        <select
          value={currency}
          disabled={currencyDisabled}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          className="bg-gray-800 text-white rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-green-500 disabled:opacity-60 cursor-pointer"
        >
          {currencyList.map((cur) => (
            <option key={cur} value={cur}>
              {cur.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default InputCurrency
