import { useEffect, useState } from 'react';

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://open.exchangerate-api.com/v6/latest/${currency}`)
      .then((res) => res.json())
      .then((res) => setData(res.rates))
      .catch((err) => console.error('Currency fetch error:', err));
  }, [currency]);
  console.log('Currency data:', data);
//   console.log('Currency rates:', data);
  return data;
}

export default useCurrencyInfo;
