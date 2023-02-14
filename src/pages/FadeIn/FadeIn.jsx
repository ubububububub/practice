import { useState } from "react";
import "./FadeIn.css";

export default function FadeIn() {
  const [flag, setFlag] = useState(false);

  const handleBtnClick = () => {
    setFlag((prev) => !prev);
  };

  const handleRemoveBtnClick = () => {
    setFlag((prev) => !prev);
  };

  return (
    <div>
      <div className={`backdrop ${flag ? "fade-in" : "fade-out"}`}>
        <div className="modal">FadeIn</div>
        <button type="button" onClick={handleRemoveBtnClick}>
          버튼
        </button>
      </div>
      <button type="button" onClick={handleBtnClick}>
        버튼
      </button>
    </div>
  );
}
