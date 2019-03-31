import axios from "axios";
import { validate } from "email-validator";
import { pointOfContactEmail } from "../config";
import { apiGatewayEmailURL, apiGatewayToken } from "../config/secrets";

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
    "X-Api-Key": apiGatewayToken
  }
};

export const isEmailValid = emailAddress => validate(emailAddress);

export const sendEmail = async (data, done, fail) => {
  const emailData = Object.assign({}, emailProperties, data);
  try {
    await axios.post(apiGatewayEmailURL, emailData, emailHeaders);
    done();
  } catch {
    fail();
  }
};
