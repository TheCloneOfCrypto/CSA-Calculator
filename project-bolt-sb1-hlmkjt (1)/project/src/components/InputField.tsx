import React from 'react';

interface InputFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  max?: number;
  step?: number;
  unit?: string;
}

export default function InputField({ 
  label, 
  value, 
  onChange, 
  placeholder, 
  max, 
  step = 0.1, 
  unit 
}: InputFieldProps) {
  return (
    <div className="space-y-2">
      <label className="block text-zinc-400 text-sm font-medium">{label}</label>
      <div className="relative group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 rounded-lg opacity-20 group-hover:opacity-30 blur transition duration-200"></div>
        <div className="relative">
          <input
            type="number"
            inputMode="decimal"
            pattern="[0-9]*"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            max={max}
            step={step}
            className="w-full bg-zinc-900/80 text-white px-4 py-2.5 rounded-lg border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-amber-500/50 text-right pr-12"
          />
          {unit && (
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 text-sm">
              {unit}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}