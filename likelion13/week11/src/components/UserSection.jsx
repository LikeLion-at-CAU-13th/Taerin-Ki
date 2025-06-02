import React from 'react';
import styled from 'styled-components';
import UserCard from './UserCard';
import PageSelection from './PageSelection';

const UserSection = ({filter, userData, curPage, setUserData, setCurPage}) => {
    // 과제 3. 페이지당 5개 데이터 표시
    const itemsPerPage = 5;
    const startIndex = (curPage - 1) * itemsPerPage;
    const pagingData = userData.slice(startIndex, startIndex + itemsPerPage);
    return (
        <UserSecLayout>
            <UserCardBox>
                {
                    // 과제 3. 전체 데이터 대신 페이징 데이터 사용
                    pagingData.map((data, idx) =>
                    <UserCard key={idx} data={data} />)
                }
            </UserCardBox>
            { /* 데이터가 5개를 초과하는 필터를 선택했을 때 페이징 표시하기! */ }
            {userData.length > itemsPerPage &&
            <PageSelection curPage={curPage} setCurPage={setCurPage}
            setUserData={setUserData} totalItems={userData.length}
            itemsPerPage={itemsPerPage} />}
        </UserSecLayout>
    );
};

export default UserSection;

const UserSecLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  align-items: center;
  gap: 2rem;
  margin-top: 3rem;
  margin-bottom: 3rem;
`

const UserCardBox = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
`