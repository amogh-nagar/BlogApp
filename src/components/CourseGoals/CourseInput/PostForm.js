import { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import Card from "../../UI/Card";
import classes from "./PostForm.module.css";

const PostForm = (props) => {
  const textInputRef = useRef();
  const history = useHistory();

  // console.log(isentering);
  const finishenteringhandler = (event) => {
    event.preventDefault();

    const enteredText = textInputRef.current.value;

    props.onAddGoal(enteredText);
    history.replace("/");
  };

  return (
    <div className={classes.postform}>
      <Card>
        <form className={classes.form} onSubmit={finishenteringhandler}>
          <div className={classes.control}>
            <label htmlFor="text">Text</label>
            <textarea id="text" rows="5" ref={textInputRef}></textarea>
          </div>
          <div className={classes.actions}>
            <button className="btn">Add Blog</button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default PostForm;
