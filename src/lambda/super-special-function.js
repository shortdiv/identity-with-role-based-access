const cookie = require("cookie");

export function handler(event, context, callback) {
  const { headers } = event;
  const { user, identity } = context.clientContext;
  console.log("this is a user   ", user);
  console.log("id ", identity);
  // const parsedBody = JSON.parse(event.body);
  // const { params } = parsedBody;
  // const userData = params.userData;
  const cookieHeader = headers.cookie || "";
  const cookies = cookie.parse(cookieHeader);
  console.log("I AM COOKIE", cookies);
  // console.log("userData", userData.app_metadata.roles);

  callback(null, {
    statusCode: 200,
    body: JSON.stringify({ msg: "Hello, this is a super secret function!" })
  });
}
