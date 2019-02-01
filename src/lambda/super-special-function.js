const cookie = require("cookie");

export function handler(event, context, callback) {
  const { headers } = event;
  const parsedBody = JSON.parse(event.body);
  const { userData } = parsedBody;
  const cookieHeader = headers.cookie || "";
  const cookies = cookie.parse(cookieHeader);
  console.log(cookies);
  console.log("userData", userData.app_metadata.roles);
  callback(null, {
    statusCode: 200,
    body: JSON.stringify({ msg: "Hello, this is a super secret function!" })
  });
}
