/**
 * api/responses/rcsTableNotFound.js
 *
 * This will be available in controllers as res.rcsTableNotFound({tableId: 123});
 */

module.exports = function(data) {

  var req = this.req;
  var res = this.res;

  var statusCode = 414;
  var message = 'The requested Table is not founded.'

  var result = {
    status: statusCode,
    message: message
  };

  // Optional message
  if (data) {
    result.data = data;
  }

  // If the user-agent wants a JSON response, send json
  if (req.wantsJSON) {
    return res.json(result, result.status);
  }

  // Set status code and view locals
  res.status(result.status);
  for (var key in result) {
    res.locals[key] = result[key];
  }

  return res.end();
};