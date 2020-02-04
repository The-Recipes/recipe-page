import React from 'react';

const App = () => {
  return (
    <React.Fragment>
      <div id="recipe-general-info">
        <h1>Name</h1>
        <h3>Author</h3>
        <p>Categories</p>
        <p>Rating</p>
        <p>Summary</p>
      </div>
      <div id="recipe-desc">
        <div>Photo</div>
        <p>Description</p>
      </div>
      <div id="recipe-instructions">
        <span>Yield</span>
        <span>Active</span>
        <span>Total</span>
        <div>Ingredients</div>
        <div>Directions</div>
      </div>
    </React.Fragment>
  );
};

export default App;
