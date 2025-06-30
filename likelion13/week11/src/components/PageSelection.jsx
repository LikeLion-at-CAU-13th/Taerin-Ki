import React from 'react';
import styled from 'styled-components';

const PageSelection = ({curPage, setCurPage, totalItems, itemsPerPage}) => {
    // 전체 데이터 기반, 동적으로 페이징
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const handleClick = async(page) => {
        setCurPage(page);
    }

    return (
        <SelectionLayout>
            {/* ⭐ 동적으로 페이지 버튼 생성 ⭐ */}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((val) =>
                <PageBox
                key={val}
                $active={val === curPage}
                onClick={() => handleClick(val)}>
                    {val}
                </PageBox>
            )}
        </SelectionLayout>
    );
};

export default PageSelection;

const SelectionLayout = styled.div`
    display: flex;
    gap: 3rem;
    margin-bottom: 2rem;
`

const PageBox = styled.div`
    font-size: 2rem;
    color: ${(props) => props.$active ? "#FF7710" : "#000000"};
    &:hover{
        cursor: pointer;
        color: #FFB37A;
    }
`