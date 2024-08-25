import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../Components/layout";
import { Link } from "react-router-dom";

const Home = () => {
  const [posts, setPosts] = useState([]);

  const getAllPosts = async () => {
    try {
      const { data } = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/posts/all-posts`);
      setPosts(data?.posts);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <Layout>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-10 p-10 ">
        {posts.map((item) => (
          <Link
            to={`/post-details/${item?._id}`}
            key={item._id}
            className="border-8 border-white rounded drop-shadow overflow-hidden cursor-pointer"
          >
            <div className="bg-white/80 h-60 border-b overflow-hidden">
              <img
                src={item?.coverImage}
                alt={item?.title}
                className="h-full w-full object-cover hover:scale-[1.02] transition-all duration-200"
              />
            </div>
            <h1 className="bg-white p-2 font-lato text-slate-800 font-semibold h-full">
              {item?.title}
            </h1>
          </Link>
        ))}
      </div>
    </Layout>
  );
};

export default Home;
