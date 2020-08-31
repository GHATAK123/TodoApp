import React from 'react'

function Form({setStatus,inputText,setInputText,todos,setTodos}) {
  const inputTextHandler = (e) => {
     console.log(e.target.value);
     setInputText(e.target.value)
  }
  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([...todos,{text:inputText,completed:false,id:Math.random()*1000}]);
    setInputText("");

  }
  return (
   
      <form>
      <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
      <button className="todo-button"  onClick={submitTodoHandler } type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
    
    </form>
      
   
  )
}

export default Form
