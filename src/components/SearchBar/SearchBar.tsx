import { useEffect } from "react";
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
import { useInput, useWindowSize } from "../../hooks";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getBooks, getCart, getFavorites } from "../../store/selectors";
import { fetchSearchBooks, setSearchValue } from "../../store/slices";
import { Search, UserIcons, Wrapper } from "./styles";

interface IProps {
  state: boolean;
  toggle: (value: boolean) => void;
}

export const SearchBar = ({ state, toggle }: IProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { searchValue } = useAppSelector(getBooks);

  const { width = 0 } = useWindowSize();
  const { onChange, value } = useInput();
  const { favorites } = useAppSelector(getFavorites);
  const { cart } = useAppSelector(getCart);

  useEffect(() => {
    dispatch(setSearchValue(value));
    dispatch(fetchSearchBooks(value));
  }, [value, dispatch]);
  return (
    <Wrapper>
      <Link to="/">
        <LogoIcon onClick={() => toggle(false)} />
      </Link>

      {width >= 1260 ? (
        <>
          <Search
            placeholder="Search"
            onChange={onChange}
            // onClick={() => {
            //   navigate("/search");
            // }}
          />
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
