import { useUserInfo, useUserInfoActions } from "../../Context/UserContext";

const SelectComponent = ({ selectOptions, name, formik }) => {
  const useInfo = useUserInfo();
  const setUseInfo = useUserInfoActions();

  const onChange = ({ target }) => {
    setUseInfo({ ...useInfo, [target.name]: target.value });
  };

  return (
    <div className="my-5 flex flex-col max-w-[300px] w-full" {...formik.ge}>
      <select
        onChange={onChange}
        name={name}
        {...formik.getFieldProps(name)}
        className="border-2 border-[#CBCBCB] focus:outline-primary focus:shadow focus:shadow-blue-200 rounded-lg px-2 py-1 font-light text-Caption-md">
        {selectOptions.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
      {formik.errors[name] && formik.touched[name] && (
        <span className="text-Caption-md font-bold text-red-500">
          {formik.errors[name]}
        </span>
      )}
    </div>
  );
};

export default SelectComponent;
