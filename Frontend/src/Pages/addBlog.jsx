import React, { useState } from "react";
import toast from "react-hot-toast";
import Layout from "../Components/layout";
import axios from "axios";

const AddBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [coverImage, setCoverImage] = useState({});

  const handleImage = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);

    console.log(file);
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!coverImage.url) {
      toast.error("Please upload a cover image before submitting.");
      return;
    }

    try {
      const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/posts/create-post`, {
        title,
        author,
        content,
        coverImage: coverImage?.url,
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
      <div className="flex flex-col items-center w-full py-10 px-4 sm:px-6 lg:px-10">
        <h1 className="text-2xl sm:text-4xl text-slate-800 font-extrabold font-merriweather mb-8">
          Add a blog
        </h1>
        <form
          className="flex flex-col w-full max-w-lg gap-5 mt-12 p-6 rounded bg-white drop-shadow"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="outline-none px-3 py-2 bg-transparent rounded border border-slate-300 focus:border-slate-400"
            required
          />
          <textarea
            placeholder="Content"
            name="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="outline-none px-3 py-2 bg-transparent rounded border border-slate-300 focus:border-slate-400"
            required
          />
          <input
            type="text"
            name="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Author"
            className="outline-none px-3 py-2 bg-transparent rounded border border-slate-300 focus:border-slate-400"
            required
          />
          <label className="flex flex-col gap-2 w-full">
            <span className="text-slate-700 font-semibold">Thumbnail</span>
            <input
              type="file"
              name="coverImage"
              onChange={handleImage}
              className="file:border file:border-slate-300 file:rounded file:px-3 file:py-2 file:bg-white file:text-slate-700"
              required
            />
          </label>
          <button
            type="submit"
            className="hover:bg-violet-600 rounded transition-all duration-200 outline-none px-4 py-2 w-full bg-violet-700 text-white font-bold font-lato tracking-wider"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default AddBlog;
