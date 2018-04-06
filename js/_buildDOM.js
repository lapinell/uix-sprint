"use strict";

// Global DOM Partials

let buildDOM = (element, htmlPartial) => {
    $(element).html(htmlPartial);
};

// Page Specific DOM Partials

module.exports = { buildDOM };