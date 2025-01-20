
import { ProductType } from '@/components/mini/ProductCard';
import { create } from 'zustand'

export interface CartProduct extends ProductType {
    quantity: number,
    subPrice: number,
    totalAmount: number,
}

interface CartStateI {
    cart: CartProduct[],
    addToCart: (item: CartProduct) => void,
    removeFromCart: (itemId: string) => void,
    clearCart: () => void,
    updateQuantity: (itemId: string, quantity: number) => void
}

const useCartStore = create<CartStateI>()((set) => ({
    cart: [],
    addToCart: (item) => set((state) => ({ cart: [...state.cart, item] })),
    removeFromCart: (itemId) => set((state) => ({ cart: state.cart.filter((item) => item._id !== itemId) })),
    clearCart: () => set({ cart: [] }),
    updateQuantity: (itemId, quantity) => set((state) => ({ cart: state.cart.map((item) => item._id === itemId ? { ...item, quantity, totalAmount: item.subPrice * quantity } : item) }))
}));

export const calculateAmount = (cartItems: CartProduct[]) => {
    let amount;
    if (cartItems.length <= 0) { amount = 0; }
    else {
        amount = cartItems.reduce((acc, cartProduct) => acc + cartProduct.totalAmount, 0);
    }
    return amount;
}

export default useCartStore;
