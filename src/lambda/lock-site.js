import axios from "axios";

export function handler(event, context, callback) {
  //https://xenodochial-curran-e46c63.netlify.com

  axios({
    url: ``,
    headers: { Authorization: `Bearer ${process.env.VUE_APP_ACCESS_TOKEN}` },
    method: "GET"
  }).then(res => {
    console.log(res);
  });

  callback(null, {
    statusCode: 200,
    body: JSON.stringify({ msg: "Hello, World!" })
  });
}
