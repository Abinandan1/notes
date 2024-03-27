const FormInput = ({
  validator,
  label,
  name,
  type,
  defaultValue,
  handleSearch,
  required,
}) => {
  return (
    <input
      onChange={handleSearch}
      className={`border-[1px] border-gray-300 ${
        validator && "mb-8"
      } tracking-wide rounded-md px-4 py-2 `}
      type={type}
      defaultValue={defaultValue}
      name={name}
      placeholder={label}
      required
    />
  );
};
export default FormInput;
