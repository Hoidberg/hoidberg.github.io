var xssFilters = require('xss-filters');

console.log("hi there")
document.write("<a href=" + xssFilters.uriInUnQuotedAttr(url) + ">" + xssFilters.uriInHTMLData(url) + "</a>");
