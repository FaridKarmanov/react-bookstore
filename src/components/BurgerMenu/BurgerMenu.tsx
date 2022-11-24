import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDebounce, useInput } from "../../hooks";
import { useAppDispatch } from "../../store/hooks";
import { setSearchValue } from "../../store/slices";
import { Container, Search, Title, Wrapper } from "./styles";

interface IProps {
  toggle: (value: boolean) => void;
}

export const BurgerMenu = ({ toggle }: IProps) => {
  const { onChange, value } = useInput();
  const debounceValue = useDebounce(value, 1000);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (debounceValue) {
      dispatch(setSearchValue(debounceValue));
    }
  }, [debounceValue, dispatch]);

  return (
    <Wrapper>
      <Container>
        <Search
          placeholder="Search"
          onChange={onChange}
          onClick={() => navigate("/search")}
        />
        <Link to="favorites" onClick={() => toggle(false)}>
          <Title>Favorites</Title>
        </Link>
        <Link to="account" onClick={() => toggle(false)}>
          <Title>Account</Title>
        </Link>
      </Container>
    </Wrapper>
  );
};
