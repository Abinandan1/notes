import { Link, useNavigation } from "react-router-dom";

const Button = ({ text, type }) => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <button
      type={type}
      disabled={isSubmitting}
      className="px-4 py-2 uppercase tracking-[2px] rounded-lg bg-yellow-900 text-white transition-all duration-300 hover:bg-yellow-700 mb-8"
    >
      {isSubmitting ? "Submitting..." : text}
    </button>
  );
};
export default Button;
