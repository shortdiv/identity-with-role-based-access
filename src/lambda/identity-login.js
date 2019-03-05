export function handler(event, context, callback) {
  const { email, full_name } = JSON.parse(event.body);
  const { identity } = context.clientContext;
  const referer = event.headers.referer;

  console.log("this is a magical referer", referer);

  console.log(email);
  console.log(full_name);
  console.log(identity);

  // const config = {
  //   headers: {
  //     Bearer: `Authorization ${identity.token}`
  //   }
  // };
  // const postData = {
  //   email: "divified@gmail.com",
  //   password: "password",
  //   full_name: "Robot Div"
  // };
  // axios.post("/.netlify/indentity/admin/users", postData, config).then(res => {
  //   console.log(res);
  // });

  callback(null, {
    statusCode: 200,
    body: JSON.stringify({ msg: "Hello, this is a message!" })
  });
}
