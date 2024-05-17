import axios from "axios";

// Setting a base URL for all requests
axios.defaults.baseURL = "https://cms.activepix.com/api";

// Setting headers common to all requests
axios.defaults.headers.common["Authorization"] =
  "Bearer " + localStorage.getItem("axios_token");
axios.defaults.headers.post["Content-Type"] = "application/json";

interface requestProps {
  method: string;
  url: string;
  data?: object;
}

export default async ({ method, url, data }: requestProps) => {
  const res = await axios({
    method: method,
    url: url,
    data,
  });

  return res;
};
