import { validate } from 'email-validator';
import { apiGatewayEmailURL, apiGatewayToken } from '../config';

const createRequest = (data, done, fail) => {
    var request = new XMLHttpRequest();
    request.onload = function () {
        done();
    }
    request.onerror = function () {
        fail();
    }
    request.open('POST', apiGatewayEmailURL, true);
    request.setRequestHeader("X-Api-Key", apiGatewayToken);
    request.setRequestHeader("Content-Type", "application/json");
    request.send(JSON.stringify(data));
}

export const isEmailValid = (emailAddress) => {
    return validate(emailAddress);
}

export const sendEmail = (data, done, fail) => {
    createRequest(data, done, fail);
}