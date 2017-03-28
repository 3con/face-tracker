'use strict';
const fs = require('fs');

function loadTemplate(file) {
    return fs.readFileSync('/var/task/functions/' + file).toString();
}

/**
 * @param event
 * @param context
 * @param callback
 */
exports.index = function(event, context, callback) {
    console.log('Received event:', JSON.stringify(event, null, 2));

    callback(null, {
        statusCode: 200,
        headers: {
            "Content-Type": "text/html"
        },
        body: loadTemplate("index.html")
    });
};
