var consoleExport = {
    
    run: function(marketMode) {
        console.log();
        console.log();
        
        console.log('Game Time is: <font color="red">' + Game.time + '</font>.');
        
        console.log('You have <font color="red">' + Game.market.credits + '</font> Credits aviliable.');

        for (var name in Game.rooms) {
            if (Game.rooms[name].controller == null) return;
            console.log('Room "<font color="red">' + name + '</font>" has <font color="red">' + Game.rooms[name].energyAvailable + '</font>/<font color="red">' + Game.rooms[name].energyCapacityAvailable + '</font> energy.\t' +
                        'Room "<font color="red">' + name + '</font>" controller level is <font color="red">' + Game.rooms[name].controller.level + '</font> , progress left <font color="red">' + (Game.rooms[name].controller.progressTotal - Game.rooms[name].controller.progress) + '</font>.\t');
        }
        
        console.log('Room "' + 'W34N2' + '" has <font color="red">' + Game.rooms['W34N2'].terminal.store.getUsedCapacity(RESOURCE_ENERGY) + '</font> Energy to sell, market mode is <font color="red">' + marketMode + '</font>.');
        
        for (var name in Memory.creeps) {
            if (!Game.creeps[name]) {
                delete Memory.creeps[name];
                console.log('Clearing non-existing creep memory:<font color="red">' +  name + '</font>.');
            }
        }
    }
}

module.exports = consoleExport;