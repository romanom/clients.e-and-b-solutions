import axios from "axios";
import { validate } from "email-validator";
import {
  apiEmailGatewayURL,
  apiEmailGatewayToken,
  pointOfContactEmail
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
