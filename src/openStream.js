const playVideo = require('./playVideo');
const Peer = require('simple-peer');
const $ = require('jquery');

function openStream(cb) {
    navigator.mediaDevices.getUserMedia({ audio: false, video: true })
        .then(stream => {
            cb(stream);
        })
        .catch(err => console.log(err));
}

module.exports = openStream;