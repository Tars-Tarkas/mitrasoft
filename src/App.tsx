import React from "react";
import "./App.css";

import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import PostList from "./Pages/PostList";
import About from "./Pages/About";
import User from "./Pages/User";

const App: React.FC = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<PostList title="Посты" />} />
        <Route path="/users/:id" element={<User />} />
        <Route path="/about" element={<About title="Обо мне" />} />
      </Routes>
    </>
  );
};

export default App;
