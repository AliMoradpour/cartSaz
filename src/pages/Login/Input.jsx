import { useUserInfo, useUserInfoActions } from "../../Context/UserContext";

const Input = ({ name, formik, type = "text" , placeholder }) => {
 const useInfo = useUserInfo()
 const setUseInfo = useUserInfoActions()

  const onChange = ({target}) =>{
    setUseInfo({...useInfo , [target.name] : target.value})
  }

  return (
    <div className="flex flex-col max-w-[300px] w-full">
      <input
        type={type}
        {...formik.getFieldProps(name)}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        className="rounded-lg px-2 font-light text-Caption-md placeholder:text-left mt-1 focus:outline-none text-left"
      />
      {formik.errors[name] && formik.touched[name] && (
        <span className="text-Caption-md font-bold text-red-500">{formik.errors[name]}</span>
      )}
    </div>
  );
};

export default Input;
