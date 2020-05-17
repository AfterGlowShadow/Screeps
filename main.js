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
    
    //Game.creeps['attacker_W33N5_18096492'].moveTo(new RoomPosition(25, 20, 'W33N3'));
    
    // for (var name in Game.creeps) {
    //     var creep = Game.creeps[name];
    //     creep.suicide();
    // }
    
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
