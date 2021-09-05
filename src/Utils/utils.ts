import * as _ from "lodash";
// Check if String is Number
const StringIsNumber = (value) => Number.isNaN(Number(value)) === false;

// Convert enum into array
const EnumToArray = (enumme) => Object.keys(enumme).map((key) => enumme[key]);

// Convert to proper string
const makeString = (value) => {
  if (value === null || value === undefined) {
    return "";
  }
  return value.toString().trim();
};

/**
 * Searches for word in a pharse
 * @param  {string} pharse The pharse to search in
 * @param  {string} searchPharse The pharse to search
 * @return {boolean} If word was found or not
 */
const searchWord = (pharse: string, searchPharse: string) =>
  makeString(pharse)
    .toLowerCase()
    .indexOf(makeString(searchPharse).toLowerCase()) > -1;

/**
 * Searches for word in an object
 * @param  {string} obj The object to search in
 * @param  {string} searchPharse The pharse to search
 * @return {boolean} If word was found or not in any property of the object
 */
const searchWordInObject = (obj: any, searchPharse: string) => {
  if (obj) {
    const flag = (Object.keys(obj) || []).some((key) =>
      searchWord(obj[key], searchPharse)
    );
    return flag;
  }
  return false;
};

/**
 * Generates random number
 * @param  {number} maxValue The max value allowed
 * @param  {boolean} allowDecimal Allow decimal points or not
 * @return {number} The random number generated between 0 and maxValue
 */
const randomizeNumber = (
  maxValue: number = 100,
  allowDecimal: boolean = false
) => {
  const random = allowDecimal
    ? +(Math.random() * maxValue).toFixed(2)
    : Math.floor(Math.random() * maxValue);
  return random;
};

/**
 * Generates random text
 * @param  {number} length The number of random characters
 * @param  {boolean} getWord Get word wise, if this option is enabled the length param is not taken into consideration
 * @return {number} The random text
 */
const randomizeText = (length: number = 100, getWord: boolean = false) => {
  const loremIpsum =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem.Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid.Reprehenderit, quia.Quo neque error repudiandae fuga ? Ipsa laudantium molestias eos sapiente officiis modi at sunt excepturi expedita sint ? Sed quibusdam recusandae alias error harum maxime adipisci amet laborum.Perspiciatis minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit quibusdam sed amet tempora.Sit laborum ab, eius fugit doloribus tenetur fugiat, temporibus enim commodi iusto libero magni deleniti quod quam consequuntur! Commodi minima excepturi repudiandae velit hic maxime doloremque.Quaerat provident commodi consectetur veniam similique ad earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore suscipit quas ? Nulla, placeat.Voluptatem quaerat non architecto ab laudantium modi minima sunt esse temporibus sint culpa, recusandae aliquam numquam totam ratione voluptas quod exercitationem fuga.Possimus quis earum veniam quasi aliquam eligendi, placeat qui corporis!";

  if (getWord) {
    const textArray = loremIpsum.split(" ");
    let finalText = [];
    const random = Math.floor(Math.random() * textArray.length);
    finalText = _.sampleSize(_.cloneDeep(textArray), random);
    return finalText.join(" ");
  }
  const startAt = Math.floor(Math.random() * 100);
  return loremIpsum.substring(startAt, startAt + length);
};

/**
 * Randomizes given array
 * @param  {array} myArray The array to manupilate
 * @param  {number} length The length of random array
 * @return {array} The random array generated
 */
const randomizeArray = (myArray: any[] = [], length: number = 0) => {
  let final = [];
  let allowedLength = 0;
  if (length > 0) {
    allowedLength = length <= myArray.length ? length : myArray.length;
  } else {
    allowedLength = Math.floor(Math.random() * myArray.length);
  }
  final = _.shuffle(_.sampleSize(_.cloneDeep(myArray), allowedLength));
  return final;
};

const selectFromArray = (myArray: any[]) =>
  myArray[Math.floor(Math.random() * myArray.length)];

const randomizeEmail = () => {
  const chars = "abcdefghijklmnopqrstuvwxyz1234567890";
  let email = "";
  for (let i = 0; i < 12; i += 1) {
    email += chars[Math.floor(Math.random() * chars.length)];
  }
  return `${email}@gmail.com`;
};

const randomizeFullName = () =>
  `${randomizeText(Math.floor(Math.random() * 9))} ${randomizeText(
    Math.floor(Math.random() * 12)
  )}`;

export {
  EnumToArray,
  StringIsNumber,
  makeString,
  searchWord,
  searchWordInObject,
  randomizeNumber,
  randomizeText,
  randomizeArray,
  selectFromArray,
  randomizeEmail,
  randomizeFullName,
};
