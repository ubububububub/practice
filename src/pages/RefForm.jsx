import { useId, useRef, useState } from "react";

export default function RefForm() {
  const id = useId();
  const name = useRef("dd");
  const nameRef = useRef();
  const [isError, setIsError] = useState(false);
  const [isFlag, setFlag] = useState(new Date());

  const handleNameRefChange = () => {
    if (nameRef.current.value.length <= 6) {
      setIsError(false);
      return;
    } else {
      setIsError(true);
      return;
    }
  };

  const handleBtnClick = () => {
    if (
      nameRef.current.value.length > 6 ||
      nameRef.current.value.length === 0
    ) {
      setIsError(true);
      return;
    }

    name.current = nameRef.current.value;
    setFlag(new Date());
  };

  return (
    <div>
      <div>이름: {name.current}</div>
      <label htmlFor={`${id}-nameRef`}>이름</label>
      <input
        type="text"
        id={`${id}-nameRef`}
        ref={nameRef}
        defaultValue="흠흠"
        onChange={handleNameRefChange}
      />
      {isError && <div>이름은 최대 6글자 입니다.</div>}
      <button type="button" onClick={handleBtnClick}>
        버튼
      </button>
    </div>
  );
}
