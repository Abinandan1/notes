const FormInput = ({ label, name, type, defaultValue }) => {
  return (
    <input
      className="border-[1px] border-gray-300 mb-8 tracking-wide rounded-md px-4 py-2 capitalize"
      type={type}
      defaultValue={defaultValue}
      name={name}
      placeholder={label}
    />
  );
};
export default FormInput;
