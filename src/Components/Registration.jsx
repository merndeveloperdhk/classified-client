import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "./Provider/AuthProvider";
import toast from "react-hot-toast";
import SocialLogin from "./Shared/SocialLogin";
import { TbFidgetSpinner } from "react-icons/tb";

const Registration = () => {
  const [displayName, setDisplayName] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(" ");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const { loading, createUser, setLoading, updateUserProfile } =
    useContext(AuthContext);

  const handleRegister = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirm_password = event.target.confirm_password.value;
    const terms = event.target.terms.checked;
    // image upload
    const image = event.target.image.files[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${
      import.meta.env.VITE_IMG_HOSTING_KEY
    }`
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((ImageData) => {
        // console.log(ImageData.data.display_url);
        const imageUrl = ImageData.data.display_url;

        //Create user
        createUser(email, password)
        .then((result) => {
          toast.success(result.user)
          updateUserProfile(name, imageUrl)
            .then(() => {
              // console.log(result.user);
              toast.success('update success')
              navigate(from, { replace: true });
              
            })

            //Send email verification
            /*  sendVerificationEmail()
        .then(() => {
          toast.success("email verification link has been sent");
          return;
        })  */
            .catch((error) => {
              setLoading(false);
              toast.error(error.message);
              console.log(error.message);
              setError(error.message);
            });
        })
        .catch((error) => {
          setLoading(false);
          toast.error(error.message);
          console.log(error.message);
          setError(error.message);
        });
      });

    /*    const regDetails = {
      email,
      password,
      confirm_password,
      name,
      image,
      terms,
    };
    console.log(regDetails); */

    setError("");
    setSuccess("");

    if (password.length < 6) {
      setError("Minimum 6 characters need");
      toast.error("Minimum 6 characters need");
      return;
    } else if (password !== confirm_password) {
      setError("Password did not matched");
      return;
    } else if (!terms) {
      setError("Please accept terms and conditions");
      return;
    } else {
      toast.success("Registration successfull");
    }

    setError("");
    setDisplayName("");
    setSuccess(" ");
  };

  return (
    <div className="  ">
      <div className="w-full max-w-md p-8 space-y-2 rounded-xl bg-sky-100  mx-auto my-1 ">
        <p className="text-center text-red-600 mt-3">{error ? error : ""}</p>
        <p className="text-center text-green-600 mt-2">
          {displayName ? displayName : " "}
        </p>
        <p className="text-center text-green-600 mt-3">
          {success ? success : " "}
        </p>
        <h1 className="text-2xl font-bold text-center">Register Now</h1>
        <h1 className="text-sm font-semibold text-center">Welcome to site</h1>
        <form onSubmit={handleRegister} className="space-y-3">
          <div className="space-y-1 text-sm">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your Name"
              className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
            />
          </div>
          <div className="space-y-1 text-sm">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your Email"
              required
              className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
            />
          </div>
          <div className="text-sm">
            {/*  <label name="pictureLabel" className="block dark:text-gray-400">
              Select Image
            </label> */}
            <input
              type="file"
              name="image"
              id="image"
              accept="image/*"
              className="w-full  py-1 rounded-md border-red-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
            />
          </div>

          <div className="space-y-1 text-sm relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              placeholder="Password"
              required
              className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute bottom-[15px] right-4"
            >
              {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
            </span>
            {/*  <div className="flex justify-between text-xs dark:text-gray-400">
              <div className="flex gap-1 items-center">
                <input type="checkbox" name="terms" id="terms" />
              <a rel="noopener noreferrer" href="#">
               Accept terms and conditions
              </a>
              </div>
              
            </div> */}
          </div>
          <div className="space-y-1 text-sm relative">
            <input
              type={showPassword ? "text" : "password"}
              name="confirm_password"
              id="confirm_password"
              placeholder="confirm_password"
              required
              className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-[10px] right-4"
            >
              {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
            </span>
            <div className="flex justify-between text-xs dark:text-gray-400">
              <div className="flex gap-1 items-center mt-2">
                <input type="checkbox" name="terms" id="terms" />
                <a rel="noopener noreferrer" href="#">
                  Accept terms and conditions
                </a>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="block w-full p-3 text-center rounded-sm bg-sky-500 text-white font-bold"
          >
            {loading ? (
              <span className="flex justify-center gap-2  mx-auto">
                Sign Up <TbFidgetSpinner className=" animate-spin" size={24} />
              </span>
            ) : (
              "Sign Up"
            )}
          </button>
        </form>
        <div className="divider pt-2">OR</div>
        {/* Social login */}
        <SocialLogin></SocialLogin>
        <p className="text-xs text-center sm:px-6 dark:text-gray-400">
          Already have an account?
          <Link to="/login" className="underline dark:text-gray-100">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Registration;
