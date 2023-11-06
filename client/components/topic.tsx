import React, { useState, useEffect } from "react";

export type Topic = {
  name: string;
  id: string;
};

const Topics = ({
  topics,
  handleOnChange,
}: {
  topics: Topic[];
  handleOnChange: any;
}) => {
  return (
    <>
      Topics
      <ul className="list-group">
        {topics.map((item, index) => (
          <li key={index} className="list-group-item">
            <input
              className="form-check-input me-1"
              type="radio"
              name="topicList"
              value={item.name}
              id={item.id}
              onChange={handleOnChange}
            />
            <label className="form-check-label" htmlFor={item.id}>
              {item.name}
            </label>
          </li>
        ))}
      </ul>
    </>
  );
};

export { Topics };
