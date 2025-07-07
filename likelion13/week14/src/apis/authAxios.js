import axios from "axios";
import { getNewRefreshToken } from "./user";

export const getAuthAxios = (token, navigate) => {
  const authAxios = axios.create({
    baseURL: "https://likelion-cau.r-e.kr",
    headers: {
      Authorization: `Bearer ${token || ''}`,
    },
  });
  
  authAxios.interceptors.response.use(
    (response) => response.data, // 응답이 잘 왔으면 받은 응답을 반환
    async (error) => {
      if (error.response?.status === 401) {
        try {
          const result = await getNewRefreshToken();
          const newAccess = result.accessToken;

          localStorage.setItem("access", newAccess);
          error.config.headers.Authorization = `Bearer ${newAccess}`;
          return (await axios(error.config)).data;
        } catch (refreshError) {
          console.warn('리프레시 토큰 갱신 실패:', refreshError);
          localStorage.removeItem('access');
          localStorage.removeItem('refresh');
          if (navigate) {
            navigate('/');
          } else {
            console.error('navigate 함수가 없어 window.location.href로 리다이렉트');
            window.location.href = '/';            
          }
          return Promise.reject(refreshError);
        }
      }
    }
  );
  return authAxios;
};
