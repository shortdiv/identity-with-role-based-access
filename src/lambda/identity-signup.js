exports.handler = function(event, context, callback) {
  const { user } = context.clientContext;

  const responseBody = {
    app_metadata: {
      roles: validateUser(user.email),
      my_user_info: "this is user info that the user can't change from the UI"
    },
    user_metadata: {
      custom_data_from_function: "hurray this is some extra metadata"
    }
  };

  console.log("user ", user);

  const validateUser = email => {
    if (email.split("@")[1] === "netlify.com") {
      return ["editor"];
    } else {
      return ["visitor"];
    }
  };

  callback(null, {
    statusCode: 200,
    body: JSON.stringify(responseBody)
  });
};
