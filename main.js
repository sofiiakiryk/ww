const name = prompt("");
const age = prompt("");
const email = prompt("");

const user = {
  name: name,
  age: age,
  email: email,
};

localStorage.setItem("user", JSON.stringify(user));
