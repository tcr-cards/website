import { RarityModel } from "./rarity.model";
import { SetModel } from "./set.model";

export class CardModel {
  declare id: string;
  declare code: string;
  declare name: string;
  declare image: string;
  declare set: SetModel;
  declare rarity: RarityModel;
}

export const cardMock: CardModel = {
  id: "1",
  code: "132/250",
  name: "Zapdos EX",
  image: "assets/card.png",
  set: {
    id: 1,
    name: "MEW: Pokemon 151 collection",
    code: "892",
    logoImg: "https://via.placeholder.com/150",
  },
  rarity: {
    name: "SAR",
    image: "https://via.placeholder.com/150",
  },
};
