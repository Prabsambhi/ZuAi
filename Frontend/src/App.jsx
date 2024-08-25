import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/home";
import AddBlog from "./Pages/addBlog";
import PostDetails from "./Pages/postDetails";
import EditBlog from "./Pages/editBlog";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add-blog" element={<AddBlog />} />
      <Route path="/post-details/:id" element={<PostDetails />} />
      <Route path="/edit-details/:id" element={<EditBlog />} />
    </Routes>
  );
};

export default App;
