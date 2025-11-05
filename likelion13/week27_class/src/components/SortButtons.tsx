import styled from 'styled-components';
import { type SortOption } from '../types/movie.types';

interface SortButtonsProps {
  // TODO: currentSort 속성 (현재 선택된 정렬 옵션)
  currentSort: SortOption;
  
  // TODO: onSortChange 속성 (정렬 옵션 변경 핸들러)
  onSortChange: (newSort: SortOption) => void;
}

const SortButtons = ({ currentSort, onSortChange }: SortButtonsProps) => {
  const sortOptions: { value: SortOption; label: string }[] = [
    // TODO: 인기순, 평점순, 최신순 옵션 정의
    { value: 'popularity', label: '인기순' },
    { value: 'rating', label: '평점순' },
    { value: 'release_date', label: '최신순' },
  ];

  return (
    <ButtonLayout>
      {/* TODO 3: sortOptions를 map으로 렌더링 */}
      {/* 힌트: sortOptions.map(option => ( ... )) */}
      {/* TODO 4: 현재 선택된 옵션에 'active' 클래스 추가 */}
      {/* TODO 5: 버튼 클릭 시 onSortChange 호출 */}
      {sortOptions.map(option => (
        <ButtonDetail
          key={option.value}
          $isActive={currentSort === option.value}
          onClick={() => onSortChange(option.value)}
        >
          {option.label}
        </ButtonDetail>
      ))}
    </ButtonLayout>
  );
};

export default SortButtons;

const ButtonLayout = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
  margin-bottom: 20px;
`;

const ButtonDetail = styled.button<{ $isActive: boolean }>`
  padding: 10px 20px;
  border: 2px solid white;
  background: ${props => props.$isActive ? 'white' : 'transparent'};
  color: ${props => props.$isActive ? '#667eea' : 'white'};
  font-size: 16px;
  font-weight: 600;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    background: white;
    color: #667eea;
  }
`;