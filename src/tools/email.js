import axios from "axios";
import { validate } from "email-validator";
import {
  apiEmailGatewayURL,
  apiEmailGatewayToken,
  pointOfContactEmail,
  calcGatewayURL,
  calcGatewayToken
} from "../config";

const emailProperties = {
  pointOfContactEmail,
  name: "",
  website: "",
  emailAddress: "",
  phoneNumber: "",
  message: ""
};

const emailHeaders = {
  headers: {
    "Content-Type": "application/json",
    "X-Api-Key": apiEmailGatewayToken
  }
};

export const isEmailValid = emailAddress => validate(emailAddress);

export const sendEmail = async (data, done, fail) => {
  const emailData = Object.assign({}, emailProperties, data);
  try {
    await axios.post(apiEmailGatewayURL, emailData, emailHeaders);
    done();
  } catch {
    fail();
  }
};

export const sendCalc = async (data, done, fail) => {
  const calcHeaders = {
    headers: {
      "Content-Type": "application/json",
      "X-Api-Key": calcGatewayToken
    }
  };

  const calcData = Object.assign({}, { num1: 6, num2: 2 }, data);
  try {
    const result = await axios.post(calcGatewayURL, calcData, calcHeaders);
    const { data: responseData } = result;
    console.log("result: ", result);
    console.log("Data: ", responseData);
    done();
  } catch {
    fail();
  }
};
