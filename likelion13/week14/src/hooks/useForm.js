import { useState } from "react"

// 커스텀 훅 만들기 => id, pw, name, age랑 onChange 이벤트 하나로 묶기  value[id] or value.id 이런식으로 표현되게?

export const useForm = () => {
    const [value, setValue] = useState();
    const onChange = (e) => {
        setValue(e.target.value);
    };
    return [value, onChange];
};