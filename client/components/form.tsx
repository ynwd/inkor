import React, { useState, useEffect } from "react";
import { Topics } from "./topic";
import { Users } from "./user";

const Form: React.FC = () => {
  const [usernames, setUsernames] = useState([]);
  const [topics, setTopics] = useState([]);
  const [response, setResponse] = useState("");
  const [username, setUsername] = useState("");
  const [topic, setTopic] = useState("");

  const handleTopicsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTopic(event.target.value);
  };

  const handleUserChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  useEffect(() => {
    fetch("http://localhost:3000/topic")
      .then((response) => response.json())
      .then((data) => setTopics(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/user")
      .then((response) => response.json())
      .then((data) => setUsernames(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!topic || !username)
      return (document.location.href = `http://localhost:3001`);
    document.location.href = `http://localhost:3001/question/${topic}/${username}`;
  };

  const mappedTopics = topics.map((v: any) => {
    return { id: v._id, name: v.name };
  });

  const mappedUsers = usernames.map((v: any) => {
    return { id: v._id, username: v.username };
  });

  return (
    <div>
      <h1>User Grade</h1>
      <form onSubmit={handleSubmit}>
        <Topics topics={mappedTopics} handleOnChange={handleTopicsChange} />
        <p></p>
        <Users users={mappedUsers} handleOnChange={handleUserChange} />
        <p></p>
        <button type="submit" className="btn btn-primary">
          Get user grade
        </button>
      </form>
      <div>{response}</div>
    </div>
  );
};

export { Form };
