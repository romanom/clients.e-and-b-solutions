import { validate } from 'email-validator';

const url = "https://wfw3brtgbc.execute-api.us-east-1.amazonaws.com/beta/email";
const apiToken = 'gVs4ABqLyE49xdzgqqNataz0BD6wwHVA5c5AWv1R';

export const sendEmail = (data, done, fail) => {
    $.ajax({
        type: "POST",
        url,
        contentType: "application/json",
        headers:
            {
                "Content-Type": "application/json",
                "X-Api-Key": "gVs4ABqLyE49xdzgqqNataz0BD6wwHVA5c5AWv1R",
            },
        beforeSend: function (xhr) {
            xhr.setRequestHeader("X-Api-Key", "gVs4ABqLyE49xdzgqqNataz0BD6wwHVA5c5AWv1R");
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