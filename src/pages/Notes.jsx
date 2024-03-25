import { NotesList } from "../components";
import { TbLayoutList, TbLayoutGrid } from "react-icons/tb";
import { useLoaderData } from "react-router-dom";
import { customFetch } from "../utils";
import { FormInput } from "../components";
import { useState } from "react";

export const loader = (store) => async () => {
  const { token } = store.getState().userState.user;
  try {
    const notes = await customFetch("/notes", {
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
const Notes = () => {
  const [layout, setLayout] = useState("grid");
  const [layoutInfo, setLayoutInfo] = useState(false);
  const { notes } = useLoaderData();
  return (
    <section>
      <div className="flex items-center justify-center gap-4 mb-8">
        {/* SEARCH NOTES FORM */}
        <FormInput label="search your notes" />
        {/* LIST/GRID */}
        <div className="flex gap-2 relative items-center">
          <button
            onClick={() => setLayout(layout === "grid" ? "list" : "grid")}
            className="text-2xl hover:bg-gray-300 hover:rounded-[50%] p-2"
            onMouseOver={() => setLayoutInfo(true)}
            onMouseLeave={() => setLayoutInfo(false)}
          >
            {layout === "grid" ? <TbLayoutList /> : <TbLayoutGrid />}
          </button>
          {layoutInfo && (
            <div className="text-xs absolute -right-10 bg-yellow-100 py-0.5 px-2 capitalize">
              {layout === "grid" ? "list" : "grid"}
            </div>
          )}
        </div>
      </div>
      {/* NOTES LIST */}
      <NotesList notes={notes} layout={layout} />
    </section>
  );
};
export default Notes;
