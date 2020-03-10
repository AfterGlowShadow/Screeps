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
    
    exportGrafana.run();
    
    exportConsole.run(marketMode);
    
    autoMarket.run(marketMode);
    
    autoTower.run(fixingMode);
    
    autoSpawn.run();
    
    autoWork.run();
    
    autoLink.run();
}
