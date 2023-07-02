import React from "react";
import "./App.css";

import { Route, Routes } from "react-router-dom";
import PostList from "./Pages/PostList";
import About from "./Pages/About";
import User from "./Pages/User";

import Layout from "./components/Layout";

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route index element={<PostList title="Посты" />} /> */}
          <Route path="posts" index element={<PostList title="Посты" />} />
          <Route path="users/:id" element={<User />} />
          <Route path="about" element={<About title="Обо мне" />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
