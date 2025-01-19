
import { ProductType } from '@/components/mini/ProductCard';
import { create } from 'zustand'

interface WishlistI {
    wishlist_items: ProductType[],
    addToWishlist: (item: ProductType) => void,
    removeFromWishlist: (itemId: string) => void,
    clearWishlist: () => void
}

const useWishlistStore = create<WishlistI>()((set) => ({
    wishlist_items: [],
    addToWishlist: (item) => set((state) => ({ wishlist_items: [...state.wishlist_items, item] })),
    removeFromWishlist: (itemId) => set((state) => ({ wishlist_items: state.wishlist_items.filter((item) => item._id !== itemId) })),
    clearWishlist: () => set({ wishlist_items: [] }),
}));

export default useWishlistStore;
