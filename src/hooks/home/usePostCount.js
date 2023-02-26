import { usePost } from "./usePost";

export function usePostCount() {
  const { data: postCount, isLoading: isPostCountLoading } = usePost(
    (data) => data.length
  );

  return { postCount, isPostCountLoading };
}
