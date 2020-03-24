var autoLink = {
    
    run: function() {
        //W34N2
        Game.getObjectById('5e53f1600f2d8f234857fa24').transferEnergy(Game.getObjectById('5e75daaa620257628cf0174c'));
        if (Game.getObjectById('5e75daaa620257628cf0174c').store.getUsedCapacity(RESOURCE_ENERGY) > 100) {
            // if ((Game.getObjectById('5e75daaa620257628cf0174c').transferEnergy(Game.getObjectById('5e5374800a99ae4be2286c7a'), Game.getObjectById('5e75daaa620257628cf0174c').store.getUsedCapacity(RESOURCE_ENERGY) - 100)) == ERR_FULL) {
                Game.getObjectById('5e75daaa620257628cf0174c').transferEnergy(Game.getObjectById('5e648a81356a961615dd55c6'), Game.getObjectById('5e648a81356a961615dd55c6').store.getFreeCapacity(RESOURCE_ENERGY));
            // }
        }
        // if (Game.getObjectById('5e5374800a99ae4be2286c7a').store.getUsedCapacity(RESOURCE_ENERGY) > 200) {
        //     Game.getObjectById('5e5374800a99ae4be2286c7a').transferEnergy(Game.getObjectById('5e648a81356a961615dd55c6'), Game.getObjectById('5e648a81356a961615dd55c6').store.getFreeCapacity(RESOURCE_ENERGY));
        // }
        
        //W34N3
        Game.getObjectById('5e75e58589c08e4176c25fa9').transferEnergy(Game.getObjectById('5e760945de04c23f69a3f65b'));
    }
}

module.exports = autoLink;