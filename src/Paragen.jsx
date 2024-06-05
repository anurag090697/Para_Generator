/** @format */

import React, { useState, useEffect } from "react";
import para from "./para.json";

function Paragen() {
  const [amount, setAmnt] = useState(1);
  const [arr, generatPara] = useState([]);
  const [isCopyBtnVisible, setCopyBtnVisible] = useState(false);

  function displayResult() {
    if (amount > 10 || amount < 1) {
      alert("Input between 1-10 only");
    } else {
      generatPara(para.slice(0, amount));
      setCopyBtnVisible(true);
    }
  }

  function copyToClipboard() {
    const textToCopy = arr.join("\n\n");
    navigator.clipboard.writeText(textToCopy).then(
      () => {
        alert("Text copied to clipboard successfully!");
      },
      (err) => {
        alert("Failed to copy text: ", err);
      }
    );
  }

  return (
    <>
      <div className='w-fit'>
        <div>
          <h2 className='text-4xl text-center my-4 font-bold text-blue-700'>
            TIRED OF BORING LOREM IPSUM?
          </h2>
          <div className='w-fit m-auto font-medium'>
            <label htmlFor='amount'>Paragraphs :</label>
            <input
              className='border-blue-500 text-center border-2 mx-4 font-medium'
              type='number'
              min={1}
              max={9}
              name='num'
              id='num'
              value={amount}
              onChange={(e) => setAmnt(e.target.value)}
            />
            <button onClick={() => displayResult()} className='button-8'>
              Generate
            </button>
          </div>
          <div>
            {arr.map((ele, index) => {
              return (
                <p
                  key={index}
                  className='my-6 bg-lime-500 rounded-2xl p-6 font-bold text-white'
                >
                  {ele}
                </p>
              );
            })}
          </div>
        </div>
        {isCopyBtnVisible && (
          <div className='bottom-8 right-8 static' id='copybtn'>
            <button className='button-8' onClick={copyToClipboard}>
              COPY ALL
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default Paragen;
