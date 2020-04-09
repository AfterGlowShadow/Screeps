var expand          = require('auto.expand');
var exportConsole   = require('auto.export.console');
var exportGrafana   = require('auto.export.grafana');
var autoFactory     = require('auto.factory');
var autoLabtory     = require('auto.labtory');
var autoLink        = require('auto.link');
var autoMarket      = require('auto.market');
var autoSpawn       = require('auto.spawn');
var autoTower       = require('auto.tower');
var autoWork        = require('auto.work');

var marketMode = 1;

module.exports.loop = function() {
    //Game.spawns['Spawn2'].spawnCreep([CLAIM,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE],'claim');
    //Game.creeps['claim'].moveTo(new RoomPosition(49, 3, 'W34N4'), {visualizePathStyle: {stroke: '#ffffff'}});
    //Game.creeps['claim'].moveTo(new RoomPosition(17, 6, 'W33N5'), {visualizePathStyle: {stroke: '#ffffff'}});
    //Game.creeps['claim'].claimController(Game.creeps['claim'].room.controller);
    //Game.spawns['Spawn2'].spawnCreep([MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY],'builder1');
    //Game.creeps['builder1'].moveTo(new RoomPosition(49, 3, 'W34N4'), {visualizePathStyle: {stroke: '#ffffff'}});
    //Game.creeps['builder1'].moveTo(new RoomPosition(4, 34, 'W33N5'), {visualizePathStyle: {stroke: '#ffffff'}});
    //Game.creeps['builder1'].memory.role = 'builder';
    //Game.creeps['attacker'].moveTo(new RoomPosition(9, 3, 'W33N4'), {visualizePathStyle: {stroke: '#ffffff'}});
    
    console.log();
    console.log();
    
    expand.run();
    
    exportGrafana.run();
    
    exportConsole.run(marketMode);
    
    autoFactory.run();
    
    autoLabtory.run();
    
    autoLink.run();
    
    autoMarket.run(marketMode);
    
    autoSpawn.run();
    
    autoTower.run();
    
    autoWork.run();
}
