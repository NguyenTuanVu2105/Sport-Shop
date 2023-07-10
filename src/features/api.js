export const url = "https://sportshop-acab668bf3c8.herokuapp.com/api";

export const setHeaders = () => {
    const headers = {
      headers: {
        "x-auth-token": localStorage.getItem("token"),
      },
    };
  
    return headers;
  };
