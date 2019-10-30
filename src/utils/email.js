import axios from "axios";
import { validate } from "email-validator";
import {
  pointOfContactEmail,
  SERVICES_API_KEY,
  servicesApiGatewayURL
} from "../config";

const headers = {
  "Content-Type": "application/json",
  "X-Api-Key": SERVICES_API_KEY
};

const emailOptions = { headers };

export const isEmailValid = emailAddress => validate(emailAddress);

export const sendEmail = async (data, done, fail) => {
  const emailData = { pointOfContactEmail, ...data };

  try {
    await axios.post(servicesApiGatewayURL, emailData, emailOptions);
    done();
  } catch (e) {
    fail();
  }
};
