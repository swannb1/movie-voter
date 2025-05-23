import Button from "./Button";
import "./Movie.css";
import { useState } from "react";

type MovieProps = {
  title: string;
};

const Movie: React.FC<MovieProps> = ({ title }) => {
  const [votes, setVotes] = useState(0);

  const handleUpvote = () => {
    setVotes(votes + 1);
  };

  const handleDownVote = () => {
    setVotes(votes - 1);
  };

  return (
    <section className="movie">
      <h2>{title}</h2>
      <p>Number of votes: {votes}</p>
      <section className="button-container">
        <Button title="-1" handleClick={handleDownVote} />
        <Button title="+1" handleClick={handleUpvote} />
      </section>
    </section>
  );
};

export default Movie;
