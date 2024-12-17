import { useEffect, useState } from "react";

const useCurrencyInfo = (currency) => {
  const [currencyData, setCurrencyData] = useState({});
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    )
      .then((res) => res.json())
      .then((data) => setCurrencyData(data[currency]));
  }, [currency]);
  console.log(currencyData);
  return currencyData;
};

export default useCurrencyInfo;