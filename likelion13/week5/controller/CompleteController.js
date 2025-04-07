import Complete from "../DOM/Complete.js";

class CompleteController {
    constructor(taskText) {
        this.taskText = taskText; // 완료된 태스크의 텍스트
        this.completeList = document.getElementById('complete-list'); // Complete List DOM 요소
    }

    // 완료된 태스크를 Complete List에 추가하는 메서드
    addComplete() {
        const completeItem = new Complete(this.taskText, 'text-box'); // 텍스트 박스 생성
        this.completeList.appendChild(completeItem.node); // Complete List에 추가
    }
}

export default CompleteController;