import { useState } from "react";
import { InputBox } from "./componnets";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import Navbar from "./componnets/Navbar";
import { ArrowUpDown, TrendingUp } from "lucide-react";

const Index = () => {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);
  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo || {});

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    if (from === to) {
      setConvertedAmount(amount);
    } else if (from === "usd") {
      setConvertedAmount(amount * currencyInfo[to]);
    } else if (to === "usd") {
      setConvertedAmount(amount / currencyInfo[from]);
    } else {
      const usdValue = amount / currencyInfo[from];
      const result = usdValue * currencyInfo[to];
      setConvertedAmount(result);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transform -skew-y-12 animate-pulse"></div>
      </div>

      {/* Floating orbs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
      <div className="absolute -bottom-32 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row min-h-[calc(100vh-80px)] relative z-10">
        {/* Left Side - Hero Section */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-16">
          <div className="text-center text-white max-w-2xl">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mb-8 shadow-2xl">
              <TrendingUp className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 bg-clip-text text-transparent leading-tight">
              Currency Converter
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              Convert currencies instantly with real-time exchange rates. Fast,
              accurate, and reliable currency conversion at your fingertips.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="bg-white/10 backdrop-blur-lg rounded-full px-6 py-3 border border-white/20">
                <span className="text-yellow-400 font-semibold">180+</span>{" "}
                Currencies
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-full px-6 py-3 border border-white/20">
                <span className="text-green-400 font-semibold">Real-time</span>{" "}
                Rates
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-full px-6 py-3 border border-white/20">
                <span className="text-blue-400 font-semibold">Free</span> to Use
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Converter */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
          <div className="w-full max-w-md">
            {/* Glassmorphism Card */}
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mb-4 shadow-lg">
                  <span className="text-2xl">💱</span>
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">
                  Quick Convert
                </h2>
                <p className="text-gray-300 text-sm">
                  Enter amount and select currencies
                </p>
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  convert();
                }}
                className="space-y-6"
              >
                {/* From Input */}
                <InputBox
                  label="From"
                  amount={amount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setFrom(currency)}
                  selectCurrency={from}
                  onAmountChange={(amount) => setAmount(amount)}
                />

                {/* Swap Button */}
                <div className="flex justify-center">
                  <button
                    type="button"
                    onClick={swap}
                    className="group bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white p-4 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300 hover:shadow-xl"
                  >
                    <ArrowUpDown className="w-6 h-6 group-hover:rotate-180 transition-transform duration-300" />
                  </button>
                </div>

                {/* To Input */}
                <InputBox
                  label="To"
                  amount={convertedAmount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setTo(currency)}
                  selectCurrency={to}
                  amountDisable
                />

                {/* Convert Button */}
                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white rounded-2xl font-semibold text-lg shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
                >
                  Convert {from.toUpperCase()} → {to.toUpperCase()}
                </button>
              </form>

              {/* Rate Info */}
              {convertedAmount > 0 && (
                <div className="mt-6 p-4 bg-white/5 rounded-xl border border-white/10">
                  <p className="text-center text-gray-300 text-sm">
                    1 {from.toUpperCase()} = {currencyInfo[to]?.toFixed(4)}{" "}
                    {to.toUpperCase()}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
