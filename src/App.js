import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";

import { Switch, Route, Link, Redirect } from "react-router-dom";
import CourseGoalList from "./components/CourseGoals/CourseGoalList/CourseGoalList";
import PostForm from "./components/CourseGoals/CourseInput/PostForm";
import "./App.css";
import CourseGoalItem from "./components/CourseGoals/CourseGoalItem/CourseGoalItem";
import { blogsliceactions } from "./redux/blogs";
import { useSelector, useDispatch } from "react-redux";
import MainNavigation from "./components/Navbar/MainNavigation";
import Auth from "./components/Auth";
const App = () => {
  const auth = useSelector((state) => state.auth);
  const blogs = useSelector((state) => state.blogs);

  const dispatch = useDispatch();
  const [courseGoals, setCourseGoals] = useState([
    { text: "Do all exercises!", id: "g1" },
    { text: "Finish the course!", id: "g2" },
  ]);

  const addGoalHandler = (enteredText) => {
    var x = { text: enteredText, id: Math.random().toString() };
    dispatch(blogsliceactions.addblog(x));
  };

  const deleteItemHandler = (goalId) => {
    dispatch(blogsliceactions.removeblog(goalId));
  };
  const updatehandler = (goalId,text) => {
   
    dispatch(blogsliceactions.replaceblog({id:goalId,text:text}));
  };

  let content = (
    <p style={{ textAlign: "center" }}>No goals found. Maybe add one?</p>
  );

  if (courseGoals.length > 0) {
    content = (
      <CourseGoalList items={courseGoals} onDeleteItem={deleteItemHandler} update={updatehandler} />
    );
  }
  var routes;
  if (auth.islogin) {
    routes = (
      <BrowserRouter>
        <MainNavigation />
        <Switch>
          <Route path="/" exact>
            <CourseGoalList onDeleteItem={deleteItemHandler} update={updatehandler}/>
          </Route>

          <Route path="/Posts/new" exact>
            <PostForm onAddGoal={addGoalHandler} />
          </Route>
          <Route path="/:PostId/Posts" exact>
            <CourseGoalItem />
          </Route>
          
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  } else {
    routes = (
      <BrowserRouter>
        <MainNavigation />
        <Switch>
          <Route path="/" exact>
            <CourseGoalList onDeleteItem={deleteItemHandler} update={updatehandler} />
          </Route>

          <Route path="/Posts/new" exact>
            <PostForm onAddGoal={addGoalHandler} onDeleteItem={deleteItemHandler}  />
          </Route>
          <Route path="/:PostId/Posts" exact>
            <CourseGoalItem />
          </Route>
          <Route path="/login" exact>
            <Auth />
          </Route>
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }

  return (
    <div>
      {routes}

      {/* <section id="goals">{content}</section> */}
    </div>
  );
};

export default App;
