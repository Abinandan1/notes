import { Form, redirect, useLoaderData } from "react-router-dom";
import { customFetch } from "../utils";
import { Button } from "../components";
import { toast } from "react-toastify";

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
  async ({ request, params }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    const { token } = store.getState().userState.user;
    if (data.title.trim().length === 0 && data.note.trim().length === 0) {
      const discard = window.confirm(
        "Empty note will be discarded. Do you wish to continue?"
      );
      if (discard) {
        if (params.id === "newNote") {
          toast.success("Empty note discarded.");
          return redirect("../notes");
        }
        const note = await customFetch.delete(`/notes/${params.id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        toast.success("Empty note discarded.");
        return redirect("../notes");
      }
      return null;
    }
    try {
      if (params.id === "newNote") {
        const note = await customFetch.post(`/notes`, data, {
          headers: { Authorization: `Bearer ${token}` },
        });
      } else {
        const note = await customFetch.patch(`/notes/${params.id}`, data, {
          headers: { Authorization: `Bearer ${token}` },
        });
      }
      toast.success("Note saved successfully");
      return note;
    } catch (error) {}
    return null;
  };
const SingleNote = () => {
  const { note } = useLoaderData();
  const { title, note: text, updatedAt, isNew } = note;
  const today = new Date().setHours(0, 0, 0, 0);
  const updatedDay = new Date(updatedAt);
  const editedMargin = new Date(updatedAt).getTime() > today;
  const editedAt = editedMargin
    ? updatedDay.getHours() + ":" + updatedDay.getMinutes()
    : updatedDay.toDateString();

  return (
    <Form method="post" className="grid gap-2 justify-items-center ">
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
      <Button className="" type="submit" text="save" />
    </Form>
  );
};
export default SingleNote;
