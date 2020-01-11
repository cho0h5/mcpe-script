var players = [];
var coolTime = 0;

function entityAddedHook(entity) {
  if(Player.isPlayer(entity)) {
    players.push(entity);
  }
}

function entityRemovedHook(entity) {
  if(Player.isPlayer(entity)) {
    const idx = players.indexOf(entity);
    if(idx > -1) players.splice(idx, 1);
  }
}

function modTick() {
  const time = Level.getTime();
  if((12000 < time) && (time < 24000)) {
    coolTime -= 1;
  }
}
