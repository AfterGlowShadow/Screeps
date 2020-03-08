var roleTransporter = {

    /** @param {Creep} creep **/
    run: function(creep, marketMode) {
	    if (creep.store.getFreeCapacity() > 0) {
                var targets = creep.room.find(FIND_STRUCTURES, {
                    filter: (i) => i.structureType == STRUCTURE_STORAGE
                });
                if (targets.length > 0) {
                    if (creep.withdraw(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffaa00'}});
                    }
                }
        }
        else {
            tower = creep.pos.findClosestByRange(FIND_STRUCTURES, {
                filter: (structure) => structure.structureType == STRUCTURE_TOWER
            });
            if (tower.store.getFreeCapacity(RESOURCE_ENERGY) > 0) {
                if (creep.transfer(tower, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(tower, {visualizePathStyle: {stroke: '#ffffff'}});
                }
            }
            else {
                var Terminal = Game.getObjectById('5e5c74531c62123fc3606bce');
                if ((Terminal.store.getFreeCapacity(RESOURCE_ENERGY) > 0) && marketMode) {
                    if (creep.transfer(Terminal, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(Terminal, {visualizePathStyle: {stroke: '#ffffff'}});
                    }
                }
            }
        }
	} 
};

module.exports = roleTransporter;