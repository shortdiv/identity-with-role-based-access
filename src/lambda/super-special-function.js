const axios = require("axios");

export function handler(event, context) {
  const { identity } = context.clientContext;

  console.log("IDENT", identity);
  console.log(context.clientContext.user);

  const dataBody = JSON.parse(event.body);
  console.log("EVENT", dataBody.userData.app_metadata.roles);

  const users = () => {
    return axios({
      method: "GET",
      url: `${identity.url}/admin/users`,
      headers: { Authorization: `Bearer ${identity.token}` }
    });
  };

  users()
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log("ERRORERER ", err);
    });

  const data = {
    email: "divified@gmail.com",
    password: "qwerty",
    confirm: true,
    app_metadata: {
      roles: ["superstar"]
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
