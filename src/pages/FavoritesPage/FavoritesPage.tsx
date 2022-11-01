import React from "react";
import { Link } from "react-router-dom";
import { ArrowHomeIcon } from "../../assets";
import { FavoritesList } from "../../components";
import { Title, TitleContainer, Wrapper } from "./styles";

export const FavoritesPage = () => {
  return (
    <Wrapper>
      <TitleContainer>
        <Link to="/">
          <ArrowHomeIcon />
        </Link>
        <Title>Favorites</Title>
      </TitleContainer>
      <FavoritesList />
    </Wrapper>
  );
};
