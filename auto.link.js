var autoLink = {
    
    run: function() {
        //W34N2
        Game.getObjectById('5e53f1600f2d8f234857fa24').transferEnergy(Game.getObjectById('5e75daaa620257628cf0174c'));
        if (Game.getObjectById('5e648a81356a961615dd55c6').store.getUsedCapacity(RESOURCE_ENERGY) < 600) {
            Game.getObjectById('5e75daaa620257628cf0174c').transferEnergy(Game.getObjectById('5e648a81356a961615dd55c6'));
        }
        else {
            Game.getObjectById('5e75daaa620257628cf0174c').transferEnergy(Game.getObjectById('5e5374800a99ae4be2286c7a'));
        }
        
        //W34N3
        //Game.getObjectById('5e7a1efcdb243d6b9d2ca1bf').transferEnergy(Game.getObjectById('5e760945de04c23f69a3f65b'));
        
        //W33N5
        Game.getObjectById('5ea1928d295a76f3a853ed84').transferEnergy(Game.getObjectById('5ea18bf355db43685747593d'));
    }
}

module.exports = autoLink;