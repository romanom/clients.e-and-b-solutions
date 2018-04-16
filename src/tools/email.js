const url = "http://formspree.io/aaron.sisler@eandbsolutions.com";

export const sendEmail = (data, done, fail) => {
    console.log(url);
    $.ajax({
        url,
        method: "POST",
        data,
        dataType: "json"
    })
        .done(done)
        .fail(fail);
}