"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../types/card";

const CardContainer: React.FC<{ searchTerm: string }> = ({ searchTerm }) => {
  const [cards, setCards] = useState<Card[]>([]);

  const fetchDragons = async () => {
    try {
      const response = await axios.get(
        "https://api.scryfall.com/cards/search?order=cmc&dir=desc&q=name%3Ddragon+type%3Dcreature"
      );
      setCards(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.error("Error fetching cards:", error);
    }
  };

  useEffect(() => {
    fetchDragons(); // Carga las cartas de dragones al inicio
  }, []);

  useEffect(() => {
    if (searchTerm) {
      // Si hay un término de búsqueda, realiza una nueva búsqueda
      const searchCards = async () => {
        try {
          const response = await axios.get(
            `https://api.scryfall.com/cards/search?order=cmc&dir=desc&q=${searchTerm}`
          );
          setCards(response.data.data);
          console.log(response.data.data);
        } catch (error) {
          console.error("Error fetching cards:", error);
        }
      };
      searchCards(); // Realiza una búsqueda basada en searchTerm
    }
  }, [searchTerm]);

  const styles = {
    gridContainer:
      "bg-[#8F5C2B] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 p-8 max-w-screen  lg:max-w-full",
    cardContainer:
      "min-w-150 min-h-209 lg:max-w-300 lg:max-h-418 bg-white rounded-lg overflow-hidden shadow-md transform transition-transform hover:-translate-y-1 hover:scale-105 hover:shadow-lg",
    cardImage: "object-cover",
  };

  return (
    <div className={styles.gridContainer}>
      {cards.map((card) => (
        <div key={card.id} className={styles.cardContainer}>
          <Link key={card.id} href={`/detail?id=${card.id}`}>
            <img
              src={
                card.card_faces && card.card_faces[0]?.image_uris?.normal
                  ? card.card_faces[0].image_uris.normal
                  : card.image_uris?.normal
              }
              alt={card.name}
              className={styles.cardImage}
            />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CardContainer;
