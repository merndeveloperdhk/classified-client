import PropTypes from "prop-types";
import { useNavigate, useSearchParams } from "react-router-dom";
import queryString from 'query-string';

const CategoryBox = ({ label, icon: Icon, selected }) => {
  // console.log(selected);
  // const { label, icon: Icon } = category;
  const[params] = useSearchParams();
  const navigate = useNavigate();
  const handleCategoryClick = () => {
    console.log("category clicked :", label);
    let currentQuery = {};
    if(params){
    currentQuery = queryString.parse(params.toString());
  }
    const updatedCategory = {...currentQuery, category:label};
    const url = queryString.stringifyUrl({
      url:'/',
      query:updatedCategory
    },
    {skipNull: true}
    )
    navigate(url)
  
}
  // console.log(param.get('category'));
  return (
    <div onClick={handleCategoryClick} className={`flex flex-row  items-center justify-center flex-wrap  gap-2 w-36 h-28 p-1 bg-slate-50 m-1 hover:scale-105 duration-500 hover:bg-slate-100  border-b-2 hover:text-neutral-800 border-transparent text-neutral-500 cursor-pointer group rounded text-lg ${selected ? 'border-b-neutral-800 text-neutral-800' : ''}`}>
      <Icon size={40} ></Icon>
      <h1 className="group-hover:text-[#5fb34f] duration-500 text-black font-semibold  text-xs text-center">{label}</h1>
    </div>
  );
};

export default CategoryBox;
CategoryBox.propTypes = {
  label: PropTypes.object,
  icon: PropTypes.object,
  selected: PropTypes.object
};
