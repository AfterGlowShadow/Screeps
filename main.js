var autoattack      = require('auto.attack');
var autodefence     = require('auto.defence');
var autoexpand      = require('auto.expand');
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
    
    console.log();
    console.log();
    
    //Game.creeps['claim'].moveTo(new RoomPosition(33, 30, 'W32N4'), {visualizePathStyle: {stroke: '#ffffff'}});
    //Game.creeps['expandBuilder'].moveTo(new RoomPosition(33, 30, 'W32N4'), {visualizePathStyle: {stroke: '#ffffff'}});
    autoattack.run();
    
    autodefence.run();
    
    autoexpand.run();
    
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
