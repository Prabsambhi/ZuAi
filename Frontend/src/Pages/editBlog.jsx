import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import Layout from "../Components/layout";
import axios from "axios";
import { useParams } from "react-router-dom";

const EditBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [coverImage, setCoverImage] = useState({});

  const { id } = useParams();

  const handleImage = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/posts/upload`,
        formData
      );
      setCoverImage({
        url: data.url,
        public_id: data.public_id,
      });

      console.log("Uploaded", data);
    } catch (error) {
      console.log(error);
      console.log(error.message);
    }
  };

  const getSinglePost = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/posts/single-post/${id}`
      );

      setTitle(data?.post?.title);
      setContent(data?.post?.content);
      setAuthor(data?.post?.author);
      setCoverImage(data?.post?.coverImage);
    } catch (error) {
      console.log(error);
      toast.error("Somethig went wrong");
    }
  };

  useEffect(() => {
    getSinglePost();
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.put(`${import.meta.env.VITE_BACKEND_URL}/posts/update-post/${id}`, {
        title,
        author,
        content,
        coverImage
      });
      console.log(res);
      if (res && res.data.success) {
        toast.success(res.data.message);
        setTitle("");
        setAuthor("");
        setContent("");
        setCoverImage({});
      } else if (!res.data.success) {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <Layout>
      <div className="flex flex-col items-center w-full py-10 px-10">
        <h1 className="text-4xl text-slate-800 font-extrabold font-merriweather ">
          Edit your blog
        </h1>
        <form
          className="flex flex-col w-1/2 gap-5 mt-12 p-6 rounded bg-white drop-shadow"
          onSubmit={handleUpdate}
        >
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="outline-none px-2 py-2 bg-transparent rounded border border-slate-300 focus:border-slate-400 "
            required
          />
          <textarea
            placeholder="Content"
            name="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="outline-none px-2 py-2 bg-transparent rounded border border-slate-300 focus:border-slate-400"
            required
          />
          <input
            type="text"
            name="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Author"
            className="outline-none px-2 py-2 bg-transparent rounded border border-slate-300 focus:border-slate-400"
            required
          />
          <label className="flex flex-col gap-2 w-full">
            <span className=" text-slate-700 font-semibold">Thumbnail</span>
            {coverImage && (
              <img
                src={coverImage}
                alt="Cover"
                className="h-40 w-40 object-cover mb-4"
              />
            )}
            <input
              type="file"
              name="coverImage"
              onChange={handleImage}
            />
          </label>
          <button
            type="submit"
            className="hover:bg-violet-600 rounded transition-all duration-200 outline-none px-2 py-2 w-full bg-violet-700 text-white font-bold font-lato tracking-wider"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default EditBlog;
