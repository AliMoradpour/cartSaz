import { useUserInfo, useUserInfoActions } from "../../../Context/UserContext";


const SelectComponent = ({ name, formik }) => {
  const userInfo = useUserInfo();
  const setUserInfo = useUserInfoActions();

  const selectOptions = [
    { label: "انتخاب شود", value: "" },
    { label: "پوشاک", value: "clothing" },
    { label: "خوراکی", value: "food" },
    { label: "لوازم خانگی", value: "homeAppliances" },
    { label: "لوازم یدکی", value: "spareParts" },
    { label: "تکنولوژی", value: "technology" },
  ];

  const onChange = ({ target }) => {
    setUserInfo({ ...userInfo, [target.name]: target.value });
    localStorage.setItem("userInfo" , JSON.stringify(userInfo))
  };

  return (
    <div className="my-5 flex flex-col max-w-[300px] w-full">
      <select
        value={selectOptions.value}
        onChange={onChange}
        name={name}
        {...formik.getFieldProps(name)}
        className="border-2 border-[#CBCBCB] focus:outline-primary focus:shadow focus:shadow-blue-200 rounded-lg px-2 py-1 font-light text-Caption-md">
        {selectOptions.map((item) => (
          <option key={item.value} value={item.label}>
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
