exports.handler = function(event, context, callback) {
  console.log(context);
  console.log(context.clientContext);
  // const { user } = context.clientContext;
  console.log(event.body);

  const responseBody = {
    app_metadata: {
      roles: ["visitor"],
      my_user_info: "this is user info that the user can't change from the UI"
    },
    user_metadata: {
      custom_data_from_function: "hurray this is some extra metadata"
    }
  };

  // console.log("user ", user);
  // console.log("context ", context);

  // const validateUser = user => {
  //   if (user !== undefined) {
  //     if (user.email.split("@")[1] === "netlify.com") {
  //       return ["editor"];
  //     }
  //   } else {
  //     return ["visitor"];
  //   }
  // };

  callback(null, {
    statusCode: 200,
    body: JSON.stringify(responseBody)
  });
};
