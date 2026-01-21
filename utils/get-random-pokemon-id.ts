export const getRandomPokemonID = (min = 1, max = 1010): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
