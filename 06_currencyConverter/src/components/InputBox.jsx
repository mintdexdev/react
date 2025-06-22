import { useId } from "react";

function InputBox({
  label,
  amount,
  selectedCurrency = "inr",
  currencyList = [],
  onAmountChange,
  onCurrencyChange,
  amountDisable = false,
  className = "",
}) {

  const inputAmountId = useId();

  return (
    <div className={`bg-[#ededed] p-3 rounded-lg text-sm flex `}>
      <div className="w-1/2">
        <label className="text-black/40 mb-2 inline-block"
          htmlFor={inputAmountId} >
          {label}
        </label>
        <input className="bg-[#0000000a] outline-none w-full py-1.5"
          type="number"
          placeholder="Amount"
          id={inputAmountId}
          value={amount}
          disabled={amountDisable}
          onChange={(e) => { onAmountChange && onAmountChange(Number(e.target.value)) }}
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectedCurrency}
          onChange={(e) => {
            onCurrencyChange && onCurrencyChange(e.target.value)
          }}
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
