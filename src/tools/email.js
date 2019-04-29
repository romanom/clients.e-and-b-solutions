import axios from "axios";
import { validate } from "email-validator";
import {
  // apiEmailGatewayURL,
  // apiEmailGatewayToken,
  pointOfContactEmail,
  servicesApiGatewayURL,
  servicesApiGatewayToken
} from "../config";

// const emailProperties = {
//   pointOfContactEmail,
//   name: "",
//   website: "",
//   emailAddress: "",
//   phoneNumber: "",
//   message: ""
// };

const emailHeaders = {
  headers: {
    "Content-Type": "application/json",
    "X-Api-Key": servicesApiGatewayToken
  }
};

export const isEmailValid = emailAddress => validate(emailAddress);

export const sendEmail = async (data, done, fail) => {
  const defaultProperties = {
    pointOfContactEmail,
    name: "Aaron Test",
    emailAddress: "amsisler@ncsu.edu",
    phoneNumber: "9106030899",
    message: "I am from sendEmail"
  };
  const emailData = Object.assign({}, defaultProperties);
  try {
    await axios.post(servicesApiGatewayURL, emailData, emailHeaders);
    done();
  } catch {
    fail();
  }
};
