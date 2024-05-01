import Card from "./Card/Card";
import { catsData } from "../data/catsData";
const CardsContainer = () => {
  return (
    <div className=" mt-10 flex flex-wrap items-stretch justify-evenly">
      {catsData.map((cat) => (
        <Card key={cat.id} {...cat} />
      ))}
    </div>
  );
};

export default CardsContainer;
