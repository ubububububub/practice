import { usePost } from "./usePost";

export function usePostTitle() {
  const { data: postTitles, isLoading: isPostTitlesLoading } = usePost((data) =>
    data.map(({ title }) => ({ title }))
  );

  return { postTitles, isPostTitlesLoading };
}
