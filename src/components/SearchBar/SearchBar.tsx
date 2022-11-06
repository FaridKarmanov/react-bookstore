import { Link } from "react-router-dom";
import { BurgerMenu } from "..";
import {
  AccountIcon,
  BurgerIcon,
  CartIcon,
  CloseBurgerIcon,
  FavoritesIcon,
  LogoIcon,
  NotEmptyCartIcon,
  NotEmptyFavoritesIcon,
} from "../../assets";
import { useWindowSize } from "../../hooks";
import { useAppSelector } from "../../store/hooks";
import { getCart, getFavorites } from "../../store/selectors";
import { Search, UserIcons, Wrapper } from "./styles";

interface IProps {
  state: boolean;
  toggle: (value: boolean) => void;
}

export const SearchBar = ({ state, toggle }: IProps) => {
  const { width = 0 } = useWindowSize();
  const { favorites } = useAppSelector(getFavorites);
  const { cart } = useAppSelector(getCart);

  return (
    <Wrapper>
      <Link to="/">
        <LogoIcon onClick={() => toggle(false)} />
      </Link>

      {width >= 1260 ? (
        <>
          <Search placeholder="Search" />
          <UserIcons>
            <Link to="favorites">
              {favorites.length === 0 ? (
                <FavoritesIcon />
              ) : (
                <NotEmptyFavoritesIcon />
              )}
            </Link>
            <Link to="cart">
              {cart.length === 0 ? <CartIcon /> : <NotEmptyCartIcon />}
            </Link>
            <Link to="account">
              <AccountIcon />
            </Link>
          </UserIcons>
        </>
      ) : (
        <UserIcons>
          <Link to="cart">
            <CartIcon onClick={() => toggle(false)} />
          </Link>
          {state ? (
            <CloseBurgerIcon onClick={() => toggle(false)} />
          ) : (
            <BurgerIcon onClick={() => toggle(true)} />
          )}
        </UserIcons>
      )}

      {state ? <BurgerMenu toggle={toggle} /> : <></>}
    </Wrapper>
  );
};
