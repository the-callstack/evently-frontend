import { Filter } from "../filter/Filter"
import { Hero } from "../hero/Hero"
import { ItemCard } from "../itemCard/ItemCard"

export const Product = () => {
  return (
    <div>
        <Hero />
        <div className="flex">
        <Filter />            
        <ItemCard />
        </div>  
    </div>
  )
}
