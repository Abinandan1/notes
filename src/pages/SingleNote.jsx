import {
  Form,
  redirect,
  useLoaderData,
  useNavigate,
  useSubmit,
} from "react-router-dom";
import { customFetch } from "../utils";
import { Button, Modal } from "../components";
import { toast } from "react-toastify";
import { closeModal, openModal } from "../features/modal/modalSlice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const loader =
  (store) =>
  async ({ params }) => {
    const { token } = store.getState().userState.user;

    if (params.id !== "newNote") {
      try {
        const note = await customFetch(`/notes/${params.id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        return { ...note.data, isNew: false };
      } catch (error) {
        console.log(error);
      }
    }
    return { note: { title: "", note: "", updatedAt: "", isNew: true } };
  };

export const action =
  (store) =>
  async ({ params: { id } }) => {
    const { token } = store.getState().userState.user;
    try {
      let note;
      if (id === "newNote") {
        toast.warn("Note discarded.");
        return redirect(`../notes`);
      } else {
        note = await customFetch.delete(`/notes/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        store.dispatch(closeModal());
        toast.warn("Note discarded");
        return redirect(`../notes`);
      }
    } catch (error) {
      console.log(error);
    }
    return null;
  };
const SingleNote = () => {
  const id = new URL(window.location.href).pathname.split("/")[3];
  // LOADER DATA
  const { note } = useLoaderData();
  const { title, note: text, updatedAt, isNew } = note;
  // FORMATTING UPDATED AT
  const today = new Date().setHours(0, 0, 0, 0);
  const updatedDay = new Date(updatedAt);
  const editedMargin = new Date(updatedAt).getTime() > today;
  const editedAt = editedMargin
    ? updatedDay.getHours() + ":" + updatedDay.getMinutes()
    : updatedDay.toDateString();
  // HANDLE FORM SUBMIT
  const { isOpen } = useSelector((state) => state.modalState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.userState.user);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      note: e.target.note.value,
      title: e.target.title.value,
    };
    if (data.note.trim().length === 0 && data.title.trim().length === 0) {
      console.log(1);
      dispatch(
        openModal({
          method: "delete",
          message: "Empty note will be discarded. Do you wish to continue?",
        })
      );
    } else {
      try {
        let note;
        if (id === "newNote") {
          note = await customFetch.post("/notes", data, {
            headers: { Authorization: `Bearer ${token}` },
          });
          toast.success("Note saved successfully.");
          navigate(`../notes/${note.data._id}`);
        } else {
          note = await customFetch.patch(`/notes/${id}`, data, {
            headers: { Authorization: `Bearer ${token}` },
          });
          toast.success("Note edited successfully.");
          navigate(`../notes/${id}`);
        }
      } catch (error) {}
    }
  };
  return (
    <>
      {isOpen && <Modal />}
      <form
        onSubmit={handleSubmit}
        className="grid gap-2 justify-items-center "
      >
        {!isNew && (
          <p className="text-gray-400 text-xs mb-8">Edited at {editedAt}</p>
        )}
        <div className="border-b-2 border-gray-300">
          <textarea
            defaultValue={title}
            name="title"
            cols="80"
            rows="1"
            className="px-2"
            onBlur={(e) => {
              e.currentTarget.parentElement.classList.toggle("rounded-md");
              e.currentTarget.parentElement.classList.toggle("border-black");
              e.currentTarget.parentElement.classList.toggle("border-gray-300");
            }}
            onFocus={(e) => {
              e.currentTarget.style.outline = "none";
              e.currentTarget.parentElement.classList.toggle("border-gray-300");
              e.currentTarget.parentElement.classList.toggle("border-black");
              e.currentTarget.parentElement.classList.toggle("rounded-md");
            }}
          ></textarea>
        </div>
        <div className="">
          <textarea
            onFocus={(e) => {
              e.currentTarget.style.outline = "none";
            }}
            defaultValue={text}
            name="note"
            cols="80"
            rows="15"
          ></textarea>
        </div>
        <Button type="submit" text="save" />
        {/* <button
        type="submit"
        className="px-4 py-2 uppercase tracking-[2px] rounded-lg bg-yellow-900 text-white transition-all duration-300 hover:bg-yellow-700"
      >
        save
      </button> */}
      </form>
    </>
  );
};
export default SingleNote;
