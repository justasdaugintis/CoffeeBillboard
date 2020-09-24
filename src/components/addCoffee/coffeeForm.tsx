import React, { useState } from "react";
import Form from "react-bootstrap/esm/Form";
import Button from "react-bootstrap/esm/Button";
import { useDispatch } from "react-redux";
import { ICoffee } from "../../sharedInterfaces/ICoffee";
import { coffeeActions } from "../coffeeBillboard/reduxSlice";
import "./style.scss"

interface IProps {
  handleClose: Function;
}

/**
 *  Component responsible for rendering a form and allowing user to add a new coffee
 *  @param handleClose contains function which closes the modal window
 */
const CoffeeForm: React.FC<IProps> = ({handleClose}) => {

  const dispatch = useDispatch();

  /**
   *  Function which calls dispatch on the add coffee item action
   */
  const addItem = (name: string, price: string, imgURL: string)=>{
    const uniqueID = Math.floor(Math.random() * 1000)
    const coffee: ICoffee = {
        id: uniqueID.toString(),
        name: name,
        price: "$" + " " + price.toString(),
        img: imgURL
    }
    dispatch(coffeeActions.addItem(coffee))
  }

  // Local component state and state setters for form elements
  const [validated, setValidated] = useState<boolean>(false);
  const [nameValue, setNameValue] = useState<string>("");
  const [priceValue, setPriceValue] = useState<string>("");
  const [imgUrl, setImgUrl] = useState<string>("");

  /**
   *  Function which is called when the form is submitted
   *  sets form state based on input values
   *  if all required fields are filled, dispatches action to add a new coffee item
   */
  const handleSubmit = (event: any) => {
    const form = event.currentTarget;
    console.log(form.checkValidity() )
    if (form.checkValidity() === false) {
      setValidated(false);
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
    if(form.checkValidity() === true){
      handleClose()
      addItem(nameValue, priceValue, imgUrl )
      event.preventDefault();
    }
  };

  return (
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group controlId="coffeeName">
          <Form.Label>Coffee</Form.Label>
          <Form.Control required type="text" value={nameValue} placeholder="your favourite coffee..." onChange={(
              ev: React.ChangeEvent<HTMLInputElement>,
          ): void => setNameValue(ev.target.value)}/>
      </Form.Group>
      <Form.Group controlId="coffeePrice">
          <Form.Label>Price</Form.Label>
          <Form.Control required type="number"  value={priceValue} placeholder="how much?" onChange={(
              ev: React.ChangeEvent<HTMLInputElement>,
          ): void => setPriceValue(ev.target.value)} />
      </Form.Group>
      <Form.Group controlId="coffeeImage">
          <Form.Label>Image URL</Form.Label>
          <Form.Control required type="text" value={imgUrl} placeholder="pictureURL/coffee..." onChange={(
              ev: React.ChangeEvent<HTMLInputElement>,
          ): void => setImgUrl(ev.target.value)}/>
      </Form.Group>
      <Button variant="success" type="submit">
          Add
      </Button>
      </Form>
    );
  };

  export default CoffeeForm;