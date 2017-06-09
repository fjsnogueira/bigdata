"use strict";

var favicon = require("serve-favicon");
var path = require("path");
var express = require("express");

const staticResourcesConfig = (app) => {
    app.use("/package.json", express.static("./package.json"));
    app.use(favicon("./shared/assets/images/favicon.ico"));
    express.static.mime.define({"text/css": ["css"]});
    express.static.mime.define({"application/x-font-woff": ["woff"]});
    express.static.mime.define({"application/x-font-ttf": ["ttf"]});
    express.static.mime.define({"application/vnd.ms-fontobject": ["eot"]});
    express.static.mime.define({"font/opentype": ["otf"]});
};

module.exports = staticResourcesConfig;