import { generateCartID } from '../../../../shared/lib/helpers';
import { buildSlice } from '../../../../shared/lib/store';
import {
  InterfaceCardItem,
  Size
} from '../../../../features/card/model/types/IntefaceCardItem.ts';

export interface IInitialStateCart {
  cart: InterfaceCardItem[];
}

const getCartFromLocalStorage = (): InterfaceCardItem[] | [] => {
  const cartSrt = localStorage.getItem('cart');
  if (cartSrt) {
    return JSON.parse(cartSrt);
  }
  return [];
};

const initialState: IInitialStateCart = {
  cart: getCartFromLocalStorage()
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
    addCartItem: (state, { payload }: { payload: InterfaceCardItem }) => {
      const findedItem = state.cart.find(
        (item) => item.cartID === payload.cartID
      );
      // Проверка на повторение
      if (findedItem) {
        findedItem.quantity += payload.quantity;
      } else {
        state.cart.push(payload);
        localStorage.setItem('cart', JSON.stringify(state.cart));
      }
    },
    removeCartItem: (state, { payload }: { payload: PayloadId }) => {
      const cartItems = state.cart;
      state.cart = cartItems.filter(({ cartID }) => {
        return cartID !== payload.cartID;
      });
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    incQuantity: (state, { payload }: { payload: PayloadId }) => {
      const itemToUpdate = state.cart.find(
        (item) => item.cartID === payload.cartID
      );
      if (itemToUpdate) {
        itemToUpdate.quantity += 1;
      }
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    decQuantity: (state, { payload }: { payload: PayloadId }) => {
      const itemToUpdate = state.cart.find(
        (item) => item.cartID === payload.cartID
      );
      if (itemToUpdate) {
        itemToUpdate.quantity -= 1;
      }
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    changeSize: (state, { payload }: { payload: ChangeSizePayload }) => {
      // Находим сущ карточку
      const itemToUpdate = state.cart.find(
        (item) => item.cartID === payload.cartID
      );
      if (itemToUpdate) {
        // Копируем содержание и index
        const index = state.cart.indexOf(itemToUpdate);
        const oldItem = JSON.parse(
          JSON.stringify(itemToUpdate)
        ) as InterfaceCardItem;
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
            const newItem: InterfaceCardItem = {
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
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    cleanCart: (state) => {
      state.cart = [];
      localStorage.setItem('cart', JSON.stringify([]));
    }
  }
});

export const {
  useActions: useCartActions,
  reducer: cartReducer,
  actions: cartActions
} = cartSlice;
