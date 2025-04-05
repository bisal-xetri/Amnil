import ImagePreview from "./ImagePreview";
import ImageUpload from "./ImageUpload";
import { useState } from "react";
import { enhancedImageAPI } from "../utils/enhancedImageApi";

function Home() {
  const [uploadImage, setUploadImage] = useState(null);
  const [enhancedImage, setEnhancedImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const uploadImageHandler = async (file) => {
    setUploadImage(URL.createObjectURL(file));
    // console.log(URL.createObjectURL(file));
    setLoading(true);
    try {
      //calling Api to enhance Image
      const enhancedURL = await enhancedImageAPI(file);
      setEnhancedImage(enhancedURL);
      setLoading(false);
    } catch (error) {
      console.log(error);
      alert("Error while enhancing the image. Please try Again later.");
    }
  };
  return (
    <>
      <ImageUpload uploadImageHandler={uploadImageHandler} />
      <ImagePreview
        loading={loading}
        upload={uploadImage}
        enhanced={enhancedImage?.image}
      />
    </>
  );
}

export default Home;
