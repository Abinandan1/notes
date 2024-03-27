import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../features/modal/modalSlice";
import { Form, useNavigate } from "react-router-dom";
import Button from "./Button";

const Modal = () => {
  const dispatch = useDispatch();
  const { method, message } = useSelector((state) => state.modalState);
  return (
    <Form
      method={method}
      className="fixed top-0 left-0 w-screen h-screen z-10 bg-[rgba(0,0,0,0.5)] grid justify-items-center content-center"
    >
      <div className="bg-white rounded-md px-8 py-4 grid gap-8">
        <p>{message}</p>
        <div className="grid grid-cols-2 gap-8">
          <Button text="yes" type="submit" />
          <button
            onClick={() => dispatch(closeModal())}
            className="px-4 py-2 uppercase tracking-[2px] rounded-lg bg-yellow-900 text-white transition-all duration-300 hover:bg-yellow-700 "
          >
            no
          </button>
        </div>
      </div>
    </Form>
  );
};
export default Modal;
