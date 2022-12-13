import { Filter } from "../filter/Filter";
import { Hero } from "../hero/Hero";
import { ItemCard } from "../itemCard/ItemCard";

export const Product = () => {
  return (
    <div>
      <Hero />
      <div className="flex justify-center gap-10 pt-10 pl-10">
        <div>
          <Filter />
          <input className="border border-solid border-black rounded-lg" type='date' /> 
        </div>
        <div className="grid grid-cols-4 gap-5 w-full pr-10">
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
        </div>
      </div>
    </div>
  );
};
