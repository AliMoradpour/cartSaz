import { useUserInfo, useUserInfoActions } from "../../Context/UserContext";

const Input = ({ label, name, formik, type = "text", placeholder }) => {
  const useInfo = useUserInfo();
  const setUseInfo = useUserInfoActions();

  const onChange = ({ target }) => {
    setUseInfo({ ...useInfo, [target.name]: target.value });
    localStorage.setItem("useInfo" , JSON.stringify(useInfo))
  };

  return (
    <div className="my-5 flex flex-col max-w-[300px] w-full">
      <label htmlFor={name} className="text-Body-SM font-bold">
        {label}
      </label>
      <input
        type={type}
        {...formik.getFieldProps(name)}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        className="border-2 border-[#CBCBCB] focus:outline-primary focus:shadow focus:shadow-blue-200 rounded-lg px-2 py-1 font-light text-Caption-md"
      />
      {formik.errors[name] && formik.touched[name] && (
        <span className="text-Caption-md font-bold text-red-500">
          {formik.errors[name]}
        </span>
      )}
    </div>
  );
};

export default Input;
