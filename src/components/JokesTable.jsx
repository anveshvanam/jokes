import React, { useEffect, useState } from "react";

const JokesTable = () => {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    fetchJokes();
  }, []);

  const fetchJokes = async () => {
    try {
      const response = await fetch(
        "https://v2.jokeapi.dev/joke/any?format=json&blacklistFlags=nsfw,sexist&type=single&lang=EN&amount=10"
      );
      const data = await response.json();
      setJokes(data.jokes);
    } catch (error) {
      console.error("Error fetching jokes:", error);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <table className="table table-bordered table-lg">
        <thead className="table-dark">
          <tr>
            <th scope="col" className="">
              Jokes
            </th>
          </tr>
        </thead>
        <tbody>
          {jokes.map((joke, index) => (
            <tr key={index} className="shadow-sm">
              <td className="h-100 py-3">{joke.joke}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JokesTable;
