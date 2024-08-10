// import axios, { AxiosInstance } from "axios";

// const BASEURL = process.env.NEXT_PUBLIC_API_BASEURL as string;

// export const userApiClient = createApiClient(BASEURL);

// function createApiClient(baseURL: string): AxiosInstance {
//   const instance = axios.create({
//     baseURL: baseURL,
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });

//   instance.interceptors.request.use((config) => {
//     const token = localStorage.getItem("access_token");
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   });

//   return instance;
// }
