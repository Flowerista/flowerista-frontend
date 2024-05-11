import { generateCartID } from '../../shared/lib/helpers/generateCartID';
import { buildSlice } from '../buildSlice.ts';

export type Size = 'SMALL' | 'MEDIUM' | 'LARGE';

export interface ISize {
  id: number;
  size: Size;
  defaultPrice: number;
  discount: number | null;
  discountPrice: number | null;
}

export interface ICartItem {
  cartID: string; //id_currentSize
  id: number;
  name: string;
  imageUrls: Record<string, string>;
  defaultPrice: number;
  discount: number | null;
  discountPrice: number | null;
  sizes: ISize[];
  currentSize: Size;
  quantity: number;
}

interface IInitialState {
  cart: ICartItem[];
}

const initialState: IInitialState = {
  cart: []
};

interface PayloadId {
  cartID: string;
}

interface ChangeSizePayload {
  cartID: string;
  size: Size;
}

export const cartSlice = buildSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCartItem: (state, { payload }: { payload: ICartItem }) => {
      const findedItem = state.cart.find(
        (item) => item.cartID === payload.cartID
      );
      // Проверка на повторение
      if (findedItem) {
        findedItem.quantity += payload.quantity;
      } else {
        state.cart.push(payload);
      }
    },
    removeCartItem: (state, { payload }: { payload: PayloadId }) => {
      const cartItems = state.cart;
      state.cart = cartItems.filter(({ cartID }) => {
        return cartID !== payload.cartID;
      });
    },
    incQuantity: (state, { payload }: { payload: PayloadId }) => {
      const itemToUpdate = state.cart.find(
        (item) => item.cartID === payload.cartID
      );
      if (itemToUpdate) {
        itemToUpdate.quantity += 1;
      }
    },
    decQuantity: (state, { payload }: { payload: PayloadId }) => {
      const itemToUpdate = state.cart.find(
        (item) => item.cartID === payload.cartID
      );
      if (itemToUpdate) {
        itemToUpdate.quantity -= 1;
      }
    },
    changeSize: (state, { payload }: { payload: ChangeSizePayload }) => {
      // Находим сущ карточку
      const itemToUpdate = state.cart.find(
        (item) => item.cartID === payload.cartID
      );
      if (itemToUpdate) {
        // Копируем содержание и index
        const index = state.cart.indexOf(itemToUpdate);
        const oldItem = JSON.parse(JSON.stringify(itemToUpdate)) as ICartItem;
        // Создаем новый cartID
        const newCardID = generateCartID(oldItem.id, payload.size);
        // Находим сущ карточку
        const findedItem = state.cart.find((item) => item.cartID === newCardID);
        // Eсли есть карточка с похожим новым cartID изменяем у нее quantity и удаляем старую карточку
        if (findedItem) {
          findedItem.quantity += oldItem.quantity;
          state.cart = state.cart.filter((item) => {
            return item.cartID !== payload.cartID;
          });
          // Создаем новую карточку и заменяем ее на место старой
        } else {
          const newPrise = itemToUpdate.sizes.find(
            (item) => item.size === payload.size
          );
          if (newPrise) {
            const { defaultPrice, discount, discountPrice } = newPrise;
            const newItem: ICartItem = {
              ...oldItem,
              cartID: newCardID,
              defaultPrice,
              discount,
              discountPrice,
              currentSize: payload.size
            };
            state.cart[index] = newItem;
          }
        }
      }
    },
    cleanCart: (state) => {
      state.cart = [];
    }
  }
});

export const { useActions: useCartActions } = cartSlice;
