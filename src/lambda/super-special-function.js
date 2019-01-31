export function handler(event, context, callback) {
  const parsedBody = JSON.parse(event.body);
  const { userData } = parsedBody;
  console.log("userData", userData.app_metadata.roles);
  callback(null, {
    statusCode: 200,
    body: JSON.stringify({ msg: "Hello, this is a super secret function!" })
  });
}
