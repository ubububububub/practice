import { useEffect, useLayoutEffect, useRef, useState } from "react";

export default function Test() {
  const [value, setValue] = useState(0);
  const btnRef = useRef();

  useLayoutEffect(() => {
    btnRef.current.style.display = "none";

    if (value === 0) {
      setValue(10 + Math.random() * 200);
    }
    console.log("layoutEffect", value);
  }, [value]);

  useEffect(() => {
    btnRef.current.style.display = "none";

    if (value === 0) {
      setValue(10 + Math.random() * 200);
    }
    console.log("effect", value);
  }, [value]);

  console.log("render", value);

  return (
    <button onClick={() => setValue(0)} ref={btnRef}>
      value: {value}
    </button>
  );
}
