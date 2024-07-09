let userDamage = 0;
let userWinScore = 0;
let userLoseScore = 0;
let enemyHealth = 0;

const healthDamage = document.getElementById('healthDamage');
const winText = document.getElementById('wins');
const loseText = document.getElementById('losses');
const damageText = document.getElementById('damage');

const captanHeroRandom = Math.floor(Math.random() * 20) + 1;
const deadpoolHeroRandom = Math.floor(Math.random() * 20) + 1;
const spidermanHeroRandom = Math.floor(Math.random() * 20) + 1;
const thorHeroRandom = Math.floor(Math.random() * 20) + 1;