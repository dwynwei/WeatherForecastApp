import axios from "axios";

class HttpHelper {
  constructor(baseURL = null) {
    const headers = {
      "Content-Type": "application/json",
    };

    if (baseURL) {
      this.api = axios.create({ baseURL, headers });
    } else {
      this.api = axios.create({ headers });
    }
  }

  get(url, params, config) {
    return this.api.get(url, { params, ...config });
  }

  post(url, data, config) {
    return this.api.post(url, data, config);
  }

  put(url, data, config) {
    return this.api.put(url, data, config);
  }

  delete(url, config) {
    return this.api.delete(url, config);
  }
}

export const httpHelper = new HttpHelper();

export const createHttpHelperWithBaseURL = (baseURL) => new HttpHelper(baseURL);
