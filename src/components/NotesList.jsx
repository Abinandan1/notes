import { useState } from "react";
import { MdArchive, MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Note from "./Note";
import Modal from "./Modal";
import { openModal } from "../features/modal/modalSlice";
import { useDispatch } from "react-redux";
const NotesList = ({ notes, layout }) => {
  const dispatch = useDispatch();
  if (layout === "list") {
    return (
      <div className="grid gap-4">
        {notes.map((note) => {
          return (
            // <Link
            //   className={` hover:bg-gray-50 py-2 px-4 rounded-md border-2 border-gray-300 relative`}
            //   key={note._id}
            //   to={`${note._id}`}
            // >
            //   <div className="grid grid-cols-2 place-items-center absolute top-0 right-0">
            //     <button
            //       className="text-lg hover:bg-gray-300 p-2 rounded-[50%]"
            //       onClick={() => dispatch(openModal({ id: note._id }))}
            //     >
            //       <MdDelete />
            //     </button>
            //     <button className="text-lg hover:bg-gray-300 p-2 rounded-[50%]">
            //       <MdArchive />
            //     </button>
            //   </div>
            //   <h1 className="font-bold mb-2">{note.title}</h1>
            //   <p className="max-w-16 sm:max-w-[400px]">
            //     {note.note.slice(0, 50)}
            //     {note.note.length > 40 && "..."}
            //   </p>
            // </Link>
            <Note key={note._id} note={note} layout={layout} />
          );
        })}
      </div>
    );
  }
  return (
    <div className="grid grid-cols-2 gap-2">
      <div className="grid gap-2">
        {notes.map((note, index) => {
          if (index % 2 === 0) {
            return <Note key={note._id} note={note} />;
          }
        })}
      </div>
      <div className="grid gap-2">
        {notes.map((note, index) => {
          if (index % 2 !== 0) {
            return <Note key={note._id} note={note} />;
          }
        })}
      </div>
    </div>
  );
};
export default NotesList;
