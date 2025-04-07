import DOM from "./DOM.js"

class Complete extends DOM {
    constructor(innerText, className) {
        super('div', innerText, className); // 'div' 태그로 생성
        this.node.classList.add('row'); // 스타일링을 위한 'row' 클래스 추가
    }
}

export default Complete;