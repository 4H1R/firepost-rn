import create from 'zustand';

interface IIntroSlider {
  show: boolean;
  showIntroSlider: () => void;
  hideIntroSlider: () => void;
}

const useIntroSlider = create<IIntroSlider>((set) => ({
  show: false,
  showIntroSlider: () => set({ show: true }),
  hideIntroSlider: () => set({ show: false }),
}));

export default useIntroSlider;
