export async function onRequest(context) {
  const auth = context.request.headers.get("Authorization");

  if (!auth) {
    return new Response("Unauthorized", {
      status: 401,
      headers: {
        "WWW-Authenticate": 'Basic realm="Staging"',
      },
    });
  }

  const [, encoded] = auth.split(" ");
  const decoded = atob(encoded);
  const [user, pass] = decoded.split(":");

  if (user === "admin" && pass === "staging123") {
    return context.next();
  }

  return new Response("Unauthorized", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Staging"',
    },
  });
}