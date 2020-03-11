var oldTime = new Date().getTime();
var newTime = 0;

var consoleExport = {

    run: function(marketMode) {
        console.log();
        console.log();
        
        newTime = new Date().getTime();
        console.log('Game Time is: <font color="yellow">' + Game.time + '</font> ' + '(<font color="yellow">' + ((newTime - oldTime) / 1000) + '</font>second).');
        oldTime = newTime;
        
        console.log('You have <font color="yellow">' + Game.market.credits + '</font> Credits aviliable.');

        for (var name in Game.rooms) {
            if (Game.rooms[name].controller == null) return;
            console.log('Room "<font color="yellow">' + name + '</font>' + 
                        '" has <font color="yellow">' + Game.rooms[name].energyAvailable + '</font>/<font color="yellow">' + Game.rooms[name].energyCapacityAvailable + '</font> energy' +
                        ', controller level is <font color="yellow">' + Game.rooms[name].controller.level + '</font>' + 
                        ', progress left <font color="yellow">' + (Game.rooms[name].controller.progressTotal - Game.rooms[name].controller.progress) + '</font>.\t');
        }

        console.log('Room "' + 'W34N2' + '" has <font color="yellow">' + Game.rooms['W34N2'].terminal.store.getUsedCapacity(RESOURCE_ENERGY) + '</font> Energy to sell, market mode is <font color="yellow">' + marketMode + '</font>.');

        for (var name in Memory.creeps) {
            if (!Game.creeps[name]) {
                delete Memory.creeps[name];
                console.log('Clearing non-existing creep memory:<font color="yellow">' +  name + '</font>.');
            }
        }
    }
}

module.exports = consoleExport;
