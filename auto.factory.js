var produseMode = 0;

var autoFactory = {
    
    run: function() {
        for (var name in Game.rooms) {
            var factory = Game.rooms[name].controller.room.find(FIND_STRUCTURES, {
                filter: (structure) => structure.structureType == STRUCTURE_FACTORY
            });
            if (produseMode) {
                if (factory.length > 0) {
                    //50 battery == 600 energy
                    factory[0].produce(RESOURCE_BATTERY);
                }
                else {
                    continue;
                }
            }
        }
    }
}

module.exports = autoFactory;