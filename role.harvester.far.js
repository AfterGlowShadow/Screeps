var roleHarvesterFar = {

    /** @param {Creep} creep **/
    run: function(creep) {
	    if (creep.store.getFreeCapacity() > 0) {
            var sources = creep.room.find(FIND_SOURCES);
            if (creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[0], {visualizePathStyle: {stroke: '#ffaa00'}});
            }
        }
        else {
            var tower2 = Game.getObjectById('5e53bbd82f9d267abd94499d');
            if (tower2.store.getFreeCapacity(RESOURCE_ENERGY) > 0) {
                if (creep.transfer(tower2, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(tower2.pos, {visualizePathStyle: {stroke: '#ffffff'}});
                }
            }
            else {
                var links = Game.getObjectById('5e53f1600f2d8f234857fa24');
                if (creep.transfer(links, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(links.pos, {visualizePathStyle: {stroke: '#ffffff'}});
                }
            }
        }
	}
};

module.exports = roleHarvesterFar;