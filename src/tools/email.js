import { validate } from 'email-validator';
import { apiGatewayEmailURL, apiGatewayToken } from '../config';

export const sendEmail = (data, done, fail) => {
    $.ajax({
        type: "POST",
        url: apiGatewayEmailURL,
        contentType: "application/json",
        headers:
            {
                "Content-Type": "application/json",
                "X-Api-Key": apiGatewayToken,
            },
        beforeSend: function (xhr) {
            xhr.setRequestHeader("X-Api-Key", apiGatewayToken);
            xhr.setRequestHeader("Content-Type", "application/json");
        },
        data: JSON.stringify(data),
        dataType: "json"
    })
        .done(done)
        .fail(fail);
}

export const isEmailValid = (emailAddress) => {
    return validate(emailAddress);
}