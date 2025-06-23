import { useId } from "react";

function InputBox({
  label,
  amount,
  selectedCurrency = "usd",
  currencyList = [],
  onAmountChange,
  onCurrencyChange,
  amountDisable = false,
  className = "",
}) {

  const inputAmountId = useId();

  return (
    <div className={`bg-[#ededed] px-4 pt-4 pb-5  rounded-xl text-sm flex `}>
      <div className="w-1/2">
        <label className="text-black/40 mb-2 inline-block"
          htmlFor={inputAmountId} >
          {label}
        </label>
        <input className="bg-[#0000000a] outline-none w-full px-2 py-1.5 rounded-md"
          id={inputAmountId}
          type="number"
          placeholder="Amount"
          value={amount}
          disabled={amountDisable}
          onChange={(e) => { onAmountChange && onAmountChange(Number(e.target.value)) }}
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency</p>
        <select className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectedCurrency}
          onChange={(e) => { onCurrencyChange && onCurrencyChange(e.target.value) }}
        >
          {currencyList.map((currency) =>
            <option
              key={currency}
              value={currency}>
              {currency.toUpperCase()}
            </option>
          )}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
