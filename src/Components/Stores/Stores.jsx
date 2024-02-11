import axios from "axios";
import { useEffect, useState } from "react";

const img_hosting_api = import.meta.env.VITE_IMG_HOSTING_KEY;
const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_api}`;

const Stores = () => {
  const [data, setData] = useState([]);
  /* useEffect(() => {
    fetch('http://localhost:5000/rooms')
    .then(res => res.json())
    .then(data => {
        setData(data)
        console.log("data from fetch", data);
    })
},[]) */
  // axios
  /* axios({
    method:'get',
    url:'http://localhost:5000/rooms'
}).then(res => {
    setData(res.data)
    console.log("from axios",res.data)
}) */
  useEffect(() => {
    axios
      .get("/rooms")
      .then((res) => {
        const rooms = res.data
        setData(rooms);
        console.log("from axios",rooms);
        
      })
      .catch((error) => console.log(error.message));
  }, []);

  // image upload
  const handleUpload = (event) => {
    event.preventDefault();
    const image = event.target.image.files[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${
      import.meta.env.VITE_IMG_HOSTING_KEY
    }`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        console.log(imageData.data.display_url);
        setData(imageData.data.display_url)
      })
      .catch((error) => {
        console.log(error.message);
      });

    console.log(image, formData);
  };

  const handleImageUploadToImgbb = async (event) => {
    event.preventDefault();
    const photo = event.target.files[0];
    console.log(photo);
    //image upload to imgbb and send data to url
    const imageFile = { image: data.photo };
    const res = await axios.post(img_hosting_url, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    console.log(res.data);
  };

 
 

  return (
    <div className="  w-full mx-auto mt-12 p-2">
      <div className="flex gap-2">
        <div className="border border-black ">
          <form onSubmit={handleUpload} className="p-4">
            <input type="file" name="image" id="image" accept="image/*" />{" "}
            <br /> <br />
            <input
              type="submit"
              value="Submit"
              className="bg-green-500 px-3 py-1 "
            />
          </form>
        </div>
        <div className="border border-black p-3">
          <h1>Second way to upload</h1>
          <form onSubmit={handleImageUploadToImgbb} className="p-4">
            <input type="file" name="image" id="photo" accept="image/*" />{" "}
            <br /> <br />
            <input
              type="submit"
              value="Submit"
              className="bg-green-500 px-3 py-1 "
            />
          </form>
        </div>
      </div>
{/* 
      <div>
        Data length from axios: {data.length}
        <div className="grid grid-cols-4 gap-2 m-2 ">
          {data.map((item) => (
            <div className="bg-yellow-100 p-2" key={item._id}>
              <h1>{item.title}</h1>
              <h1>{item.location}</h1>
            </div>
          ))}
        </div>
        
      </div> */}
    </div>
  );
};

export default Stores;
