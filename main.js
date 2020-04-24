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
