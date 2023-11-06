import TopicModel, { Topic } from "./topic.model";

export async function insertTopic(topicData: Topic) {
  return await TopicModel.create(topicData);
}

export async function getAllTopics() {
  return await TopicModel.find();
}

export async function getTopicById(id: string) {
  return await TopicModel.findById(id);
}

export async function getTopicByName(name: string) {
  return await TopicModel.findOne({ name });
}

export async function deleteAllTopics() {
  return await TopicModel.deleteMany({});
}
