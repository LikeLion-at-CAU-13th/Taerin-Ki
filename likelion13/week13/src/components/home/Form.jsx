import React from 'react'
import { useSetRecoilState, useRecoilValue } from 'recoil'
import { emailAtom, favoriteSeasonAtom, phoneNumAtom, userNameAtom } from '../../recoil/atom'
import './FormStyle.css';

const Form = ({type, inputType, label}) => {
    const favoriteSeason = useRecoilValue(favoriteSeasonAtom);
    const setUserName = useSetRecoilState(userNameAtom);
    const setEmail = useSetRecoilState(emailAtom);
    const setFavoriteSeason = useSetRecoilState(favoriteSeasonAtom);
    const setPhoneNum = useSetRecoilState(phoneNumAtom);

    const onChange = (e) => {
        const value = e.target.value;
        if (inputType === '이름') {
            setUserName(value);
        } else if (inputType === '이메일') {
            setEmail(value);
        } else if (inputType === '전화번호') {
            setPhoneNum(value);
        } else if (inputType === '최애 계절') {
            setFavoriteSeason(value);
        }
    };

    // 플레이스홀더 설정
    const getPlaceHolder = () => {
        switch (inputType) {
            case '이름':
                return '이름이 뭐예요?';
            case '전화번호':
                return '전화번호 뭐예요?';
            case '이메일':
                return '이메일은요?';
            default:
                return '';
        }
    }

    if (inputType === '최애 계절') {
        return (
            <>
                <div>{inputType}</div>
                <div
                style={{
                display: 'flex',
                flexDirection: 'row',
                }}>
                    <div style={{ marginBottom: '30px' }}>
                        <label>
                            <input type="radio" name="favoriteSeason" value="봄" onChange={onChange} checked={favoriteSeason === '봄'} />
                            봄
                        </label>
                        <label>
                            <input type="radio" name="favoriteSeason" value="여름" onChange={onChange} checked={favoriteSeason === '여름'} />
                            여름
                        </label>
                        <label>
                            <input type="radio" name="favoriteSeason" value="가을" onChange={onChange} checked={favoriteSeason === '가을'} />
                            가을
                        </label>
                        <label>
                            <input type="radio" name="favoriteSeason" value="겨울" onChange={onChange} checked={favoriteSeason === '겨울'} />
                            겨울
                        </label>
                    </div>
                </div>
            </>
        )
    }

  return (
    <div className='form-container'>
        <div className='form-label'>{inputType}</div>
        <input className='form-input' type={type} onChange={onChange} placeholder={getPlaceHolder()} />   {/* onChange 외우기 👩🏻‍🏫 */}
    </div>
  )
}

export default Form