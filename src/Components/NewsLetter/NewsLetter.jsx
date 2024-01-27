import { AiOutlineMail } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";

const NewsLetter = () => {
  return (
    <div className="flex flex-col justify-center md:flex-row gap-3 md:justify-between bg-[#336699] px-2 py-6 md:w-full">
      <div className="flex gap-2 items-center text-white md:w-1/2">
        <AiOutlineMail className="text-5xl"></AiOutlineMail>
        <div>
          <h1 className="text-xl font-semibold">Subscribe to our newsletter</h1>
          <h1 className="texl-lg">getmailksjf sldfskfjsd l; dfssdf</h1>
        </div>
      </div>

      <div className="join md:w-1/2">
        <input
          className="input input-bordered join-item w-full md:max-w-[450px]"
          placeholder="Email"
        />
        <button className="btn join-item rounded-r-md bg-black text-white border-none md:px-6">
          Subscribe <BsArrowRight className="text-2xl ml-2"></BsArrowRight>
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
