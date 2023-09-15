"use client";
import Link from 'next/link';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../types/card';

const CardContainer: React.FC = () => {
  const [cards, setCards] = useState<Card[]>([]);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await axios.get('https://api.magicthegathering.io/v1/cards');
        setCards(response.data.cards);
      } catch (error) {
        console.error('Error fetching cards:', error);
      }
    };

    fetchCards();
  }, []);

  const styles = {
    gridContainer: 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4',
    cardContainer: 'bg-white rounded-lg overflow-hidden shadow-md transform transition-transform hover:-translate-y-1 hover:scale-105 hover:shadow-lg',
    cardImage: 'w-full h-64 object-cover',
    cardContent: 'p-4',
    cardTitle: 'text-xl font-semibold',
    
  };

  return (
    <div className={styles.gridContainer}>
      {cards.map((card) => (
        
          
            <div key={card.id} className={styles.cardContainer}>
              <Link key={card.id} href={`/detail?id=${card.id}`}>
                <img src={card.imageUrl} alt={card.name} className={styles.cardImage} />
              </Link>
              <div className={styles.cardContent}>
                <h2 className={styles.cardTitle}>{card.name}</h2>
                
              </div>
            </div>
          
       
      ))}
    </div>
  );
};

export default CardContainer;
