import { usePost } from "../../hooks/home/usePost";
import CustomSpinner from "../common/CustomSpinner";

export default function HomeBorder() {
  const { data: posts, isLoading: isPostsLoading } = usePost();

  if (isPostsLoading) {
    return <CustomSpinner />;
  }

  const mapedPosts = posts.map((post) => {
    return (
      <div key={post.id}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>
    );
  });

  return (
    <>
      {mapedPosts}
      {/* <button type="button" onClick={() => setIsEnabled((prev) => !prev)}>
        버튼
      </button> */}
    </>
  );
}
