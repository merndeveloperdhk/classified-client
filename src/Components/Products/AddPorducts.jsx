import { Helmet } from "react-helmet";
import { categories } from "./../Categories/categoriesData";
import { divisions } from "./../Categories/divisionData";
import { districts } from "../Categories/districtsData";
import { upazilas } from "../Categories/upazilaData";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { TbFidgetSpinner } from "react-icons/tb";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { ImageUpload } from "../../api/uploadImage";
import { productsUpload } from "../../api/product";
/*  const img_hosting_api = import.meta.env.VITE_IMG_HOSTING_KEY;
const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_api}`;  */

const AddPorducts = () => {
  const {user, loading,  setLoading } = useContext(AuthContext);
  const [uploadButtonText, setUploadButtonText] = useState('Upload Image')
  const [params, setParams] = useSearchParams();
  const category = params.get("category");
  const division = params.get("division");
  const district = params.get("district");
  const upazila = params.get("upazila");
  console.log(category);

  const handleImageChange = image => {
    setUploadButtonText(image.name)
  }

  const handleAddProduct = async (event) => {
    event.preventDefault();
    setLoading(true);
    const form = event.target;
    const title = form.title.value;
    const price = form.price.value;
    const date = form.date.value;
    const details = form.details.value;
    const category = form.category.value;
    const district = form.district.value;
    const location = form.location.value;
    const upazila = form.upazila.value;
    const description = form.description.value;
    const number = form.number.value;
    const fullAddress = form.fullAddress.value;
    const division = form.division.value;
    const image = form.image.files[0];
    // img upload to imgbb and get url
    ImageUpload(image)
    .then(data => {
      const uploadData = {
         title, price: parseFloat(price), date,location, details, category, district, upazila, description, number, fullAddress, division,
         image: data.data.display_url,
          host:{
          name: user?.displayName,
          image: user?.photoURL,
          email: user?.email
         }
      }
      // Post room data to server
      productsUpload(uploadData).then(data => {
        console.log("Upload data", data);
        if(data.acknowledged === true){
          toast.success("products upload successfully complete")
        }
      })
      .catch(error => {
        console.log(error);
      })      
      setLoading(false)
    })
    
  };
  return (
    <div className="w-full mx-auto text-center mt-2 p-2">
      <Helmet>
        <title>Add Products | future ecommerce website</title>
      </Helmet>
      <h1 className="text-2xl font-bold mb-2 text-green-500">
        Add Your Product
      </h1>
      <hr className="w-1/3 mx-auto border-1 border-green-600 mb-4" />

      <form
        onSubmit={handleAddProduct}
        className="w-full md:w-2/3 mx-auto border border-slate-200 rounded-lg p-6"
      >
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="title"
              id="title"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="title"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              {" "}
              Title
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="price"
              id="price"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              // required
            />
            <label
              htmlFor="price"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Price
            </label>
          </div>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="location"
              id="location"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="location"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              {" "}
              Location
            </label>
          </div>
          
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="date"
              name="date"
              id="date"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              // required
            />
            <label
              htmlFor="from_date"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              date
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="details"
              id="details"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              // required
            />
            <label
              htmlFor="details"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Details
            </label>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="number"
              id="number"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="number"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Mobile Number{" "}
            </label>
          </div>
          {/* file */}
          <div className="relative z-0 w-full mb-5 group">
            <div className="flex items-center justify-center w-full">
              <label className="">
                <input
                onChange={event => handleImageChange(event.target.files[0])}
                  className="text-sm cursor-pointer w-36 hidden"
                  type="file"
                  name="image"
                  id="image"
                  accept="image/*"
                  hidden
                />
                <div className="bg-green-500 text-white border border-gray-300 rounded font-semibold cursor-pointer py-1 px-2 text-base hover:bg-green-600 duration-500 w-28 overflow-hidden">
                  
                  {uploadButtonText}
                </div>
              </label>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 md:gap-6 items-center">
          {/* Division */}
          <div className="relative z-0 w-full mb-5 group">
            <label
              htmlFor="division"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Select Division
            </label>
            <select
              id="division"
              name="division"
              defaultValue="default"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              {divisions.map((division, idx) => (
                <option key={idx} value={division.division}>
                  {division.division}
                </option>
              ))}
            </select>
          </div>
          {/* District */}
          <div className="relative z-0 w-full mb-5 group">
            <label
              htmlFor="district"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Select District
            </label>
            <select
              id="district"
              name="district"
              defaultValue="default"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              {districts.map((district, idx) => (
                <option key={idx} value={district.name}>
                  {district.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        {/* District and upazila */}
        <div className="grid md:grid-cols-2 md:gap-6 items-center">
          {/* Upazila */}
          <div className="relative z-0 w-full mb-5 group">
            <label
              htmlFor="upazila"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Select Upazila
            </label>
            <select
              id="upazila"
              name="upazila"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              {upazilas.map((upazila, idx) => (
                <option key={idx} value={upazila.name}>
                  {upazila.name}
                </option>
              ))}
            </select>
          </div>
          {/* Category */}
          <div className="relative z-0 w-full mb-5 group ">
            <label
              htmlFor="category"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white "
            >
              Select Category
            </label>
            <select
              id="category"
              name="category"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              {categories.map((category, idx) => (
                <option key={idx} value={category.label}>
                  {category.label}
                </option>
              ))}
            </select>
          </div>
        </div>
        {/* District and upazila end */}
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="fullAddress"
            id="fullAddress"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder="Exp: Vill, Union, Word no, house no "
            // required
          />
          <label
            htmlFor="fullAddress"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Full address
          </label>
        </div>
        <div className="relative z-0 grid md:grid-cols-1 w-full mb-5 ">
          <label htmlFor="description" className="text-start mb-2">
            Description{" "}
          </label>

          <textarea
            id="description"
            name="description"
            className="w-full border h-28  py-1 px-0 text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          ></textarea>
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
           {loading ? (
              <span className="flex justify-center gap-2  mx-auto">
                Upload <TbFidgetSpinner className=" animate-spin" size={24} />
              </span>
            ) : (
              "Sign Up"
            )}
        </button>
      </form>
    </div>
  );
};

export default AddPorducts;
