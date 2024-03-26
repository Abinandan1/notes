import { Modal, NotesList } from "../components";
import { TbLayoutList, TbLayoutGrid } from "react-icons/tb";
import { Link, useLoaderData } from "react-router-dom";
import { customFetch } from "../utils";
import { FormInput } from "../components";
import { useState } from "react";
import { useSelector } from "react-redux";
import { closeModal } from "../features/modal/modalSlice";
import { FaPlusCircle } from "react-icons/fa";
import { toast } from "react-toastify";

export const loader =
  (store) =>
  async ({ request }) => {
    let search = new URL(request.url).search;
    const { token } = store.getState().userState.user;
    try {
      const notes = await customFetch(`/notes${search || "?archive=false"}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return notes.data;
    } catch (error) {
      console.log(error);
    }
    return null;
  };

export const action =
  (store) =>
  async ({ request }) => {
    const search = new URL(request.url).search;
    const { token } = store.getState().userState.user;
    const { noteId } = store.getState().modalState;
    try {
      let note;
      if (request.method === "DELETE") {
        note = await customFetch.delete(`/notes/${noteId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        toast.error("Note deleted.");
      } else {
        const archive = search === "?archive=true" ? false : true;
        note = await customFetch.patch(
          `/notes/${noteId}`,
          { archive },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        toast.success(`Note ${archive ? "" : "un"}archived.`);
      }
      store.dispatch(closeModal());
      return note.data;
    } catch (error) {
      console.log(error);
    }
    return null;
  };

const Notes = () => {
  const [layout, setLayout] = useState("grid");
  const [layoutInfo, setLayoutInfo] = useState(false);
  const [newNoteInfo, setNewNoteInfo] = useState(false);
  const { notes } = useLoaderData();
  const { isOpen } = useSelector((state) => {
    return state.modalState;
  });
  return (
    <section>
      {isOpen && <Modal />}
      <div className="flex items-center justify-center gap-4 mb-8">
        {/* SEARCH NOTES FORM */}
        <FormInput label="search your notes" />
        {/* LIST/GRID */}
        <div className="flex relative items-center">
          <button
            onClick={() => setLayout(layout === "grid" ? "list" : "grid")}
            className="mr-1 text-2xl hover:bg-gray-300 hover:rounded-[50%] p-2"
            onMouseOver={() => setLayoutInfo(true)}
            onMouseLeave={() => setLayoutInfo(false)}
          >
            {layout === "grid" ? <TbLayoutList /> : <TbLayoutGrid />}
          </button>
          {layoutInfo && (
            <div className=" text-xs absolute -right-10 bg-yellow-200 py-0.5 px-2 capitalize font-bold text-center shadow-md">
              {layout === "grid" ? "list" : "grid"}
            </div>
          )}
        </div>
      </div>
      {/* NOTES LIST */}
      <NotesList notes={notes} layout={layout} />
      {/* NEW NOTE */}
      <Link
        onMouseOver={() => setNewNoteInfo(true)}
        onMouseLeave={() => setNewNoteInfo(false)}
        className="text-5xl fixed bottom-8 right-8"
        to="newNote"
      >
        <FaPlusCircle className="text-yellow-600 hover:text-yellow-400 transition duration-300" />
        {newNoteInfo && (
          <div className="text-xs absolute -top-7 left-1/2 -translate-x-1/2 bg-yellow-200 py-0.5 px-2 capitalize w-[80px] font-bold text-center shadow-md">
            new note
          </div>
        )}
      </Link>
    </section>
  );
};
export default Notes;
