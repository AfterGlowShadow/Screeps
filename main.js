var exportConsole   = require('auto.export.console');
var exportGrafana   = require('auto.export.grafana');
var autoLabtory     = require('auto.labtory');
var autoLink        = require('auto.link');
var autoMarket      = require('auto.market');
var autoSpawn       = require('auto.spawn');
var autoTower       = require('auto.tower');
var autoWork        = require('auto.work');

var fixingMode = 1;
var marketMode = 1;

module.exports.loop = function() {
    //Game.creeps['claim'].moveTo(new RoomPosition(17, 6, 'W33N5'), {visualizePathStyle: {stroke: '#ffffff'}});
    //Game.creeps['claim'].reserveController(Game.creeps['claim'].room.controller);
    
    exportGrafana.run();
    
    exportConsole.run(marketMode);
    
    autoLabtory.run();
    
    autoLink.run();
    
    autoMarket.run(marketMode);
    
    autoSpawn.run();
    
    autoTower.run(fixingMode);
    
    autoWork.run();
}
