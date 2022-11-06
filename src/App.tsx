import { Route, Routes } from "react-router-dom";
import { MainTemplate, Registration, RequareAuth } from "./components";
import {
  AccountPage,
  SignInPage,
  BookPage,
  CartPage,
  FavoritesPage,
  HomePage,
  SearchPage,
  SignUpPage,
  ResetPage,
} from "./pages";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainTemplate />}>
        <Route path="/" element={<HomePage />} />
        <Route path="book/:isbn13" element={<BookPage />} />
        <Route path="search" element={<SearchPage />} />

        <Route element={<Registration />}>
          <Route path="sign-up" element={<SignUpPage />} />
          <Route path="sign-in" element={<SignInPage />} />
        </Route>
        <Route path="reset" element={<ResetPage />} />

        <Route element={<RequareAuth />}>
          <Route path="favorites" element={<FavoritesPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="account" element={<AccountPage />} />
        </Route>
      </Route>
    </Routes>
  );
};
