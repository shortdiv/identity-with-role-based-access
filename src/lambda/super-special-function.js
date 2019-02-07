const axios = require("axios");

export function handler(event, context) {
  const { identity } = context.clientContext;

  const users = () => {
    return axios({
      method: "GET",
      url: `${identity.url}/admin/users`,
      headers: { Authorization: `Bearer ${identity.token}` }
    });
  };

  console.log(users);

  const data = {
    email: "divified@gmail.com",
    password: "qwerty",
    confirm: true,
    app_metadata: {
      roles: ["editor"]
    },
    user_metadata: {
      full_name: "Robot Div"
    }
  };
  return axios({
    method: "POST",
    url: `${identity.url}/admin/users`,
    headers: { Authorization: `Bearer ${identity.token}` },
    data: JSON.stringify(data)
  });
}
