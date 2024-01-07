import React, { useState } from "react";
import { useGlobalContext } from "../Context/GlobalContext";

const useApi = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [response, setResponse] = useState({});

  const {
    setAlertMessage,
    setSeverity,
    setOpenCustomSnackBar,
    setAnchorOrigin,
    setAutoHideDuration,
  } = useGlobalContext();

  const Fetch = async (apiEndpoint: any, apiMethod: any) => {
    const response = await fetch(apiEndpoint, {
      method: apiMethod,
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.json();
  };
  const Post = async (values: any, apiEndpoint: any, apiMethod: any) => {
    const response = await fetch(apiEndpoint, {
      method: apiMethod,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    return response.json();
  };
  const apiCall = async (
    values: any = null,
    apiEndpoint: any,
    apiMethod: string,
  ) => {
    setIsLoading(true);
    try {
      let res: any;
      if (values) {
        await Post(values, apiEndpoint, apiMethod).then((data) => {
          res = data;
        });
      } else {
        await Fetch(apiEndpoint, apiMethod).then((data) => {
          res = data;
        });
      }

      if (res.status === 400) {
        setSeverity("error");
        setAlertMessage(res.message);
        setOpenCustomSnackBar(true);
        setAutoHideDuration(2000);
        setAnchorOrigin({ vertical: "top", horizontal: "center" });
        setIsLoading(false);
        setIsError(true);
        return res;
      }
      if (res.status === 200) {
        setSeverity("success");
        setAlertMessage(res.message);
        setOpenCustomSnackBar(true);
        setAutoHideDuration(2000);
        setAnchorOrigin({ vertical: "top", horizontal: "center" });
        setIsLoading(false);
        setResponse(res);
        return res;
      }
    } catch (error: any) {
      setSeverity("error");
      setAlertMessage(error);
      setOpenCustomSnackBar(true);
      setAutoHideDuration(2000);
      setAnchorOrigin({ vertical: "top", horizontal: "center" });
      setIsLoading(false);
      setIsError(true);
      return error;
    }
  };

  const resetValues = () => {
    setIsLoading(false);
    setIsError(false);
    setResponse([]);
  };

  return {
    isLoading,
    isError,
    response,
    apiCall,
    resetValues,
  };
};

export default useApi;
