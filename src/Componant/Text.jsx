import { nanoid } from "nanoid";
const Text = ({ loream }) => {
  return (
    <div className="lorem-text">
      {loream.map((lor) => {
        const id = nanoid();
        return <p key={id}> {lor}</p>;
      })}
    </div>
  );
};
export default Text;
