import Thumbline from "./Thumbline";
import FlipMove from "react-flip-move";

function Results({ results }) {
  return (
    <FlipMove className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
      {results.map((result) => (
        <Thumbline key={result.id} result={result} />
      ))}
    </FlipMove>
  );
}

export default Results;
// results shows
