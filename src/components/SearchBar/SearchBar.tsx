import { Link } from "react-router-dom";
import { AccountIcon, CartIcon, FavoritesIcon, LogoIcon } from "../../assets";
import { Search, UserIcons, Wrapper } from "./styles";

export const SearchBar = () => {
  return (
    <Wrapper>
      <Link to="/">
        <LogoIcon />
      </Link>
      <Search placeholder="Search" />
      <UserIcons>
        <Link to="favorites">
          <FavoritesIcon />
        </Link>
        <Link to="cart">
          <CartIcon />
        </Link>
        <Link to="account">
          <AccountIcon />
        </Link>
      </UserIcons>
    </Wrapper>
  );
};
