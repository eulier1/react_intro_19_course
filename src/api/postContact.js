export default async function postContact(name, message, email) {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ name, message, email }),
  });

  if (!response.ok) {
    throw new Error("Network response was not ok. Send Help");
  }

  return response.json();
}
