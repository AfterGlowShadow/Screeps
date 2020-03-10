var autoLink = {
    
    run: function() {
        //W34N2
        Game.getObjectById('5e53f1600f2d8f234857fa24').transferEnergy(Game.getObjectById('5e648a81356a961615dd55c6'));
        if (Game.getObjectById('5e648a81356a961615dd55c6').store.getUsedCapacity(RESOURCE_ENERGY) > 600) {
            Game.getObjectById('5e648a81356a961615dd55c6').transferEnergy(Game.getObjectById('5e5374800a99ae4be2286c7a'), Game.getObjectById('5e648a81356a961615dd55c6').store.getUsedCapacity(RESOURCE_ENERGY) - 600);
        }
    }
}

module.exports = autoLink;