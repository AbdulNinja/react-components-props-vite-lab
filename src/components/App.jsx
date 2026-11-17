import React from "react";
import blogData from "../data/blog";
import Header from "../components/Header.jsx"
import About from "../components/About.jsx"
import ArticleList from "../components/ArticleList.jsx"


console.log(blogData);

function App() {
  return (
    <div className="App">
    <Header name={name.blogData}/>
   <About
        image={blogData.image}
        about={blogData.about}
      />
    <ArticleList posts = {blogData.posts}/>
      
    </div>
    
  );
}

export default App;
