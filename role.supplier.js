var roleTransporter = {

    /** @param {Creep} creep **/
    run: function(creep) {
	    if (creep.store.getFreeCapacity() > 0) {
            var targets = creep.pos.findClosestByRange(FIND_STRUCTURES, {
                filter: (structure) =>  (structure.structureType == STRUCTURE_STORAGE)
            });
            if (targets) {
                if (creep.withdraw(targets, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets, {visualizePathStyle: {stroke: '#ffaa00'}});
                }
            }
        }
        else {
            tower = creep.pos.findClosestByRange(FIND_STRUCTURES, {
                filter: (structure) =>  (structure.structureType == STRUCTURE_TOWER && structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0) || 
                                        (structure.structureType == STRUCTURE_TERMINAL && structure.store.getUsedCapacity(RESOURCE_ENERGY) < 10000) || 
                                        (structure.structureType == STRUCTURE_LINK)
            });
            if (tower) {
                if (creep.transfer(tower, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(tower, {visualizePathStyle: {stroke: '#ffffff'}});
                }
            }
        }
	} 
};

module.exports = roleTransporter;