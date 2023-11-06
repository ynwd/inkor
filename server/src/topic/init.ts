import { Topic } from "./topic.model";
import { insertTopic } from "./topic.service";

export async function init() {
  const topics: Topic[] = [
    {
      name: "science",
    },
    {
      name: "math",
    },
    {
      name: "language",
    },
    {
      name: "programming",
    },
  ];

  for (let index = 0; index < topics.length; index++) {
    const topic = topics[index];
    await insertTopic(topic);
  }
}
