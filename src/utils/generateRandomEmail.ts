import { config } from "process";
import constants from "../configs/constants";

export const generateRandomEmail = () => {
  const words = "0123456789abcdefghijklmnopqrstuvwxyz";
  let response = "";
  for (let i = 0; i < 10; i++) {
    const element = words[Math.floor(Math.random() * words.length)];
    response += element;
  }
  return response + "@gmail.com";
};

export const selectRandomEmail = () => {
  const emails = constants.emailAddresses;
  return emails[Math.floor(Math.random() * emails.length)];
};
