"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../types/card'; // Asegúrate de importar el tipo Card desde su ubicación correcta

const SpecificCardComponent: React.FC = () => {
  
  const [specificCard, setSpecificCard] = useState<Card | null>(null); // Usa el tipo Card en el estado

  useEffect(() => {
    
    // Realizar la solicitud GET a la ruta específica
    axios.get('https://api.scryfall.com/cards/random')
      .then((response) => {
        // Si la solicitud es exitosa, establecer los datos en el estado
        setSpecificCard(response.data as Card); // Asegúrate de asignar el tipo correcto
      })
      .catch((error) => {
        // Manejar cualquier error que pueda ocurrir durante la solicitud
        console.error('Error al obtener la carta específica:', error);
      });
  }, []);

  return (
    <div>
      <h2>Carta Específica</h2>
      {specificCard ? (
        <div>
          <h3>{specificCard.name}</h3>
          
        </div>
      ) : (
        <p>Cargando carta específica...</p>
      )}
    </div>
  );
};

export default SpecificCardComponent;



// export default function About() {
  
//   return (
   
//       <main>
//         <p>
//           about
//         </p>
//         <h1>{}</h1>
//         {/* */}
//       </main>

    
//   )
// }
