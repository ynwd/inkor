type Question = {
  topic: Object;
  question: string;
  options: string[];
  correctOptionIndex: number;
  id: string;
};

export default function Question({
  question,
  handleOnChange,
}: {
  question: Question;
  handleOnChange: any;
}) {
  const options = question.options.map((v, i) => {
    return {
      name: question.id,
      value: v,
      id: question.id,
      topic: question.topic,
      question: question.question,
    };
  });

  return (
    <>
      {question.question}
      <ul className="list-group">
        {options.map((v, i) => (
          <li key={i} className="list-group-item">
            <input
              className="form-check-input me-1"
              type="radio"
              name={v.id}
              value={v.value}
              id={v.id}
              onChange={(e) => handleOnChange(e, { idx: i, question: v })}
            />
            <label className="form-check-label" htmlFor={v.id}>
              {v.value}
            </label>
          </li>
        ))}
      </ul>
      <p></p>
    </>
  );
}
