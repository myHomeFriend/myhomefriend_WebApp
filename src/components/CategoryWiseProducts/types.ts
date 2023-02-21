import { IProduct } from "../Product/types";

export interface ICategory {
  categoryId: string | number;
  categoryCode: string;
  categoryType: string;
  categoryLink: string;
  categoryImage?:string;
  categoryProducts: IProduct[];
}
