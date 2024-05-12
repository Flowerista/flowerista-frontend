import { ISize } from '../../../../shared/types/flower.ts';

export interface InterfaceBouquetId {
  id: number;
  name: string;
  itemCode: string;
  imageUrls: Record<string, string>;
  sizes: ISize[];
  flowers: {
    id: number;
    name: string;
  }[];
  stockQuantity: number;
}
