
type CardFace = {
  object: string;
  name: string;
  // Agregar propiedades necesarias para las caras de la carta de ser necesario
  image_uris: {
    small: string;
    normal: string;
    large: string;
    png: string;
    art_crop: string;
    border_crop: string;
  };
};
interface Card {
  id: string;
  name: string;
  uri: string;
  scryfall_uri: string;
  image_uris: {
    small: string;
    normal: string;
    large: string;
    png: string;
    art_crop: string;
    border_crop: string;
  };
  mana_cost: string;
  cmc: number;
  type_line: string;
  colors: string[];
  color_identity: string[];
  keywords: string[];
  card_faces?: CardFace[];
  // Otras propiedades relevantes de la carta
}

export default Card;