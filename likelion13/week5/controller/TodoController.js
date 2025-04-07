import Todo from "../DOM/Todo.js";
import CompleteController from "../controller/CompleteController.js"

class TodoController {
    constructor(todoText){
        this.newTodo = new Todo(todoText);

        this.delBtnNode = this.newTodo.getDelBtn();
        this.comBtnNode = this.newTodo.getCompleteBtn();
        this.innerNode = this.newTodo.getInnerText();

        this.delBtnNode.addEventListener('click', () => {
            this.delTodo();
        })
        this.comBtnNode.addEventListener('click', () => {
            this.doneTodo();
        })
    }

    addTodo(){
        const todoList = document.getElementById("to-do-list");
        todoList.appendChild(this.newTodo.addRow());

        const input = document.querySelector('input');
        input.value = '';
    }
    delTodo(){
        const todoList = document.getElementById("to-do-list");
        todoList.removeChild(this.newTodo.getRow());
    }
    doneTodo(){
        this.innerNode.classList.toggle('done-text');
        this.comBtnNode.classList.toggle('done-btn');

        if(this.comBtnNode.innerText === '미완'){
            this.comBtnNode.innerText = '완료';
        } else {
            this.comBtnNode.innerText = '미완';
        }

        // 완료 상태일 때만 Complete List로 이동
        if (this.innerNode.classList.contains('done-text')) {
            const completeController = new CompleteController(this.innerNode.innerText);
            completeController.addComplete(); // Complete List에 추가

            this.delTodo(); // To-Do List에서 삭제
        }
    }
}

export default TodoController;