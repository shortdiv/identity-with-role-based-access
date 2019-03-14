import axios from "axios";

export function handler(event, context, callback) {
  //https://xenodochial-curran-e46c63.netlify.com

  const headers = event.headers;

  axios({
    url: `https://xenodochial-curran-e46c63.netlify.com/.netlify/functions/lock-site`,
    headers: { Authorization: `Bearer ${headers}` },
    method: "PUT",
    data: {
      msg: "hello"
    }
  }).then(res => {
    console.log(res);
  });

  callback(null, {
    statusCode: 200,
    body: JSON.stringify({ msg: "Hello, World!" })
  });
}
