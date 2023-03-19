import { useState, useEffect } from "react";
import { wrapPromise } from "../../api/apiClient";

const initOptions = {
  onSuccess: (data) => {},
  onError: (error) => {},
};

export default function useFetchSus(keys, fetcher, options) {
  const [data, setData] = useState(null);
  const [refetcher, setRefetcher] = useState();

  const newOptions = { ...initOptions, ...options };
  const { onSuccess, onError } = newOptions;

  const refetch = () => {
    setRefetcher(new Date());
  };

  const fetchData = async () => {
    try {
      const response = await fetcher();
      onSuccess(response);

      return response;
    } catch (error) {
      onError(error);
    }
  };

  useEffect(() => {
    const response = wrapPromise(fetchData());
    setData(response);
  }, [...keys, refetcher]);

  return { data: data.read(), refetch };
}
