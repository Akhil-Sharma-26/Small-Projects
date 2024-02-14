// import React from "react";
// import { useId } from "react";

// function InputBox({
//     label,
//     amount,
//     onAmountChange,
//     oncurrencyChange,
//     currencyOptions = [],
//     selectedCurrency = "usd",
//     amountDisable = false,
//     className = "",
// }) {
   

//     return (
//         <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
//             <div className="w-1/2">
//                 <label  className="text-black/40 mb-2 inline-block">
//                     {label}
//                 </label>
//                 <input
//                     className="outline-none w-full bg-transparent py-1.5"
//                     type="number"
//                     placeholder="Amount"
//                     disabled={amountDisable}
//                     value={amount}
//                     onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))} // sometimes the e.taget.values comes in string type
//                 />
//             </div>
//             <div className="w-1/2 flex flex-wrap justify-end text-right">
//                 <p className="text-black/40 mb-2 w-full">Currency Type</p>
//                 <select
//                     className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
//                     value={selectedCurrency}
//                     onClick={oncurrencyChange && oncurrencyChange(e.target.value)}
//                 >
                    
//                         {
//                             currencyOptions.map((curr)=>(
//                                 <option key={curr} value={curr}>
//                                     {curr}
//                                 </option>
//                             ))
//                         }
                
//                 </select>
//             </div>
//         </div>
//     );
// }

// export default InputBox;


// ! The above code is very well!! but for more optimization:

import React from "react";
import { useId } from "react";

function InputBox({
    label,
    amount,
    onAmountChange,
    oncurrencyChange,
    currencyOptions = [],
    selectedCurrency,
    amountDisable = false,
    currencyDisable = false,
    className = "",
}) {
   const amountInputID = useId()

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amountInputID} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))} // sometimes the e.taget.values comes in string type
                    id={amountInputID} // Optimization
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    disabled={currencyDisable}
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectedCurrency}
                    onChange={(e) =>oncurrencyChange && oncurrencyChange(e.target.value)}
                >
                        {
                            currencyOptions.map((curr)=>(
                                <option key={curr} value={curr} onChange={(e)=>selectedCurrency=(e.target.value)}>
                                    {curr}
                                </option>
                            ))
                        }
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;
