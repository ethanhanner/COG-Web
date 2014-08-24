function get_auth(url, callback) {
    var token = $.cookie("cog_token")
    $.ajax({
        type: "GET",
        url: url,
        async: true,
        beforeSend: function(xhr) {
            xhr.setRequestHeader('Authorization', make_base_auth(token, ""));
        },
        success: callback
    });
}

function assignments_get(callback) {
    var url = "https://api-cog.cs.colorado.edu/assignments/"
    get_auth(url, callback)
}
