import { useState } from "react";
import { MoneyInput } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(1);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <>
      <div className="w-full h-screen relative flex items-center justify-center">
        <img
          src="/BG.jpg"
          alt=""
          className="absolute top-0 left-0 object-cover z-[-1] h-screen w-full"
        />
        <div className="h-[300px] w-[550px] bg-gradient-to-b from-white/70 to-white/10 rounded-lg border-[1px] border-white p-[20px]">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
            className="h-full w-full"
          >
            <div className="h-full w-full rounded-xl flex flex-col justify-between">
              <div className="h-[200px] w-full relative flex flex-col justify-around items-center px-[10px]">
                <MoneyInput
                  label={"From"}
                  amount={amount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setFrom(currency)}
                  onAmountChange={(amount) => setAmount(amount)}
                  selectCurrency={from}
                />
                <MoneyInput
                  label={"To"}
                  amount={convertedAmount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setTo(currency)}
                  selectCurrency={to}
                  amountDisable
                />
                <button
                  className="absolute bg-blue-600 border-2 border-white px-[10px] py-[6px] rounded-lg text-white lowercase"
                  onClick={swap}
                >
                  SWAP
                </button>
              </div>
              <div className="h-[50px] w-full overflow-hidden rounded-xl">
                <button
                  type="submit"
                  className="h-full w-full bg-blue-600 font-semibold text-white text-[17px]"
                >
                  Convert from {from.toUpperCase()} to {to.toUpperCase()}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
