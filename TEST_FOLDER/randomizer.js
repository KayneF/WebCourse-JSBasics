// Number Randomizer

function randomizer(min, max) {
    const rng = (parseInt(Math.random() * max) + min);
    console.log(`Resultado: ${Math.round(rng)}`);
}

const min = 1;
const max = 8;

randomizer(min, max);

