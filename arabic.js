const keyboardKeys = [
  'ض', 'ص', 'ث', 'ق', 'ف', 'غ', 'ع', 'ه', 'خ', 'ح',
  'ج', 'ش', 'س', 'ي', 'ب', 'ل', 'ا', 'ت', 'ن', 'م',
  'ك', 'ط', 'ئ', 'ء', 'ؤ', 'ر', 'لا', 'ى', 'ة', 'و',
  'ز', 'ظ', 'ذ', 'د', 'آ', 'ئَ', 'ئُ', 'ئِ', 'ً', 'ٌ',
  'ٍ', 'ّ', 'ْ', 'ُ', 'ِ', 'َ', 'ٰ', 'ٱ', 'ٓ', 'ٔ',
];


const keyboardContainer = document.getElementById('keyboard');
keyboardKeys.forEach(key => {
  const keyElement = document.createElement('div');
  keyElement.classList.add('key');
  keyElement.textContent = key;
  keyboardContainer.appendChild(keyElement);

  keyElement.addEventListener('click', () => {
    const inputField = document.getElementById('inputField');
    inputField.value += key;
  });
});

const allDeleteButton = document.getElementById('allDeleteButton');
allDeleteButton.addEventListener('click', () => {
  const inputField = document.getElementById('inputField');
  inputField.value = '';
});

const lastDeleteButton = document.getElementById('lastDeleteButton');
lastDeleteButton.addEventListener('click', () => {
  const inputField = document.getElementById('inputField');
  inputField.value = inputField.value.slice(0, -1);
});


// Handle space button click event
document.getElementById('spaceButton').addEventListener('click', () => {
  insertCharacter(' ');
});

// Insert the character into the input field
function insertCharacter(character) {
  const inputField = document.getElementById('inputField');
  const currentPosition = inputField.selectionStart;
  const value = inputField.value;
  
  const newValue = value.slice(0, currentPosition) + character + value.slice(currentPosition);
  inputField.value = newValue;
  
  // Update the cursor position
  inputField.selectionStart = currentPosition + 1;
  inputField.selectionEnd = currentPosition + 1;
}

// Virtual keyboard and dark mode scripts (Existing code)
// ...

function handleKey(character) {
  document.getElementById('inputField').value += character;
}


function search(baseUrl) {
  const query = document.getElementById('inputField').value.trim();
  if (query !== '') {
    const searchUrl = baseUrl + encodeURIComponent(query);
    window.open(searchUrl, '_blank');
  }
}
