function generatePassword() {
  const length = document.getElementById("length").value;

  const upper = "ABCDEFGHJKLMNPQRSTUVWXYZ";
  const lower = "abcdefghjkmnopqrstuvwxyz";
  const numbers = "123456789";
  const symbols = "!@#$%^&*()-_=+[]{};:,.<>?/|";

  const allChars = upper + lower + numbers + symbols;

  let password = "";

  // Ensure at least one of each type
  password += upper[Math.floor(Math.random() * upper.length)];
  password += lower[Math.floor(Math.random() * lower.length)];
  password += numbers[Math.floor(Math.random() * numbers.length)];
  password += symbols[Math.floor(Math.random() * symbols.length)];

  // Fill remaining characters randomly
  for (let i = password.length; i < length; i++) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }

  // Shuffle password
  password = password.split('').sort(() => 0.5 - Math.random()).join('');

  document.getElementById("password").innerText = password;
}
