import axios from "axios";
import ora, { Ora } from "ora";
import chalk from "chalk";
import { generateRandomEmail, selectRandomEmail } from "./generateRandomEmail";
import constants from "src/configs/constants";
import { generateRandomPhoneNum } from "./generateRandomPhoneNum";
import { generateRandomUsername } from "./generateRandomUsername";
export const sendRequest = async () => {
  let data = JSON.stringify({
    email: generateRandomEmail(),
    name: generateRandomUsername(),
    mobile: generateRandomPhoneNum(),
    password: constants.password,
  });
  let spinner: Ora | null = null;
  try {
    spinner = ora("Loading...").start();
    const result = await axios.request({
      ...constants.requestConfig,
      data: data,
      url: "https://e-commerce-backend-xb1p.onrender.com/api/user/register",
    });

    spinner.succeed("Request succeeded! for :");
  } catch (error: any) {
    console.log(chalk.bgRed(`\n${error}`));

    spinner?.fail(error?.message);
  }
};

// sendRequest().then((res) => {
//   console.log(res);
// });
