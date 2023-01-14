import React from "react";
//we declare a function Article
function Article() {
  // the function has a return value of JSX which is out way of telling React "Hey, when you want to put this component on the DOM, here is what it     should become"
  return (
    <div>Dear Reader: Bjarne Stroustrup has the perfect lecture oration.</div>
  );
}

function Comment(){
  return (
    <div>Naturally, I agree with this article.</div>
  )
}

//In addition to rendering a regular HTML <div> element, we are also rendering our two components
//this App element is the parent component of comment and article
function App(){
  return (
    // this renders the article first then the comment 
    <div>
      <Article />
      <Comment />
    </div>
  )
}
export default App;
