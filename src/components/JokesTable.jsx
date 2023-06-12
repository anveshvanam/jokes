import React, { useEffect, useState } from "react";
import Login from "./Login";

const JokesTable = () => {
  const [jokes, setJokes] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    fetchJokes();
    const loggedIn = localStorage.getItem("isLoggedIn");
    if (loggedIn) {
      setIsLoggedIn(true);
    }
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

  const logOut = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
  };

  return isLoggedIn ? (
    <div className="container d-flex flex-column justify-content-center align-items-center min-vh-100">
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
      <div className="d-flex my-3">
        <button className="btn btn-primary me-3" onClick={fetchJokes}>
          Fetch Jokes
        </button>
        <button className="btn btn-danger" onClick={logOut}>
          Logout
        </button>
      </div>
    </div>
  ) : (
    <Login setIsLoggedIn={setIsLoggedIn} />
  );
};

export default JokesTable;
