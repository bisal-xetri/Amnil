// In-line individually
export const name = "John";
export const age = 40;

//All at once at the bottom
const position = "Developer";
const isStudent = false;

export { position, isStudent };

const message = () => {
  const name = "Ram";
  const age = 30;
  return name + " is " + age + "years old.";
};
export default message;
