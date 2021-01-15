let isOdd = require("is-odd");

module.exports = async function handleRequest(request) {
  let count = 1;
  return new Response(count + (isOdd(count) ? " is odd" : " is even"));
}