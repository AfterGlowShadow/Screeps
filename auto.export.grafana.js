var oldTime = new Date().getTime();
var newTime = 0;

var grafanaExport = {

    run: function() {
        if (!Memory.stats) Memory.stats = {};
        Memory.stats.gcl = (Game.gcl.progress / Game.gcl.progressTotal) * 100;
        Memory.stats.gclLevel = Game.gcl.level;
        Memory.stats.gpl = (Game.gpl.progress / Game.gpl.progressTotal) * 100;
        Memory.stats.gplLevel = Game.gpl.level;
        Memory.stats.cpu = Game.cpu.getUsed() * 100;
        Memory.stats.bucket = Game.cpu.bucket;
        Memory.stats.gameTime = Game.time;
        Memory.stats.credits = Game.market.credits;
        Memory.stats.storageW34N2 = Game.rooms['W34N2'].storage.store.getUsedCapacity();
        Memory.stats.storageW34N3 = Game.rooms['W34N3'].storage.store.getUsedCapacity();
        Memory.stats.terminalW34N2 = Game.rooms['W34N2'].terminal.store.getUsedCapacity();
        Memory.stats.terminalW34N3 = 0;
        var Order = Game.market.getAllOrders({type: ORDER_BUY, resourceType: RESOURCE_ENERGY});
        Memory.stats.valueEnergy = Order[0].price;
        var Order = Game.market.getAllOrders({type: ORDER_BUY, resourceType: RESOURCE_UTRIUM});
        Memory.stats.valueUtrium = Order[0].price;
        var Order = Game.market.getAllOrders({type: ORDER_SELL, resourceType: SUBSCRIPTION_TOKEN});
        Memory.stats.valueToken = Order[0].price / 1000000;
        
        newTime = new Date().getTime();
        Memory.stats.tickDuration = (newTime - oldTime) / 1000;
        oldTime = newTime;
    }
}

module.exports = grafanaExport;