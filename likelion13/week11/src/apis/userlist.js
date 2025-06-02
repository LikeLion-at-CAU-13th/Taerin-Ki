import axios from "axios";

export const baseURL = "https://week11-server.onrender.com";

// 과제 3. 전체 데이터 요청 (페이지 파라미터 제거)
export const getPerPage = async(page) => {
    const response = await axios.get(`${baseURL}/lionlist`);
    return response.data;
}

export const getGenderUser = async(gender) => {
    const response = await axios.get(`${baseURL}/lionlist?gender=${gender}`);
    return response.data;
}

// 과제 1. 파트별 요청 함수 추가
export const getPartUser = async(part) => {
    const response = await axios.get(`${baseURL}/lionlist?part=${part}`);
    return response.data;
}