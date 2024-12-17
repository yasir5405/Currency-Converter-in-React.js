import { useId } from "react";

const MoneyInput = ({
  label,
  amount = 0,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) => {

  const amountInputId = useId()

  return (
    <div className="h-[95px] w-full bg-white rounded-lg flex items-center justify-between px-[10px]">
      <div className="h-full w-[100px]  flex flex-col justify-around py-[8px]">
        <label htmlFor={amountInputId}>{label}</label>
        <input
          id={amountInputId}
          type="number"
          placeholder="Amount"
          className="border-[1px] border-black p-[5px]"
          disabled={amountDisable}
          value={amount}
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
        />
      </div>
      <div className="h-full w-[120px]  flex flex-col justify-around items-end">
        <h1>Currency Type</h1>
        <select
          name=""
          id=""
          className="border-[1px] border-black w-full uppercase"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default MoneyInput;
