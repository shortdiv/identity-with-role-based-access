const axios = require("axios");

export function handler(event, context) {
  console.log("HELLO THERE");
  console.log(event.body);
  const { identity } = context.clientContext;

  console.log("I am an identity", identity.token);

  // const generatePost = async function() {
  //   const config = {
  //     headers: {
  //       Bearer: `Authorization ${identity.token}`
  //     }
  //   };
  //   const postData = {
  //     email: "divified@gmail.com",
  //     password: "password",
  //     confirm: true,
  //     app_metadata: {
  //       roles: ["editor"]
  //     },
  //     user_metadata: {
  //       full_name: "Robot Div"
  //     }
  //   };

  //   try {
  //     const resp = await axios.post(
  //       "/.netlify/identity/admin/users",
  //       JSON.stringify(postData),
  //       config
  //     );
  //     console.log(resp);
  //   } catch (err) {
  //     console.log("I AM AN ERROR", err);
  //   }
  // };

  return axios({
    method: "POST",
    url: `${identity.url}/admin/users`,
    headers: { Authorization: `Bearer ${identity.token}` },
    data: JSON.stringify({
      email: "divified@gmail.com",
      password: "iampassword",
      confirm: true,
      user_metadata: {
        full_name: "Roboto Div"
      }
    })
  });
}
