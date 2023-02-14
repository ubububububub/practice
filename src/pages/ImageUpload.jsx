import { useState } from "react";
import { useRef } from "react";

export default function ImageUpload() {
  const [imagesFiles, setImageFils] = useState([]);
  const [imageFormData, setImageFormData] = useState();
  const imageUploadRef = useRef();

  const handleImageUploadBtnClick = () => {
    imageUploadRef.current.click();
  };

  const handleImageUploadBtnChange = ({ target }) => {
    const fileList = [...target.files];

    if (!fileList.length) {
      return;
    }

    const formData = new FormData();
    fileList.forEach((file, index) => formData.apeend(`image_${index}`, file));
    setImageFormData(formData);

    const imageList = fileList.map((file) => {
      const url = URL.createObjectURL(file);
      const [type] = file.type.split("/");

      return {
        file,
        thumbnail: url,
        type,
      };
    });

    setImageFils(imageList);
  };

  const mapedImagesFiles = imagesFiles.map((image, index) => (
    <img
      key={index}
      src={image.thumbnail}
      alt={image.type}
      width="400"
      height="400"
    ></img>
  ));

  return (
    <>
      <div>
        <input
          type="file"
          id="imageUpload"
          accept="image/*"
          ref={imageUploadRef}
          multiple
          style={{ display: "none" }}
          onChange={handleImageUploadBtnChange}
        />
        <button type="button" onClick={handleImageUploadBtnClick}>
          엑셀 다운로드
        </button>
      </div>
      <div>{mapedImagesFiles}</div>
    </>
  );
}
