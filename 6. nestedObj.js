const person = {
  name: "Aman",
  age: 25,
  address: {
    street: "sawarkar chowk",
    state: "Madhya Pradesh",
    city: "Bhopal",
  },
};

const extractor = (person) => {
  let { name, address:{street} } = person;

  console.log({name, street});
};

extractor(person);
