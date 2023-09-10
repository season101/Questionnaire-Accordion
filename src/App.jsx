import { useState } from 'react';
import questions from './data';
const App = () => {
  const [data, setData] = useState(questions);
  return (
    <main>
      <section className="container">
        <h1>Questions</h1>
        <ul>
          {data.map((d) => {
            return <li key={d.id}>{d.title}</li>;
          })}
        </ul>
      </section>
    </main>
  );
};
export default App;
