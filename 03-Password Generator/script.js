const generateBtn = document.getElementById('btn-generate');
const option1 = document.getElementById('opt-1');
const option2 = document.getElementById('opt-2');

function generatePassword() {
  const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
  const numbers = '0123456789';
  const symbols = '!@#$%^&*()_+[]{}|;:,.<>?';

  const allChars = upperCase + lowerCase + numbers + symbols;

  let password = '';

  for (let i = 0; i < 15; i++) {
    const randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars[randomIndex];
  }

  return password;
}

generateBtn.addEventListener('click', () => {
  option1.textContent = generatePassword();
  option2.textContent = generatePassword();
});
