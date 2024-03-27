import { useState } from "react";
import {
  MdArchive,
  MdDelete,
  MdRemoveRedEye,
  MdUnarchive,
} from "react-icons/md";
import { Link } from "react-router-dom";
import Modal from "./Modal";
import { useDispatch } from "react-redux";
import { openModal } from "../features/modal/modalSlice";

const Note = ({ note, layout }) => {
  const [gridBtns, setGridBtns] = useState(false);
  const handleGridHover = () => {
    setGridBtns(!gridBtns);
  };
  const dispatch = useDispatch();
  const url = new URL(window.location.href);
  const unarchive = url.search === "?archive=true";
  return (
    <section
      className={`py-2 px-4 rounded-md border-2 border-gray-300 relative`}
      key={note._id}
      onMouseEnter={handleGridHover}
      onMouseLeave={handleGridHover}
    >
      {gridBtns && (
        <div className="flex justify-center items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-100 w-[100%] h-[100%]">
          <Link
            to={`${note._id}`}
            className="text-lg hover:bg-gray-300 p-2 rounded-[50%]"
          >
            <MdRemoveRedEye />
          </Link>
          <button
            className="text-lg hover:bg-gray-300 p-2 rounded-[50%]"
            onClick={() =>
              dispatch(
                openModal({
                  id: note._id,
                  method: "delete",
                  message: "Are you sure to delete this note?",
                })
              )
            }
          >
            <MdDelete />
          </button>
          <button
            onClick={() =>
              dispatch(
                openModal({
                  id: note._id,
                  method: "patch",
                  message: unarchive
                    ? "Are you sure to unarchive this note?"
                    : "Are you sure to archive this note?",
                })
              )
            }
            className="text-lg hover:bg-gray-300 p-2 rounded-[50%]"
          >
            {unarchive ? <MdUnarchive /> : <MdArchive />}
          </button>
        </div>
      )}
      <h1 className="font-bold mb-2">{note.title}</h1>
      <p className={`max-w-16 ${layout === "list" && "sm:max-w-[400px]"}`}>
        {note.note.slice(0, 50)}
        {note.note.length > 40 && "..."}
      </p>
    </section>
  );
};
export default Note;
