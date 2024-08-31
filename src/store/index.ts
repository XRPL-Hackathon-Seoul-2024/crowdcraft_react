import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export const useAddressStore = create(
  persist(
    (set) => ({
      address: 0,
      setAddress: (val: string) => set(() => ({ address: val })),
    }),
    {
      name: "address", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    }
  )
);
