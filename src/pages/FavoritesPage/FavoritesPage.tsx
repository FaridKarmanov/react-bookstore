import { Link } from "react-router-dom";
import { ArrowHomeIcon } from "../../assets";
import { FavoritesList, TitlePage } from "../../components";
import { useAppSelector } from "../../store/hooks";
import { getFavorites } from "../../store/selectors";
import { EmptyFavorites, TitleContainer, Wrapper } from "./styles";

export const FavoritesPage = () => {
  const { favorites } = useAppSelector(getFavorites);

  return (
    <Wrapper>
      <TitleContainer>
        <Link to="/">
          <ArrowHomeIcon />
        </Link>
        <TitlePage>Favorites</TitlePage>
      </TitleContainer>
      {favorites.length === 0 ? (
        <EmptyFavorites>Nothing in favorites!</EmptyFavorites>
      ) : (
        <FavoritesList />
      )}
    </Wrapper>
  );
};
