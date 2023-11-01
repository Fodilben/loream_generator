import text from "../data";

const Form = ({ number, setNumber, setLoream }) => {
  const fromSubmiting = (e) => {
    e.preventDefault();

    setLoream(text.slice(0, parseInt(number)));
  };
  return (
    <form className="lorem-form" onSubmit={fromSubmiting}>
      <label htmlFor="num">paragraphs</label>
      <input
        type="number"
        id="num"
        max={8}
        min={1}
        step={1}
        value={number}
        onChange={(prop) => {
          setNumber(prop.target.value);
        }}
      />
      <button type="submit" className="btn">
        generate
      </button>
    </form>
  );
};
export default Form;
