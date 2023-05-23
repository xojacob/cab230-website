export function userLogin(e, p) {
  return fetch("http://sefdb02.qut.edu.au:3000/user/login", {
    method: "POST",
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: e,
      password: p,
      longExpiry: false,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.message != undefined) {
        alert(data.message);
      } else return data;
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
}

export function tokenRefresh(t) {
  return fetch("http://sefdb02.qut.edu.au:3000/user/refresh", {
    method: "POST",
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      refreshToken: t,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.message != undefined) {
        alert(data.message);
      } else return data;
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
}

export function invalidateToken(t) {
  return fetch("http://sefdb02.qut.edu.au:3000/user/refresh", {
    method: "POST",
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      refreshToken: t,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.message != undefined) {
        alert(data.message);
      }
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
}
