import { useNavigate } from "react-router-dom";
import useEventList from "../hooks/useEventList";

export default function Home() {
  const { data } = useEventList();
  const navigate = useNavigate();

  if (!data) {
    return null;
  }

  const handleDataItemClick = (id) => {
    navigate(`/${id}`);
  };

  console.log(data);
  const mapedData = data.map(({ id, title, body }) => (
    <div
      key={id}
      style={{
        border: "solid black 2px",
        marginBottom: "8px",
      }}
      onClick={() => handleDataItemClick(id)}
    >
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  ));

  return <div>{mapedData}</div>;
}
