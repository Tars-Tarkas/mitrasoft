import React from "react";
import "./App.css";

import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import PostList from "./Pages/PostList";

const App: React.FC = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<PostList />} />
        {/* <Route path="/:id" exact component={() => <Singlepost />} /> */}
      </Routes>
    </>
  );
};

export default App;
