import {ImageData} from './get-user-image/get-user-image.component'

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
  id?: string;
}
