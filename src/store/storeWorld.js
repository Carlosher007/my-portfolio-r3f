import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

export const useRenderStore = create(devtools(persist((set, get) => ({
  isInfoOpened: false,
  scene: 0,

  setIsInfoOpened: (value) => set((state) => ({ isInfoOpened: value })),
  setScene: (value) => set((state) => ({ scene: value })),


}), {
  name: "render"
})));
