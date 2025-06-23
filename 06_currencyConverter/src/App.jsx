import './App.css'
import React, { useState } from 'react'
import { InputBox } from './components';
import { useCurrencyInfo } from './hooks';

function App() {
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swapCurrency = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  }

  const convert = () => { setConvertedAmount(amount * currencyInfo[to]) };

  return (
    <div className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{ backgroundImage: `url('https://images.pexels.com/photos/32389311/pexels-photo-32389311.jpeg')` }}
    >

      <div className="bg-black/20 w-[384px] mx-auto bg-amber outline  outline-white/40 rounded-2xl p-2 backdrop-blur-sm">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert()
          }}
        >
          <div className="w-full mb-2">
            <InputBox
              label="From"
              amount={amount}
              selectedCurrency={from}
              currencyList={options}
              onAmountChange={(amount) => setAmount(amount)}
              onCurrencyChange={(currency) => setFrom(currency)}
            />
          </div>
          <div className="relative w-full">
            <button className="bg-blue-600 text-[#ededed] px-2 pt-0.5 pb-1.5 absolute left-1/2 -translate-x-1/2 -translate-y-1/2  outline-4 rounded-lg  "
              type="button"
              onClick={swapCurrency}
            >
              swap
            </button>
          </div>
          <div className="w-full mt-2">
            <InputBox
              amountDisable
              label="To"
              amount={convertedAmount}
              selectedCurrency={to}
              currencyList={options}
              onCurrencyChange={(currency) => setTo(currency)}
            />
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white mt-3 px-4 py-3 rounded-xl">
            Convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>
        </form>
      </div>

    </div>
  );
}

export default App