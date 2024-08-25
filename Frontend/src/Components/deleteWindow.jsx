import React from "react";
import { MdOutlineClose } from "react-icons/md";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const DeleteWindow = ({ id, onClose }) => {
  const navigate = useNavigate();

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(
        `${import.meta.env.VITE_BACKEND_URL}/posts/delete-post/${id}`
      );
      if (res.data.success) {
        toast.success("Event Deleted");
        navigate("/");
        onClose();
      } else {
        toast.error("Error");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong while deleting event");
    }
  };

  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center z-50 "
        onClick={onClose}
      >
        <div className="bg-white whitespace-normal w-3/5 h-2/5 px-8 py-8 relative z-50 space-y-5 rounded-lg">
          <MdOutlineClose
            className="absolute right-2 top-2 text-3xl text-slate-600"
            onClick={onClose}
          />
          <div className="flex flex-col items-center space-y-10">
            <p className="text-xl font-lato">
              Are you sure you want to delete this event?
            </p>
            <div className="flex justify-around space-x-5">
              <button
                onClick={onClose}
                className="bg-slate-300 text-slate-900 px-5 py-2 rounded font-semibold hover:bg-slate-200 transition duration-200"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDelete(id)}
                className="text-slate-100 bg-slate-700 px-5 py-2 rounded font-semibold hover:bg-slate-800 transition duration-200"
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteWindow;
