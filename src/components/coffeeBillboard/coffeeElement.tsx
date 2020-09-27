import React from "react";
import Button from "react-bootstrap/esm/Button";
import Image from "react-bootstrap/esm/Image";
import "./style.scss"

interface IProps {
   id: string;
   name: string;
   price: string;
   img: string;
   onRemove: Function;
}

/**
 * Component responsible for showing an instance of a coffee item on the billboard
 * @param id contains id of coffee item 
 * @param name contains name of coffee
 * @param price contains price of coffee
 * @param img image url
 * @param onRemove contains function to remove a coffee item from the billboard
 */
const CoffeeElement: React.FC<IProps> = ({id, name, price, img, onRemove}) => {
  return (
      <div key={id+1} className="coffee-element">
        <div  className="removeButton">
          <Button size="sm" variant="danger" onClick={()=>{onRemove(id)}}>X</Button>
        </div>
          <Image src={img} alt={"...this should be an image of a coffee"} thumbnail />
          <div className="coffee-details">
            <p className="coffee-price" >{price}</p>
            <p className="coffee-name">{name}</p>
          </div>
      </div>
  )
};

export default CoffeeElement