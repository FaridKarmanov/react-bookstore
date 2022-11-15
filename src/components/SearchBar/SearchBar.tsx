import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
import { useDebounce, useInput, useWindowSize } from "../../hooks";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getCart, getFavorites } from "../../store/selectors";
import { fetchSearchBooks, setSearchValue } from "../../store/slices";
import { Search, SearchResults, UserIcons, Wrapper } from "./styles";

interface IProps {
  state: boolean;
  toggle: (value: boolean) => void;
}

export const SearchBar = ({ state, toggle }: IProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { width = 0 } = useWindowSize();
  const { onChange, value } = useInput();
  const debounceValue = useDebounce(value, 1000);
  const [isOpen, setIsOpen] = useState(false);
  const { favorites } = useAppSelector(getFavorites);
  const { cart } = useAppSelector(getCart);

  useEffect(() => {
    if (debounceValue) {
      dispatch(fetchSearchBooks(debounceValue));
      dispatch(setSearchValue(debounceValue));
    } else {
      dispatch(setSearchValue("js"));
    }
  }, [debounceValue, dispatch]);

  return (
    <Wrapper>
      <Link to="/">
        <LogoIcon onClick={() => toggle(false)} />
      </Link>

      {width >= 1260 ? (
        <>
          <Search placeholder="Search" onChange={onChange} />

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
