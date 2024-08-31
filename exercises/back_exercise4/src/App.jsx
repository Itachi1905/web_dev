import { useState, useEffect } from 'react'
import Card from "./card"
import './App.css'

function App() {
  const [todos, setTodos] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    if (!hasMore) return;

    const fetchTodos = async () => {
      const todoUrls = Array.from({ length: 5 }, (_, index) =>
        `https://jsonplaceholder.typicode.com/posts/${(page - 1) * 5 + index + 1}`
      );

      try {
        const responses = await Promise.all(todoUrls.map(url => fetch(url)));
        const data = await Promise.all(responses.map(res => res.json()));
        setTodos(prevTodos => [...prevTodos, ...data]);

        if (data.length < 5) {
          setHasMore(false);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setHasMore(false);
      }
    };

    fetchTodos();
  }, [page, hasMore]);

  const loadMore = () => {
    if (hasMore) {
      setPage(prevPage => prevPage + 1);
    }
  };

  return (
    <div className='grid'>
        {todos.map(todo => (
          <Card title={todo.title} body={todo.body} userId={todo.userId} id={todo.id}/>
        ))}
      {hasMore && (
        <button onClick={loadMore} className="m-4 p-2 bg-blue-500 text-white rounded">
          Load More
        </button>
      )}
    </div>
  )
}

export default App
