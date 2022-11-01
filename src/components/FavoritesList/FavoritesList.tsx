import { FavoritesItem } from "..";
import { useAppSelector } from "../../store/hooks";
import { getFavorites } from "../../store/selectors";
import { List } from "./styles";

export const FavoritesList = () => {
  const { favorites } = useAppSelector(getFavorites);

  return (
    <List>
      {favorites.map((cartBook) => {
        return <FavoritesItem key={cartBook.isbn13} book={cartBook} />;
      })}
    </List>
  );
};
