import React from "react";

import "./CourseGoalList.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Cardlist from "../../UI/Cardlist";
import { produceWithPatches } from "@reduxjs/toolkit/node_modules/immer";
const CourseGoalList = (props) => {
  const blogs = useSelector((state) => state.blogs);
  const deleteHandler = (id) => {
    props.onDeleteItem(id);
  };
  const updateHandler = (id,text) => {
    
    props.update(id, text);
  };
  var showblogs = (
    <ul className="goal-list">
      {blogs.items.map((goal) => (
        <li className="goal-item" key={goal.id}>
          <Cardlist
         
            value={goal.text}
           
            id={goal.id}
            updateHandler={updateHandler}
            deleteHandler={deleteHandler}
          >
            {goal.text}
          </Cardlist>
        </li>
      ))}
    </ul>
  );
  return (
    <div className="list">
      {blogs.items.length > 0 && showblogs}
      {blogs.items.length == 0 && (
        <p className="not">No posts found please add some</p>
      )}
    </div>
  );
};

export default CourseGoalList;
