import { validate } from 'email-validator';

const url = "http://formspree.io/aaron.sisler@eandbsolutions.com";

export const sendEmail = (data, done, fail) => {
    $.ajax({
        url,
        method: "POST",
        data,
        dataType: "json"
    })
        .done(done)
        .fail(fail);
}

export const isEmailValid = (emailAddress) => {
    return validate(emailAddress);
}