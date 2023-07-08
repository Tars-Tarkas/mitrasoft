import React from "react";
import "./App.css";

import { Route, Routes, Navigate } from "react-router-dom";
import Posts from "./Pages/Posts";
import About from "./Pages/About";
import User from "./Pages/User";
import PageNotFound from "./Pages/PageNotFound";

import Layout from "./components/Layout";

import ThemeProvider from "react-bootstrap/ThemeProvider";

const App: React.FC = () => {
  return (
    <ThemeProvider
      breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
      minBreakpoint="xxs"
    >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate replace to="/posts" />} />
          <Route path="/posts" element={<Posts title="Посты" />} />
          <Route path="users/:id" element={<User />} />
          <Route path="about" element={<About title="Обо мне" />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};

export default App;
