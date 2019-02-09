const axios = require("axios");

export function handler(event, context, callback) {
  const referer = event.headers.referer;
  const { userData } = JSON.parse(event.body);
  const { identity } = context.clientContext;

  const roles = userData.app_metadata.roles;

  //check roles!
  if (roles.indexOf("editor")) {
    // do some cool stuff
    const attrs = {
      user_metadata: {
        ...userData.user_metadata,
        last_login: new Date().toISOString()
      }
    };

    return axios({
      url: `/.identity/admin/users/${userData.id}`,
      headers: { Authorization: `Bearer ${identity.token}` },
      method: "PUT",
      body: JSON.stringify(attrs)
    });
  } else {
    return callback(null, {
      statusCode: 401,
      headers: {
        Location: `${referer}`,
        "Cache-Control": "no-cache"
      },
      body: JSON.stringify({ message: "User does not have access privileges" })
    });
  }
  // const data = {
  //   email: "divified@gmail.com",
  //   password: "qwerty",
  //   confirm: true,
  //   role: "superstar",
  //   app_metadata: {
  //     roles: ["superstar"]
  //   },
  //   user_metadata: {
  //     full_name: "Robot Div"
  //   }
  // };
  // return axios({
  //   method: "POST",
  //   url: `${identity.url}/admin/users`,
  //   headers: { Authorization: `Bearer ${identity.token}` },
  //   data: JSON.stringify(data)
  // });
}
