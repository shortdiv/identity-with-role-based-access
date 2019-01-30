export function handler(event, context, callback) {
  const { identity, user } = context.clientContext;
  const { headers } = event;
  console.log("identity  ", identity);
  console.log("userrrrrr", user);

  const parsedBody = JSON.parse(event.body);
  const { userData } = parsedBody;
  console.log("userData", userData);
  console.log("headerssss", headers);
  callback(null, {
    statusCode: 200,
    body: JSON.stringify({ msg: "Hello, this is a super secret function!" })
  });
}
