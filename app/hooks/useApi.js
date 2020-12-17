import { useState } from "react";
export default useApi = (apiFunc) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const request = async () => {
    setIsLoading(true);
    const response = await apiFunc();
    setIsLoading(false);

    if (!response.data) {
      setError(true);
      return;
    }
    setError(false);
    setData(response.data);
  };
  return { data, error, isLoading, request };
};
