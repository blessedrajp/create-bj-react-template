  import axios, { AxiosRequestConfig, AxiosError, AxiosResponse } from "axios";

  // Load environment variable
  const serverUrl = process.env.REACT_APP_API_BASE_URL || "";

  // Create an Axios instance
  const api = axios.create({
    baseURL: serverUrl,
    headers: { "Content-Type": "application/json" },
    timeout: 10000, // Set timeout for requests
  });

  // Request Interceptor (Attach Token if exists)
  api.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      const token = localStorage.getItem("authToken"); // Get token from storage
      if (token) {
        config.headers = { ...config.headers, Authorization: `Bearer ${token}` };
      }
      return config;
    },
    (error: AxiosError) => Promise.reject(error)
  );

  // Response Interceptor (Handle Errors & Refresh Token)
  api.interceptors.response.use(
    (response: AxiosResponse) => response,
    async (error: AxiosError) => {
      if (error.response?.status === 401) {
        console.warn("Unauthorized! Refreshing token...");
        // Implement token refresh logic here if needed
      }
      return Promise.reject(error.response?.data || error.message);
    }
  );

  // Create an AbortController for request cancellation
  const createAbortController = () => new AbortController();

  // Generic API request function
  const apiRequest = async (
    method: "get" | "post" | "put" | "delete",
    endpoint: string,
    data?: any,
    config: AxiosRequestConfig = {}
  ) => {
    const controller = createAbortController();
    config.signal = controller.signal;

    try {
      const response = await api({ method, url: endpoint, data, ...config });
      return response.data;
    } catch (error: any) {
      console.error(`API ${method.toUpperCase()} error:`, error.response?.data || error.message);
      throw error.response?.data || error.message;
    }
  };

  // Export reusable API methods
  const apiService = {
    get: (endpoint: string, config = {}) => apiRequest("get", endpoint, undefined, config),
    post: (endpoint: string, data: any, config = {}) => apiRequest("post", endpoint, data, config),
    put: (endpoint: string, data: any, config = {}) => apiRequest("put", endpoint, data, config),
    delete: (endpoint: string, config = {}) => apiRequest("delete", endpoint, undefined, config),
    cancelRequest: createAbortController, // Allow manual request cancellation
  };

  export default apiService;
