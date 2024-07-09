function addPoint(number) {
    if (number === 1) {
      userDamage += captanHeroRandom;
    } else if (number === 2) {
      userDamage += deadpoolHeroRandom;
    } else if (number === 3) {
      userDamage += spidermanHeroRandom;
    } else if (number === 4) {
      userDamage += thorHeroRandom;
    }
    gameStructor();
    gameFunc();
  }
  
  function gameFunc() {
    if (userDamage === enemyHealth) {
      userWinScore++;
      userDamage = 0;
      matchNumberCreator();
    } else if (userDamage > enemyHealth) {
      userLoseScore++;
      userDamage = 0;
      matchNumberCreator();
    }
    gameStructor();
  }
  
  function resetGame() {
    userWinScore = 0;
    userLoseScore = 0;
    userDamage = 0;
  
    gameStructor();
  }
  
  function gameStructor() {
    healthDamage.innerHTML = enemyHealth;
    winText.innerHTML = userWinScore;
    loseText.innerHTML = userLoseScore;
    damageText.innerHTML = userDamage;
  }
  
  function matchNumberCreator() {
    enemyHealth = Math.floor(Math.random() * 100) + 30;
    gameStructor();
  }
  
  
  matchNumberCreator();