import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";
import userEvent from "@testing-library/user-event";

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header name="Good REACTion" />
      <About about="Dreamt of and beginning to get it"/>
      <ArticleList posts={blogData.posts}/>
    </div>
  );
}

export default App;
