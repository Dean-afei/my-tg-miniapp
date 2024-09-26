import '@/styles/homepage.less';
import { useState } from 'react';
import WebApp from '@twa-dev/sdk';

function Home() {
  const [count, setCount] = useState(0);

  return (
    <div className="homo-page">
      <div>
        <a href="https://vitejs.dev" target="_blank"></a>
        <a href="https://react.dev" target="_blank"></a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      {/* Here we add our button with alert callback */}
      <div className="card">
        <button
          onClick={() =>
            WebApp.showAlert(`Hello World! Current count is ${count}`)
          }
        >
          Show Alert
        </button>
      </div>
    </div>
  );
}

export default Home;
