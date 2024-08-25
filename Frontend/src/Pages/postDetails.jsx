import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../Components/layout";
import { useParams } from "react-router-dom";
import { MdDeleteOutline } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import DeleteWindow from "../Components/deleteWindow";
import { Link } from "react-router-dom";

const PostDetails = () => {
  const [post, setPost] = useState({});
  const [showModal, setShowModal] = useState(false);
  const { id } = useParams();

  const getSinglePost = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:3000/posts/single-post/${id}`
      );
      setPost(data?.post);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSinglePost();
  }, []);

  return (
    <Layout>
      {post ? (
        <div className="flex flex-col lg:flex-row lg:px-20 lg:py-16 p-4 gap-4 lg:gap-6 lg:justify-center">
          <div className="flex flex-col px-4 py-6 gap-6 bg-white border border-slate-100 rounded drop-shadow lg:w-1/2 lg:px-10 lg:py-10">
            <img
              src={post?.coverImage}
              alt={post?.title}
              className="w-full h-auto object-cover rounded-lg"
            />
            <div>
              <h1 className="text-2xl lg:text-4xl text-slate-800 font-extrabold font-merriweather">
                {post?.title}
              </h1>
              <p className="text-base lg:text-lg font-medium text-slate-600 font-lato mt-2 lg:mt-4 mb-6">
                by: {post?.author}
              </p>
              <p className="font-lato text-slate-800 text-sm lg:text-base">
                {post?.content}
              </p>
            </div>
          </div>
          <div className="flex flex-row lg:flex-col items-center lg:items-end gap-2 lg:gap-4">
            <Link to={`/edit-details/${id}`}>
              <FaEdit className="text-2xl lg:text-3xl text-slate-800 cursor-pointer hover:text-slate-600 transition-all duration-200" />
            </Link>
            <MdDeleteOutline
              className="text-2xl lg:text-4xl text-slate-800 cursor-pointer hover:text-slate-600 transition-all duration-200"
              onClick={() => {
                setShowModal(true);
              }}
            />
          </div>
          {showModal && (
            <DeleteWindow id={id} onClose={() => setShowModal(false)} />
          )}
        </div>
      ) : (
        <p>Loading post...</p>
      )}
    </Layout>
  );
};

export default PostDetails;
