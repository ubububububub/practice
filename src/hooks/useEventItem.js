import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function useEventItem(reset, id) {
  useQuery({
    queryKey: ["eventItem", id],
    queryFn: async () => {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );

      return data;
    },
    onSuccess: (data) => {
      reset(data);
    },
    enabled: !!id,
  });
}
