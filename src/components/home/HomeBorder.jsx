import { forwardRef, useImperativeHandle, useRef } from "react";
import { usePost } from "../../hooks/home/usePost";
import CustomSpinner from "../common/CustomSpinner";

export const HomeBorder = forwardRef((props, ref) => {
  const { data: posts, isLoading: isPostsLoading } = usePost();
  const inputRef = useRef();

  useImperativeHandle(
    ref,
    () => ({
      customFocus: () => {
        inputRef.current.focus();
      },
      customBlur: () => {
        inputRef.current.blur();
      },
    }),
    []
  );

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
      <div>
        <input type="text" ref={inputRef} />
      </div>
      {mapedPosts}
      {/* <button type="button" onClick={() => setIsEnabled((prev) => !prev)}>
        버튼
      </button> */}
    </>
  );
});
