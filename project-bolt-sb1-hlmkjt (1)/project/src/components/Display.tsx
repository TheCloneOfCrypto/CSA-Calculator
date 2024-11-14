import React from 'react';

interface DisplayProps {
  value: string;
}

export default function Display({ value }: DisplayProps) {
  return (
    <div className="bg-gray-700 p-4 rounded-lg mb-4">
      <div className="text-right text-white text-2xl font-mono overflow-hidden">
        {value}
      </div>
    </div>
  );
}