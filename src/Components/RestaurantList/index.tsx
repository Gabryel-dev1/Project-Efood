import { RestaurantType } from "../../Pages/Home"; 
import Restaurant from "../Restaurant";

import { List } from "./style";

type Props = {
  restaurants: RestaurantType[]; 
};

const RestaurantList = ({ restaurants }: Props) => (
  <List className="container">
    {restaurants.map((restaurant) => (
      <Restaurant
        id={restaurant.id}
        key={restaurant.id}
        categoria={restaurant.tipo}
        destaque={restaurant.destaque}
        imagem={restaurant.capa}
        nome={restaurant.titulo}
        nota={restaurant.avaliacao}
        info={restaurant.descricao}
      />
    ))}
  </List>
);

export default RestaurantList;
