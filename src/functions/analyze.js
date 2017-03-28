'use strict';

const q = require('q');
const AWS = require('aws-sdk');
const rekognition = new AWS.Rekognition({apiVersion: '2016-06-27'});
// const async = require('async');
// const _ = require('lodash');

function message(code, json) {
    return {
        statusCode: code,
        headers: {
            "Access-Control-Allow-Origin" : "*",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(json)
    }
}

/**
 * @param event
 * @param context
 * @param callback
 */
exports.post = function(event, context, callback) {
    // console.log('Received event:', JSON.stringify(event, null, 2));
    let json;
    let error;

    if (typeof event['body'] === 'object') {
        json = event['body'];
    } else {
        try {
            json = JSON.parse(event['body']);
        } catch(e) {
            error = e;
        }
    }

    if (!error) {
        //data:image/png;base64,
        let params = {
            Image: {
                // We only need to base64 string
                Bytes: new Buffer(json.image.replace('data:image/png;base64,', ''), 'base64')
            },
            Attributes: ['ALL']
        };

        rekognition.detectFaces(params, function (err, data) {
            if (err) {
                console.log(err, err.stack);
                callback(null, message(400, {"message": "Could not process image"}));
            } else {
                callback(null, message(200, data));
            }
        });
    } else {
        callback(error);
    }
};
