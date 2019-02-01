export function handler(event, context, callback) {
  callback(null, {
    statusCode: 200,
    body: JSON.stringify({ msg: "Hello, this is a super secret function!" })
  });
}
