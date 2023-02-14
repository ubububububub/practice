import { useEffect, useRef, useState } from "react";
import useEventList from "../hooks/useEventList";

export default function DragNDrop() {
  const [availableOptionsArr, setAvailableOptionsArr] = useState();
  const draggingIndex = useRef();
  const draggingOverIndex = useRef();
  const tempRef = useRef();

  const { data } = useEventList();

  useEffect(() => {
    setAvailableOptionsArr(data);
  }, [data]);

  if (!data || !availableOptionsArr) {
    return null;
  }

  const handleDragStart = ({ target }, index) => {
    draggingIndex.current = index;

    // target.classList.add('grabbing')
  };

  const handleDragEnter = ({ target }, index) => {
    draggingOverIndex.current = index;

    const copyListItems = [...JSON.parse(JSON.stringify(availableOptionsArr))];
    const dragItemContent = copyListItems[draggingIndex.current];

    copyListItems.splice(draggingIndex.current, 1);
    copyListItems.splice(draggingOverIndex.current, 0, dragItemContent);
    draggingIndex.current = draggingOverIndex.current;
    // draggingOverIndex.current = null;

    setAvailableOptionsArr(copyListItems);
  };

  const handleDragEnd = (e) => {
    // e.target.classList.remove("grabbing");
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    // e.target.style.cursor = "grabbing";
  };

  const mapedData = availableOptionsArr.map(({ id, title, body }, index) => (
    <div
      key={id}
      style={{
        border: "solid black 2px",
        marginBottom: "8px",
        cursor: "grab",
        // userSelect: "none",
      }}
      draggable
      ref={tempRef}
      onDragStart={(e) => handleDragStart(e, index)}
      onDragEnter={(e) => handleDragEnter(e, index)}
      onDragEnd={handleDragEnd}
      onDragOver={handleDragOver}
    >
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  ));

  return <div>{mapedData}</div>;
}
