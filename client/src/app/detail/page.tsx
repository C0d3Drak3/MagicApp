"use client";

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from '../types/card';

const CardDetail: React.FC = () => {

  const searchParams = useSearchParams()
  const id = searchParams.get('id')
  const [card, setCard] = useState<Card | null>(null);

  useEffect(() => {
    const fetchCard = async () => {
      if (id) {
        try {
          const response = await axios.get(`https://api.magicthegathering.io/v1/cards/${id}`);
          setCard(response.data.card);
          console.log("Card fetched successfully");
        } catch (error) {
          console.error('Error fetching card details:', error);
        }
      }
    };

    fetchCard();
  }, [id]);

  const styles = {
    container: 'bg-white p-8 rounded-lg shadow-md',
    cardImage: 'w-full h-96 object-contain rounded-lg',
    cardTitle: 'text-2xl font-semibold mt-4',
    backButton: 'mt-4 text-blue-500 hover:underline',
  };

  return (
    <div className={styles.container}>
      {card ? (
        <>
          <img src={card.imageUrl} alt={card.name} className={styles.cardImage} />
          <h1 className={styles.cardTitle}>{card.name}</h1>
          {/* Mostrar más detalles de la tarjeta aquí */}
          <Link href="/">
            <button className={styles.backButton}>Volver a la página de inicio</button>
          </Link>
        </>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default CardDetail;