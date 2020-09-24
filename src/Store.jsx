import { atom } from "recoil";

export const IsMenuOpenState = atom({
  key: "IsMenuOpenState",
  default: false,
});

export const AdminModeState = atom({
  key: "AdminModeState",
  default: sessionStorage.getItem("accessToken") ? true : false,
});

export const ProductFormModal = atom({
  key: "ProductFormModalState",
  default: false,
});

export const GalleryPhotosState = atom({
  key: "GalleryPhotosState",
  default: { isOpen: false },
});

export const ThemeState = atom({
  key: "ThemeState",
  default: {
    index: localStorage.getItem("ThemeIndex") ? parseInt(localStorage.getItem("ThemeIndex")) : 0,
    themes: ["fun", "cold"],
  },
});

export const ErrorHandlerState = atom({
  key: "ErrorHandlerState",
  default: [],
});
