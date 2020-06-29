var buildEnv = require('./env');

// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
exports.handler = async (event, context) => {
  try {
    const env = {...buildEnv, ...process.env};

    return {
      statusCode: 200,
      body: JSON.stringify({ keys: Object.keys(env) })
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    }
  } catch (err) {
    return { statusCode: 500, body: err.toString() }
  }
}
