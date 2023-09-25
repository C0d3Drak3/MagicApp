"use client";
import React, { useState } from 'react';

const FilterMenu: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);

  const handleFilterChange = (filter: string) => {
    setSelectedFilter(filter);
    // Aquí puedes aplicar el filtro a las tarjetas mostradas en el grid
    console.log('Filtrar por:', filter);
  };

  return (
    <div className="bg-[#726379] p-4">
      <h2 className="text-lg font-semibold mb-2">Filtrar por:</h2>
      <ul className="space-y-2">
        <li>
          <button
            className={`w-full text-left ${
              selectedFilter === 'Color' ? 'text-blue-500 font-semibold' : ''
            }`}
            onClick={() => handleFilterChange('Color')}
          >
            Color
          </button>
        </li>
        <li>
          <button
            className={`w-full text-left ${
              selectedFilter === 'Rareza' ? 'text-blue-500 font-semibold' : ''
            }`}
            onClick={() => handleFilterChange('Rareza')}
          >
            Rareza
          </button>
        </li>
        <li>
          <button
            className={`w-full text-left ${
              selectedFilter === 'Tipo' ? 'text-blue-500 font-semibold' : ''
            }`}
            onClick={() => handleFilterChange('Tipo')}
          >
            Tipo
          </button>
        </li>
        {/* Agrega más opciones de filtro según tus necesidades */}
      </ul>
    </div>
  );
};

export default FilterMenu;
