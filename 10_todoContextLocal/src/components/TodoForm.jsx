import { useEffect, useRef, useState } from "react";
import { useTodo } from "../contexts";

function TodoForm() {
  const [todo, setTodo] = useState("");
  const { todos, addTodo } = useTodo();
  const inputRef = useRef(null);

  const add = e => {
    e.preventDefault();

    if (!todo) return;
    addTodo({ todo });
    setTodo("");
  }

  useEffect(() => {
    inputRef.current?.focus();
  }, [todos]);


  return (
    <form
      className="flex"
      onSubmit={add} >
      <input
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        type="text"
        placeholder="Write Todo..."
        ref={inputRef}
        value={todo}
        onChange={e => setTodo(e.target.value)}
      />
      <button
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
        type="submit" >
        Add
      </button>
    </form>
  );
}

export default TodoForm;

