import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
	name: 'cart',
	initialState: {
		items: [] // Initialize items as an empty array
	},
	reducers: {
		addItem: (state, action) => {
			const { name, image, cost } = action.payload;
			const existingItem = state.items.find((item) => item.name === name);
			if (existingItem) {
				existingItem.quantity++;
			} else {
				state.items = [...state.items, { name, image, cost, quantity: 1 }];
			}
			console.log(state.items);
		},
		removeItem: (state, action) => {
			state.items = state.items.filter((el) => el.name !== action.payload.name);
			console.log(state.items);
		},
		updateQuantity: (state, action) => {
			const { name, quantity } = action.payload;
			if (quantity === 0) {
				state.items = state.items.filter((el) => el.name !== name);
			}
			const existingItem = state.items.find((item) => item.name === name);
			if (existingItem) {
				existingItem.quantity = quantity;
			}
			console.log(state.items);
		}
	}
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
