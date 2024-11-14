import React, { useState } from 'react';
import { evaluate } from '../utils/calculations';

export default function Calculator() {
  const [display, setDisplay] = useState('0');
  const [expression, setExpression] = useState('');
  const [hasDecimal, setHasDecimal] = useState(false);

  const handleNumber = (num: string) => {
    if (display === '0') {
      setDisplay(num);
      setExpression(num);
    } else {
      setDisplay(display + num);
      setExpression(expression + num);
    }
  };

  const handleOperator = (op: string) => {
    setDisplay('0');
    setExpression(expression + op);
    setHasDecimal(false);
  };

  const handleDecimal = () => {
    if (!hasDecimal) {
      setDisplay(display + '.');
      setExpression(expression + '.');
      setHasDecimal(true);
    }
  };

  const handleClear = () => {
    setDisplay('0');
    setExpression('');
    setHasDecimal(false);
  };

  const handleEquals = () => {
    try {
      const result = evaluate(expression);
      setDisplay(result.toString());
      setExpression(result.toString());
      setHasDecimal(result.toString().includes('.'));
    } catch (error) {
      setDisplay('Error');
      setExpression('');
    }
  };

  return (
    <div className="w-[320px] bg-gray-900 p-5 rounded-2xl shadow-2xl">
      <div className="bg-gray-800 p-4 rounded-lg mb-4">
        <input
          type="text"
          className="w-full text-right text-3xl bg-transparent text-white font-mono outline-none"
          value={display}
          readOnly
        />
      </div>

      <div className="grid grid-cols-4 gap-3">
        <button onClick={handleClear} className="col-span-2 h-14 bg-red-500 hover:bg-red-600 text-white rounded-lg text-xl font-semibold transition-colors">
          AC
        </button>
        <button onClick={() => handleOperator('×')} className="h-14 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg text-xl font-semibold transition-colors">
          ×
        </button>
        <button onClick={() => handleOperator('÷')} className="h-14 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg text-xl font-semibold transition-colors">
          ÷
        </button>

        {[7, 8, 9].map((num) => (
          <button
            key={num}
            onClick={() => handleNumber(num.toString())}
            className="h-14 bg-gray-700 hover:bg-gray-600 text-white rounded-lg text-xl font-semibold transition-colors"
          >
            {num}
          </button>
        ))}
        <button onClick={() => handleOperator('-')} className="h-14 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg text-xl font-semibold transition-colors">
          -
        </button>

        {[4, 5, 6].map((num) => (
          <button
            key={num}
            onClick={() => handleNumber(num.toString())}
            className="h-14 bg-gray-700 hover:bg-gray-600 text-white rounded-lg text-xl font-semibold transition-colors"
          >
            {num}
          </button>
        ))}
        <button onClick={() => handleOperator('+')} className="h-14 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg text-xl font-semibold transition-colors">
          +
        </button>

        {[1, 2, 3].map((num) => (
          <button
            key={num}
            onClick={() => handleNumber(num.toString())}
            className="h-14 bg-gray-700 hover:bg-gray-600 text-white rounded-lg text-xl font-semibold transition-colors"
          >
            {num}
          </button>
        ))}
        <button onClick={handleEquals} className="h-14 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg text-xl font-semibold transition-colors">
          =
        </button>

        <button
          onClick={() => handleNumber('0')}
          className="col-span-2 h-14 bg-gray-700 hover:bg-gray-600 text-white rounded-lg text-xl font-semibold transition-colors"
        >
          0
        </button>
        <button onClick={handleDecimal} className="h-14 bg-gray-700 hover:bg-gray-600 text-white rounded-lg text-xl font-semibold transition-colors">
          .
        </button>
      </div>
    </div>
  );
}