export const getShortAction = async () => {
  return fetch("/api/short", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ url: "https://example.com" }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      return data;
    });
};

export const getLongAction = async () => {
  return fetch("/api/long", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ url: "https://example.com" }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      return data;
    });
};
