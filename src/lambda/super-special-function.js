export function handler(event, context, callback) {
  const { identity, user } = context.clientContext;
  console.log(identity);
  console.log(user);
  callback(null, {
    statusCode: 200,
    body: JSON.stringify({ msg: "Hello, this is a super secret function!" })
  });
}
