exports.handler = function(event, context, callback) {
  const data = JSON.parse(event.body);
  const { user } = data;

  console.log(user);
  console.log("IUDK", event.body.user);
  console.log("wtf event", event.body);

  const responseBody = {
    app_metadata: {
      roles: ["visitor"],
      my_user_info: "this is user info that the user can't change from the UI"
    },
    user_metadata: {
      custom_data_from_function: "hurray this is some extra metadata"
    }
  };

  // const validateUser = email => {
  //   if (email.split("@")[1] === "netlify.com") {
  //     return ["editor"];
  //   } else {
  //     return ["visitor"];
  //   }
  // };

  callback(null, {
    statusCode: 200,
    body: JSON.stringify(responseBody)
  });
};
