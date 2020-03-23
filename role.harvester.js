var roleHarvester = {

    /** @param {Creep} creep **/
    run: function(creep) {
        if (creep.store.getFreeCapacity() > 0) {
            //var links = Game.getObjectById('5e5374800a99ae4be2286c7a');
            var links = creep.pos.findClosestByRange(FIND_STRUCTURES, {
                filter: (structure) => (structure.structureType == STRUCTURE_LINK)
            });
            if (links) {
                if (links.store.getUsedCapacity(RESOURCE_ENERGY) > 0) {
                    if (creep.withdraw(links, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(links, {visualizePathStyle: {stroke: '#ffaa00'}});
                    }
                }
                else {
                    var sources = creep.pos.findClosestByRange(FIND_SOURCES_ACTIVE);
                    if (creep.harvest(sources) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(sources, {visualizePathStyle: {stroke: '#ffaa00'}});
                    }
                }
            }
            else {
                var sources = creep.pos.findClosestByRange(FIND_SOURCES_ACTIVE);
                if (creep.harvest(sources) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(sources, {visualizePathStyle: {stroke: '#ffaa00'}});
                }
            }
        }
        else {
            switch (creep.pos.roomName) {
                case 'W34N2':
                    var targets = creep.room.find(FIND_STRUCTURES, {
                        filter: (structure) =>  (structure.structureType == STRUCTURE_STORAGE && structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0) || 
                                                (structure.structureType == STRUCTURE_TERMINAL)
                    });
                    break;
                case 'W34N3':
                    var targets = creep.room.find(FIND_STRUCTURES, {
                        filter: (structure) =>  (structure.structureType == STRUCTURE_STORAGE && structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0)
                    });
                    break;
                case 'W33N5':
                    var targets = creep.room.find(FIND_STRUCTURES, {
                        filter: (structure) =>  (structure.structureType == STRUCTURE_SPAWN && structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0) || 
                                                (structure.structureType == STRUCTURE_EXTENSION && structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0)
                    });
                    break;
            }
            if (targets.length > 0) {
                if(creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffffff'}});
                }
            }
        }
	}
};

module.exports = roleHarvester;