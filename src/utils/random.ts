import { avatarList } from "../data/avatarList";
import { messageList } from "../data/messageList";
import { nameList } from "../data/nameList";
import { v4 as uuidv4 } from 'uuid';

export const getRandomAvatar = (): string => {
  const randomIndex = Math.floor(Math.random() * avatarList.length);
  return avatarList[randomIndex];
};

// Function to get a random message
export const getRandomMessage = (): string => {
  const randomIndex = Math.floor(Math.random() * messageList.length);
  return messageList[randomIndex];
};


// Function to generate a random id
export const generateRandomId = (): string => {
  return uuidv4();
};

// Function to get a random name
export const getRandomName = (): string => {
  const randomIndex = Math.floor(Math.random() * nameList.length);
  return nameList[randomIndex];
};