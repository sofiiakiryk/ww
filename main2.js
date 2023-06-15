const userJSON = localStorage.getItem("user");
const user = JSON.parse(userJSON);

console.log("Ім'я: " + user.name);
console.log("Вік: " + user.age);
console.log("Електронна пошта: " + user.email);
