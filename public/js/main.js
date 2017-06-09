(function () {
    console.log('js file loaded');

    $.get("package.json", (res) => {
        $("#package_json").text(JSON.stringify(res, null, 4));
    });

})();