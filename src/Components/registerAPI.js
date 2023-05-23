import { useEffect, useState } from "react";
/**
export function userRegistration(email, password) {
  const [error, setError] = useState(null);
  const [message, setMessage] = useState("");
  useEffect(() => {
    Registration(email, password)
      .catch((e) => {
        setError(e);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [email, password]);

  return { loading, error, message };
}
 */

export function userRegistration(e, p) {
  fetch("http://sefdb02.qut.edu.au:3000/user/register", {
    method: "POST",
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: e,
      password: p,
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      alert(res.message);
      console.log(res.message);
    });
}
