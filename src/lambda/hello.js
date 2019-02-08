export function handler(event, context, callback) {
  console.log(context.clientContext.identity);
  console.log(context.clientContext.user);
  console.log(event.body);
  console.log("userrrrr ", event.body.user);
  callback(null, {
    statusCode: 200,
    body: JSON.stringify({ msg: "Hello, World!" })
  });
}
