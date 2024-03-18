import { create } from 'zustand'
import { Categories, type CurrentCategory } from '../types.d'

export const currentCategoryStore = create<CurrentCategory>()((set) => ({
    currentCategory: Categories.All,
    setCurrentCategory: (category: Categories) => set({ currentCategory: category })
}))
