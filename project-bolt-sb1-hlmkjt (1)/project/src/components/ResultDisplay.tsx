import React from 'react';

interface ResultDisplayProps {
  results: {
    csa: number;
    mgv: number;
    taperAngle: number;
  };
}

export default function ResultDisplay({ results }: ResultDisplayProps) {
  const ResultItem = ({ label, value, unit }: { label: string; value: number; unit: string }) => (
    <div className="relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 rounded-xl opacity-20 group-hover:opacity-30 blur transition duration-200"></div>
      <div className="relative bg-zinc-900/80 p-4 rounded-xl border border-zinc-800">
        <div className="text-zinc-400 text-sm font-medium mb-1">{label}</div>
        <div className="text-white text-2xl font-bold">
          {value.toFixed(2)}
          <span className="text-zinc-400 text-sm font-medium ml-1.5">
            {unit}
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="grid gap-4">
      <ResultItem 
        label="Cross-Sectional Area" 
        value={results.csa} 
        unit="in²"
      />
      <ResultItem 
        label="Mean Gas Velocity" 
        value={results.mgv} 
        unit="ft/sec"
      />
      <ResultItem 
        label="Cylinder Head Taper" 
        value={results.taperAngle} 
        unit="°"
      />
    </div>
  );
}