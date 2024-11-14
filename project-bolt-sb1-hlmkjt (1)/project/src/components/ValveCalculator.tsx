import React, { useState } from 'react';
import InputField from './InputField';
import ResultDisplay from './ResultDisplay';
import { calculateCSA, calculateMGV, calculateTaper } from '../utils/calculations';

export default function ValveCalculator() {
  const [inputs, setInputs] = useState({
    valveDiameter: '',
    liftHeight: '',
    portDiameter: '',
    cfm: '',
  });

  const [results, setResults] = useState({
    csa: 0,
    mgv: 0,
    taperAngle: 0,
  });

  const handleCalculate = () => {
    const values = {
      valveDiameter: parseFloat(inputs.valveDiameter) || 0,
      liftHeight: parseFloat(inputs.liftHeight) || 0,
      portDiameter: parseFloat(inputs.portDiameter) || 0,
      cfm: parseFloat(inputs.cfm) || 0,
    };

    const csa = calculateCSA(values.valveDiameter, values.liftHeight);
    const mgv = calculateMGV(values.cfm, csa);
    const taperAngle = calculateTaper(values.portDiameter, values.valveDiameter);
    setResults({ csa, mgv, taperAngle });
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="bg-zinc-900/50 backdrop-blur-xl rounded-3xl shadow-2xl border border-zinc-800/50 p-6 md:p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 mb-2">
            Valve CSA Calculator
          </h1>
          <p className="text-zinc-400 text-sm">Automotive Performance Analysis</p>
        </div>

        <div className="space-y-6 mb-8">
          <div className="grid grid-cols-2 gap-4">
            <InputField
              label="Valve Diameter"
              value={inputs.valveDiameter}
              onChange={(value) => setInputs({ ...inputs, valveDiameter: value })}
              placeholder="2.5"
              max={2.5}
              unit="in"
            />
            <InputField
              label="Lift Height"
              value={inputs.liftHeight}
              onChange={(value) => setInputs({ ...inputs, liftHeight: value })}
              placeholder="0.5"
              max={1.5}
              unit="in"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <InputField
              label="Port Diameter"
              value={inputs.portDiameter}
              onChange={(value) => setInputs({ ...inputs, portDiameter: value })}
              placeholder="4.0"
              max={4}
              unit="in"
            />
            <InputField
              label="Airflow"
              value={inputs.cfm}
              onChange={(value) => setInputs({ ...inputs, cfm: value })}
              placeholder="300"
              step={1}
              unit="CFM"
            />
          </div>
        </div>

        <button
          onClick={handleCalculate}
          className="w-full bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 p-[2px] rounded-xl mb-8 transition-transform hover:scale-[0.99] active:scale-95"
        >
          <div className="bg-zinc-900 hover:bg-zinc-800 transition-colors px-6 py-3 rounded-xl">
            <span className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500">
              Calculate
            </span>
          </div>
        </button>

        <ResultDisplay results={results} />
      </div>
    </div>
  );
}