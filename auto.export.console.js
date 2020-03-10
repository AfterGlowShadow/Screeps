var consoleExport = {
    
    run: function(marketMode) {
        console.log();
        console.log();
        
        console.log('Game Time is: ' + Game.time + '.');
        
        console.log('You have ' + Game.market.credits + ' Credits aviliable.');

        for (var name in Game.rooms) {
            console.log('Room "' + name + '" has ' + Game.rooms[name].energyAvailable + '/' + Game.rooms[name].energyCapacityAvailable + ' energy.\t' +
                        'Room "' + name + '" controller level is ' + Game.rooms[name].controller.level + ' , progress left ' + (Game.rooms[name].controller.progressTotal - Game.rooms[name].controller.progress) + '.\t');
        }
        
        console.log('Room "' + 'W34N2' + '" has ' + Game.rooms['W34N2'].terminal.store.getUsedCapacity(RESOURCE_ENERGY) + ' Energy to sell, market mode is ' + marketMode + '.');
        
        for (var name in Memory.creeps) {
            if (!Game.creeps[name]) {
                delete Memory.creeps[name];
                console.log('Clearing non-existing creep memory:', name);
            }
        }
    }
}

module.exports = consoleExport;