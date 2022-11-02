import { Route, Routes } from "react-router-dom";
import { MainTemplate, Registration, RequareAuth, SignUp } from "./components";
import {
  AccountPage,
  SignIn,
  BookPage,
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
        <Route path="book/:isbn13" element={<BookPage />} />
        <Route path="search" element={<SearchPage />} />

        <Route element={<Registration />}>
          <Route path="sign-up" element={<SignUp />} />
          <Route path="sign-in" element={<SignIn />} />
        </Route>

        <Route element={<RequareAuth />}>
          <Route path="favorites" element={<FavoritesPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="account" element={<AccountPage />} />
        </Route>
      </Route>
    </Routes>
  );
};
