import { Route, Routes } from "react-router-dom";
import { MainTemplate } from "./components";
import {
  AccountPage,
  CartPage,
  FavoritesPage,
  HomePage,
  SearchPage,
} from "./pages";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainTemplate />}>
        <Route path="/" element={<HomePage />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="favorites" element={<FavoritesPage />} />
        <Route path="account" element={<AccountPage />} />
        <Route path="cart" element={<CartPage />} />
      </Route>
    </Routes>
  );
};
