import {ImageData} from './get-user-image/get-user-image.component'

export enum ProductType {
  Bouquet,
  Balls,
  FruitBaskets,
  Gifts
}

export enum BouquetType {
  Small,
  Standard,
  Big
}

export interface Promotion {
  oldPrice: number;
}

export interface InformationCard {
  title: string;
  shortDescription: string;
  description: string;
  img: ImageData[];
  price?: number;
  hit?: boolean;
  promotion?: Promotion;
  type?: ProductType,
  bouquetType?: BouquetType,
  bouquetWidth?: string,
  bouquetHeight?: string,
  id?: string;
}
