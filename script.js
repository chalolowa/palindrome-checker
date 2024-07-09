const textInput = document.getElementById('text-input');
const checkButton = document.getElementById('check-btn');
const result = document.getElementById('result');

const reversedInput = (input) => {
  return input.toLowerCase().replace(/[^a-z0-9]/g, '').split("").reverse().join("");
}

const checkPalindrome = (input) => {
  const reversed = reversedInput(input);
  const normalizedInput = input.toLowerCase().replace(/[^a-z0-9]/g, '');
  if (normalizedInput === reversed) {
    result.innerText = `${input} is a palindrome`;
  } else {
    result.innerText = `${input} is not a palindrome`;
  }
}

const checkInputButton = () => {
  const input = textInput.value;
  if (!input) {
    alert("Please input a value")
  } else {
      checkPalindrome(input);
  }
}

checkButton.addEventListener("click", checkInputButton);