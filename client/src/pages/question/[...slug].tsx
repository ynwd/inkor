import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Question from "../../../components/question";

export default function User() {
  const [userid, setUserid] = useState("");
  const [topicid, setTopicid] = useState("");
  const [answers, setAnswers] = useState([]);
  const [questions, setQuestion] = useState([]);
  const [grade, setGrade] = useState({} as any);
  const router = useRouter();
  const slug = router.query.slug;
  let username: unknown;
  let topicname: unknown;
  if (slug) {
    username = slug[1];
    topicname = slug[0];
  }

  const finalAnswer: any[] = [];
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    fetch("http://localhost:3000/a/bulk", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: finalAnswer }),
    }).then(() => {
      document.location.href = `http://localhost:3001`;
    });
  };

  function prosesFinalAnswer(a: any) {
    const x = finalAnswer.filter((v) => {
      return v.question === a.question;
    });
    if (x.length > 0) return;
    finalAnswer.push({
      user: a.user,
      topic: a.topic,
      question: a.question,
      answer: a.answer,
    });
  }

  const handleAnswerChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    answer: any
  ) => {
    const a = {
      user: userid,
      topic: answer.question.topic,
      question: answer.question.id,
      answer: answer.idx,
    };

    prosesFinalAnswer(a);
  };

  useEffect(() => {
    if (username)
      fetch(`http://localhost:3000/user/username/${username}`)
        .then((response) => response.json())
        .then((data) => setUserid(data._id))
        .catch((error) => console.error("Error fetching data:", error));
  }, [username]);

  useEffect(() => {
    if (topicname)
      fetch(`http://localhost:3000/topic/name/${topicname}`)
        .then((response) => response.json())
        .then((data) => setTopicid(data._id))
        .catch((error) => console.error("Error fetching data:", error));
  }, [topicname]);

  useEffect(() => {
    if (userid && topicid)
      fetch(`http://localhost:3000/a/${userid}/${topicid}`)
        .then((response) => response.json())
        .then((data) => {
          setAnswers(data);
        })
        .catch((error) => console.error("Error fetching data:", error));
  }, [topicid, userid]);

  useEffect(() => {
    if (userid && topicid)
      fetch(`http://localhost:3000/q/topic/${topicid}`)
        .then((response) => response.json())
        .then((data) => {
          setQuestion(data);
        })
        .catch((error) => console.error("Error fetching data:", error));
  }, [topicid, userid]);

  useEffect(() => {
    if (userid && topicid)
      fetch(`http://localhost:3000/a/${userid}/${topicid}/grade`)
        .then((response) => response.json())
        .then((data) => {
          setGrade(data);
        })
        .catch((error) => console.error("Error fetching data:", error));
  }, [topicid, userid]);

  if (
    answers &&
    answers.length > 0 &&
    grade.user &&
    grade.user.username &&
    grade.topic &&
    grade.topic.topic
  ) {
    const gradeVal = {
      user: grade.user.username,
      topic: grade.topic.topic,
      grade: grade.grade,
    };

    return <>{JSON.stringify(gradeVal)}</>;
  }

  return (
    <>
      Topic: {topicname}
      <br></br>
      User: {username}
      <p></p>
      <form onSubmit={handleSubmit}>
        {questions.map((v: any, i) => {
          return (
            <Question
              key={i}
              question={{
                topic: v.topic,
                question: v.question,
                options: v.options,
                correctOptionIndex: v.correctOptionIndex,
                id: v._id,
              }}
              handleOnChange={handleAnswerChange}
            />
          );
        })}
        <button type="submit" className="btn btn-primary">
          Submit answer
        </button>
      </form>
    </>
  );
}
