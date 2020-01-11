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
  //if((12000 < time) && (time < 24000)) {
  if(true) {//Test
    if(coolTime < 0) {
      for(var player in players) {
        var x = Entity.getX(player);
        var y = Entity.getY(player);
        var z = Entity.getZ(player);
        for(var i = 0; i < 5; i++) {
          x += Math.round(Math.random()*10);
          y += Math.round(Math.random()*10);
          z += Math.round(Math.random()*10);
          Entity.spawnMob(x, y, z, typeId, skin);
        }
      }
      //coolTime = 20*5*60;
      coolTime = 20*5;//Test
    }
    coolTime -= 1;
  }
}
