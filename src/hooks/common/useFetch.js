import { useState, useEffect } from "react";
import { apiClient, wrapPromise } from "../../api/apiClient";

export function useFetch(keys, fetcher, options) {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    isSuccess: false,
    isError: false,
    error: null,
  });
  const {
    onSuccess = () => {},
    onError = () => {},
    select = () => {},
    // isEnabled = true,
  } = options;

  const setupSelect = () => {
    if (!select) {
      return;
    }

    return apiClient.interceptors.response.use((response) => ({
      ...response,
      data: select(response.data),
    }));
  };

  const removeSelect = (interceptor) => {
    apiClient.interceptors.response.eject(interceptor);
  };

  const fetchData = async () => {
    // if (!isEnabled) {
    //   setState((prev) => ({ ...prev, isLoading: false }));
    //   return;
    // }

    try {
      setState((prev) => ({ ...prev, isLoading: true }));

      const response = await fetcher();

      if (response.status === 200) {
        setState((prev) => ({ ...prev, data: response.data, isSuccess: true }));
        onSuccess(response);
      }
    } catch (error) {
      setState((prev) => ({ ...prev, isError: true, error }));
      onError(error);
    } finally {
      setState((prev) => ({ ...prev, isLoading: false }));
    }
  };
  useEffect(() => {
    const interceptor = setupSelect();
    fetchData();
    removeSelect(interceptor);
  }, [...keys]);

  return { ...state };
}
