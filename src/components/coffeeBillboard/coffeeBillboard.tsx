import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { IRootState } from "../../reducer/combinedReducer";
import { ICoffee } from "../../sharedInterfaces/ICoffee";
import CoffeeElement from "./coffeeElement";
import { coffeeActions } from "./reduxSlice";

/**
 *  Component responsible rendering all of the coffee items
 */
const CoffeeBillboard: React.FC = () => {

  const dispatch = useDispatch();

  /**
   *  Coffee data from redux
   */
  const { coffees } = useSelector((state: IRootState) => state.coffeeData);

  /**
   *  Function which calls dispatch on the remove coffee item action. 
   */
  const removeItem = (id: string)=>{
    dispatch(coffeeActions.removeItem(id))
  }

  /**
   *  Array of coffee item components to be displayed. 
   */
  const items = coffees? coffees.map((coffee: ICoffee) =>
    <CoffeeElement 
      key={coffee.id}
      id={coffee.id} 
      name={coffee.name} 
      img={coffee.img}
      price={coffee.price}
      onRemove={removeItem}
    />
  ) : []

  return (
    <div className="coffee-billboard">
      {items}
    </div>
  );
};

export default CoffeeBillboard;
