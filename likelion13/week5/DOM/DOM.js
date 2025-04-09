// 가장 기초가 되는 뼈대

class DOM {
    constructor(tagName, innerText, className) {
        this.node = document.createElement(tagName);
        this.node.innerText = innerText;
        if (className) this.node.classList.add(className);
    }
}

export default DOM;