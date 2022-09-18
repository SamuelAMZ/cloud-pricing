import axios from "axios";
import { useEffect, useState, useContext } from "react";
import IsLoadingContext from "../context/IsLoading";

const useGetData = (currentUrl) => {
  const { isLoading, changeLoading } = useContext(IsLoadingContext);
  const [currentData, setCurrentData] = useState(null);
  const [isError, setIsError] = useState(null);

  useEffect(() => {
    axios({
      method: "get",
      url: currentUrl,
      headers: {
        domain: "hello",
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9eyJpZCI6IjYzMWM5Nzk0OWRhZDViMmZkZjRkZGE5NyIsImlhdCI6MTY2MzIyOTE5OCwiZXhwIjoxNjk0NzY1MTk4fQgHtEdzvpRWNtH567vNDyb-ZdMDd1k4I5dE_CrbBfWSU",
      },
    })
      .then((res) => {
        setCurrentData(res.data);
        changeLoading(false);
        setIsError(null);
      })
      .catch((err) => {
        changeLoading(false);
        setIsError(err);
      });
  }, [currentUrl]);

  // console.log(currentData);
  return { currentData, isError, isLoading };
};

export default useGetData;
