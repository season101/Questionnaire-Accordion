import { useState } from 'react';
import Questions from './Questions';
import questions from './data';
const App = () => {
  const [data, setData] = useState(questions);
  return (
    <main>
      <section className="container">
        <h1>Questions</h1>
        <Questions data={data} />
      </section>
    </main>
  );
};
export default App;
