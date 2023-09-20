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
          const response = await axios.get(`https://api.scryfall.com/cards/${id}`);
          setCard(response.data);
          console.log("Card fetched successfully");
          console.log(response.data);
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
          <div className="flex">
          {card.card_faces ? (
            card.card_faces.map((face, index) => (
              <img
                key={index}
                src={face.image_uris?.normal}
                alt={card.name}
                className={styles.cardImage}
              />
            ))
          ) : (
            <img
              src={card.image_uris?.normal}
              alt={card.name}
              className={styles.cardImage}
            />
          )}
        </div>
          <h1 className={styles.cardTitle}>{card.name}</h1>
          {/* Mostrar más detalles de la carta aquí */}
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
