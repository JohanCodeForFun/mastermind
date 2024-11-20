const knownColors = ['red', 'blue', 'green', 'yellow', 'orange', 'purple']

export const generateSecretPins = () => {
  const secretPins: string[] = [];

  for (let i = 0; i < 4; i++) {
    const randomIndex = Math.floor(Math.random() * knownColors.length)
    secretPins.push(knownColors[randomIndex])
  }

  return secretPins;
};