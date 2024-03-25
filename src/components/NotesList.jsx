import React, { useEffect, useRef } from "react";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
const NotesList = ({ notes, layout }) => {
  if (layout === "list") {
    return (
      <div className="grid gap-4 sm:w-[500px] md:w-[600px]">
        {notes.map((note) => {
          return (
            <Link
              className={` hover:bg-gray-50 py-2 px-4 rounded-md border-2 border-gray-300`}
              key={note._id}
              to={`${note._id}`}
            >
              <h1 className="font-bold mb-2">{note.title}</h1>
              <p className="max-w-16 sm:max-w-[400px]">
                {note.note.slice(0, 50)}
                {note.note.length > 40 && "..."}
              </p>
            </Link>
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
            return (
              <Link
                className={` hover:bg-gray-50 py-2 px-4 rounded-md border-2 border-gray-300`}
                key={note._id}
                to={`${note._id}`}
              >
                <h1 className="font-bold mb-2">{note.title}</h1>
                <p className="max-w-16">
                  {note.note.slice(0, 50)}
                  {note.note.length > 40 && "..."}
                </p>
              </Link>
            );
          }
        })}
      </div>
      <div className="grid gap-2">
        {notes.map((note, index) => {
          if (index % 2 !== 0) {
            return (
              <Link
                className={` hover:bg-gray-50 py-2 px-4 rounded-md border-2 border-gray-300`}
                key={note._id}
                to={`${note._id}`}
              >
                <h1 className="font-bold mb-2">{note.title}</h1>
                <p className="max-w-16">
                  {note.note.slice(0, 50)}
                  {note.note.length > 40 && "..."}
                </p>
              </Link>
            );
          }
        })}
      </div>
    </div>
    // <div className="max-h gap-4 pt-8 flex flex-col flex-wrap content-center">
    //   {notes.map((note, index) => {
    //     return (
    //       <Link
    //         className={`w-1/2 hover:bg-gray-50 py-2 px-4 rounded-md border-2 border-gray-300`}
    //         key={note._id}
    //         to={`${note._id}`}
    //       >
    //         <h1 className="font-bold mb-2">{note.title}</h1>
    //         <p className="max-w-16">
    //           {note.note.slice(0, 50)}
    //           {note.note.length > 40 && "..."}
    //         </p>
    //       </Link>
    //     );
    //   })}
    //   <div className="py-2 px-4 rounded-md border-dashed border-2 border-gray-300 grid place-items-center ">
    //     <Link to="newNote" className="p-2 rounded-[50%] bg-gray-300">
    //       <FaPlus />
    //     </Link>
    //   </div>
    // </div>
  );
};
export default NotesList;
