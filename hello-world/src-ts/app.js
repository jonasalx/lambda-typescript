
exports.lambdaHandler = async (event, context) => {
    const queries = JSON.stringify(event.queytStringParameters);
    return {
      statusCode: 200,
      body: `Queries: ${queries}`
    }
  };
