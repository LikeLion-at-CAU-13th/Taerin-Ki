import Button from "./Button.js";
import Div from "./Div.js";

class Todo {
    constructor(todoText) {
        this.row = new Div('', 'row').node;

        this.innerText = new Div(todoText, 'text-box');
        this.completeBtn = new Button('완료', 'complete-btn');
        this.delBtn = new Button('삭제', 'del-btn');

        // 완료 버튼: 아이콘 추가
        const completeIcon = new Image();
        completeIcon.src = "./assets/free-icon-check-mark-6520110.PNG";
        completeIcon.alt = 'Complete Icon';
        completeIcon.style.width = '16px';
        completeIcon.style.marginLeft = '5px'; // 텍스트와 간격
        this.completeBtn.node.appendChild(completeIcon);    // 버튼에 아이콘 추가

        // 삭제 버튼: 아이콘 추가
        const deleteIcon = new Image();
        deleteIcon.src = "./assets/free-icon-delete-button-6520105.PNG";
        deleteIcon.alt = 'Delete Icon';
        deleteIcon.style.width = '16px';
        deleteIcon.style.marginLeft = '5px';
        this.delBtn.node.appendChild(deleteIcon);
    }

    // 만들어진 요소를 한 줄로 합쳐서 this.row에 넣고 반환
    addRow() {
        [this.innerText, this.completeBtn, this.delBtn].forEach((dom) => {
            this.row.appendChild(dom.node);
        });
        return this.row;
    }

    // 각 요소의 getter 메서드들
    getRow(){
        return this.row;
    }
    getCompleteBtn(){
        return this.completeBtn.node;
    }
    getDelBtn(){
        return this.delBtn.node;
    }
    getInnerText(){
        return this.innerText.node;
    }
}

export default Todo;