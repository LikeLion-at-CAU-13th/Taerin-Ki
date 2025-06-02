import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import UserFilter from '../components/UserFilter';
import UserSection from '../components/UserSection';
import { getGenderUser, getPartUser, getPerPage } from '../apis/userlist';

const UserInfo = () => {
    const [filter, setFilter] = useState("all");
    // const [taerin, setFilter] = useState("all"); 으로 하고
    const [curPage, setCurpage] = useState(1);  // 초기 페이지 1로 설정
    const [userData, setUserData] = useState([]);

    // 필터 변경 시 필터링된 데이터 로드 및 페이지 리셋
    useEffect(() => {
        const fetchData = async () => {
            try {
                let response;
                if (filter === "all") {
                    response = await getPerPage();
                } else if (filter === "male" || filter === "female") {
                    response = await getGenderUser(filter);
                } else {
                    response = await getPartUser(filter);
                }
                setUserData(response || []);    // 응답 없는 경우 빈 배열 설정
                setCurpage(1);  // 필터 변경 시 페이지를 1로 리셋
            } catch (error) {
                console.error("데이터 로드 중 오류 발생:", error);
                setUserData([]) // 에러 발생 시 빈 배열 설정
            }
        };
        fetchData();
    }, [filter]);

    return (
        // 관습적으로 'Layout'이라고 함
        <MainLayout>
            <h1>🦁13기 아기사자 리스트🦁</h1>
            <ContentBox>
                <UserFilter setFilter={setFilter} setUserData={setUserData} setCurPage={setCurpage} />
                <UserSection filter={filter} userData={userData} curPage={curPage} setUserData={setUserData} setCurPage={setCurpage} />
            </ContentBox>
        </MainLayout>
        // <UserSection filter={taerin} ... /> 으로 해도 됨
        // 이유 찾아보기!
    );
};

export default UserInfo;

const MainLayout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    & > h1{
        font-size: 3.5rem;
        margin-top: 5rem;
        margin-bottom: 5rem;
    }
`

const ContentBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 95%;
    border-radius: 1rem;
    border : 5px solid #FF7710;
`