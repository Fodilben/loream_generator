import { useState } from "react";
import Form from "./Componant/Form";
import Text from "./Componant/Text";
import text from "./data";
const App = () => {
  const [loream, setLoream] = useState([text[0]]);
  const [number, setNumber] = useState(1);
  return (
    <section className="section-center">
      <h4>tired of boring lorem ipsum?</h4>
      <Form number={number} setNumber={setNumber} setLoream={setLoream} />
      <Text loream={loream} />
    </section>
  );
};
export default App;
