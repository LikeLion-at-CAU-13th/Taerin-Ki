import React from 'react';
import styled from 'styled-components';
import { filterType } from '../constants/filterType';


const UserFilter = ({setFilter}) => {
    // 과제 2. 무슨 필터가 활성화되어 있는가
    const [activeFilter, setActiveFilter] = React.useState("all");

    const handleClick = async(type, param) => {
        setFilter(param);
        setActiveFilter(param);            
    }
    
    return (
        <FilterLayout>
            {filterType.map((data, idx) =>
            <FilterBox
            key={idx}
            // 과제 2. 선택된 필터에 따라 색상 변경
            $active={data.param === activeFilter}
            onClick={() => handleClick(data.type, data.param)}>
                {data.title}
            </FilterBox>
        )}
        </FilterLayout>
    );
};

export default UserFilter;


const FilterLayout = styled.div`
    display: flex;
    width: 90%;
    justify-content: space-between;
    overflow-x: scroll;
    padding-left: 2rem;
    padding-right: 2rem;
    margin-top: 2rem;
    gap: 2rem;
    &::-webkit-scrollbar{
        display: none;
    }
`

const FilterBox = styled.div`
    display: flex;
    padding: 1rem 4rem 1rem 4rem;
    background-color: "#C9C9C9";
    border-radius: 1rem;
    font-size: 3rem;
    font-weight: bold;
    white-space: nowrap;
    &:hover{
        cursor: pointer;
        color: #FFB37A;
    }
    // 과제 2. 선택된 필터 주황색 글씨로 표시
    color: ${(props) => props.$active ? "#FF7710" : "#000000"};
`