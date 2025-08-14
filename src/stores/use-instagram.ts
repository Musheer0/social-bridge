import { create } from "zustand";

type IGData = {
  id: string;
  createdAt: Date;
  ig_id: string;
  expiresAt: Date;
} | null;

type InstagramStore = {
  ig: IGData;
  typeUrl: string | null;
  isLoading: boolean;
  setIG: (data: IGData) => void;
  setTypeUrl: (url: string | null) => void;
  setIsLoading: (state: boolean) => void;
  reset: () => void;
};

export const useInstagram = create<InstagramStore>((set) => ({
  ig: null,
  typeUrl: null,
  isLoading: true,
  setIG: (data) => set({ ig: data }),
  setTypeUrl: (url) => set({ typeUrl: url }),
  setIsLoading: (state) => set({ isLoading: state }),
  reset: () => set({ ig: null, typeUrl: null, isLoading: false }),
}));
