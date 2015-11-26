var QueryString = function(api_key,api_sec) {
    var query_string = {};
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (typeof query_string[pair[0]] === "undefined") {
            query_string[pair[0]] = pair[1];
        } else if (typeof query_string[pair[0]] === "string") {
            var arr = [query_string[pair[0]], pair[1]];
            query_string[pair[0]] = arr;
        } else {
            query_string[pair[0]].push(pair[1]);
        }
    }

    document.getElementById("apiKey").value = (!query_string.ak) ? api_key : query_string.ak;
    document.getElementById("secret").value = (!query_string.as) ? api_sec : query_string.as;

    console.log(query_string.ak);
    console.log(query_string.as);
    console.log(api_key);
    console.log(api_sec);

};