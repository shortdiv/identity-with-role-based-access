const axios = require("axios");

export function handler(event, context, callback) {
  console.log("HELLO THERE");
  console.log(event.body);
  const { identity } = context.clientContext;

  const referer = event.headers.referer;

  console.log("this is a magical referer", referer);

  const config = {
    headers: {
      Bearer: `Authorization ${identity.token}`
    }
  };
  const postData = {
    email: "divified@gmail.com",
    password: "password",
    full_name: "Robot Div"
  };
  axios
    .post("/.netlify/indentity/admin/users", postData, config)
    .then(() => {
      console.log("did this work?");
    })
    .catch(err => console.log("thisis an error", err));

  callback(null, {
    statusCode: 200,
    body: JSON.stringify({ msg: "Hello, this is a super secret message!" })
  });
}
