import classes from "./Cardlist.module.css";
import { useState } from "react";
const Card = (props) => {
  const [editmode, seteditmode] = useState(false);
  const [text, settext] = useState(props.value);
  const changeedit = () => {
    seteditmode(true);
  };
  console.log(props);
  const update = () => {
    props.updateHandler(props.id, text);
    seteditmode(false);
  };
  const changeh=(event)=>{
      settext(event.target.value)
  }
  const deletei=()=>{
    console.log(props.id);
    props.deleteHandler(+props.id);
  }
  return (
    <div className={classes.card}>
      {editmode == false && props.children}
      {editmode == true && (
        <>
          <input value={text} onChange={changeh} />{" "}
          <button onClick={update}>Update</button>
        </>
      )}
      {editmode == false && (
        <div>
          <button onClick={changeedit}>Edit</button>
          <button onClick={deletei}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default Card;
