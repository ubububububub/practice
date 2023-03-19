import { apiClient } from "../api/apiClient";
import useFetchSus from "../hooks/common/useFetchSus";

export default function SubHome() {
  const { data } = useFetchSus([], async () => {
    const { data } = await apiClient({
      url: "/posts",
      method: "get",
    });

    return data;
  });

  const mapedData = data?.map((post) => {
    return (
      <div key={post.id}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>
    );
  });

  return <div>{mapedData}</div>;
}
