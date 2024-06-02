let data = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
};

// Ubahlah data tersebut  menggunakan spread operator menjadi:

let newData = {
  ...data,
  name: "Habib Muhammad Rizki",
  email: "habib@gmail.com",
  hobby: "Memancing",
};

console.log(newData);

// Ambilah data “street dan city” tersebut menggunakan destructuring

const {
  address: { street, city },
} = data;

console.log(street);
console.log(city);
