let characterCount = 0;

function updateCharacterCount() {
  const textArea = document.getElementById('text-input');
  const counterDisplay = document.getElementById('character-count');
  characterCount = textArea.value.length;

  counterDisplay.textContent = `Caracteres: ${characterCount}`;
}

function resetCharacterCount() {
  const textArea = document.getElementById('text-input');
  const counterDisplay = document.getElementById('character-count');
  
  textArea.value = '';
  characterCount = 0;
  counterDisplay.textContent = 'Caracteres: 0';
}

window.onload = function() {
  const textArea = document.getElementById('text-input');
  const resetButton = document.getElementById('reset-btn');

  textArea.addEventListener('input', updateCharacterCount);

  resetButton.addEventListener('click', resetCharacterCount);
}