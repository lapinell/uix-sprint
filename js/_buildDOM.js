"use strict";

let htmlParts = require('./_htmlComponents');

// Global DOM Partials

let buildFooter = () => {
    $('footer').html(htmlParts.pageFooter);
};

// Page Specific DOM Partials

module.exports = { buildFooter };