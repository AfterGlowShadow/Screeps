var exportConsole   = require('auto.export.console');
var exportGrafana   = require('auto.export.grafana');
var autoLabtory     = require('auto.labtory');
var autoLink        = require('auto.link');
var autoMarket      = require('auto.market');
var autoSpawn       = require('auto.spawn');
var autoTower       = require('auto.tower');
var autoWork        = require('auto.work');

var marketMode = 0;

module.exports.loop = function() {
    //Game.spawns['Spawn2'].spawnCreep([TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,CLAIM,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE],'claim');
    //Game.creeps['claim'].moveTo(new RoomPosition(49, 3, 'W34N4'), {visualizePathStyle: {stroke: '#ffffff'}});
    //Game.creeps['claim'].moveTo(new RoomPosition(17, 6, 'W33N5'), {visualizePathStyle: {stroke: '#ffffff'}});
    //Game.spawns['Spawn2'].spawnCreep([TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,WORK,WORK,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE],'builder2');
    Game.creeps['builder2'].moveTo(new RoomPosition(49, 3, 'W34N4'), {visualizePathStyle: {stroke: '#ffffff'}});
    //Game.creeps['builder2'].moveTo(new RoomPosition(4, 34, 'W33N5'), {visualizePathStyle: {stroke: '#ffffff'}});
    //Game.creeps['builder2'].memory.role = 'builder';
    
    exportGrafana.run();
    
    exportConsole.run(marketMode);
    
    autoLabtory.run();
    
    autoLink.run();
    
    autoMarket.run(marketMode);
    
    autoSpawn.run();
    
    autoTower.run();
    
    autoWork.run();
}
