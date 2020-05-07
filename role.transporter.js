var roleTransporter = {

    /** @param {Creep} creep **/
    run: function(creep) {
        if (creep.store.getFreeCapacity() > 0) {
            var factory = creep.room.find(FIND_STRUCTURES, {
                filter: (structure) => structure.structureType == STRUCTURE_FACTORY
            });
            if (factory[0] && factory[0].store.getUsedCapacity(RESOURCE_BATTERY) > 0) {
                creep.drop(RESOURCE_ENERGY);
                if (creep.withdraw(factory[0], RESOURCE_BATTERY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(factory[0], {visualizePathStyle: {stroke: '#ffaa00'}});
                }
            }
            else if (factory[0] && factory[0].store.getUsedCapacity(RESOURCE_UTRIUM_BAR) > 0) {
                creep.drop(RESOURCE_ENERGY);
                if (creep.withdraw(factory[0], RESOURCE_UTRIUM_BAR) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(factory[0], {visualizePathStyle: {stroke: '#ffaa00'}});
                }
            }
            else {
                var targets = creep.room.find(FIND_STRUCTURES, {
                    filter: (i) => i.structureType == STRUCTURE_STORAGE
                });
                if (targets.length > 0) {
                    if (creep.withdraw(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffaa00'}});
                    }
                }
            }
        }
        else {
            if (creep.store.getUsedCapacity(RESOURCE_BATTERY) > 0) {
                if (creep.transfer(creep.room.terminal, RESOURCE_BATTERY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(creep.room.terminal, {visualizePathStyle: {stroke: '#ffaa00'}});
                }
            }
            else if (creep.store.getUsedCapacity(RESOURCE_UTRIUM_BAR) > 0) {
                if (creep.transfer(creep.room.terminal, RESOURCE_UTRIUM_BAR) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(creep.room.terminal, {visualizePathStyle: {stroke: '#ffaa00'}});
                }
            }
            else {
                switch (creep.pos.roomName) {
                    case 'W34N2':
                        var targets = creep.pos.findClosestByRange(FIND_STRUCTURES, {
                        // var targets = creep.room.find(FIND_STRUCTURES, {
                            filter: (i) =>  (i.structureType == STRUCTURE_LAB && i.store[RESOURCE_ENERGY] < 2000) || 
                                            (i.structureType == STRUCTURE_EXTENSION && i.store[RESOURCE_ENERGY] < 100) || 
                                            (i.structureType == STRUCTURE_SPAWN && i.store[RESOURCE_ENERGY] < 300) || 
                                            (i.structureType == STRUCTURE_TERMINAL && i.store[RESOURCE_ENERGY] < 10000)
                            
                        });
                        break;
                    case 'W34N3': 
                        var targets = creep.pos.findClosestByRange(FIND_STRUCTURES, {
                        // var targets = creep.room.find(FIND_STRUCTURES, {
                            filter: (i) =>  (i.structureType == STRUCTURE_EXTENSION && i.store[RESOURCE_ENERGY] < 50) || 
                                            (i.structureType == STRUCTURE_SPAWN && i.store[RESOURCE_ENERGY] < 300) || 
                                            (i.structureType == STRUCTURE_LINK && i.store[RESOURCE_ENERGY] < 400) || 
                                            (i.structureType == STRUCTURE_LAB && i.store[RESOURCE_ENERGY] < 2000) || 
                                            (i.structureType == STRUCTURE_TERMINAL && i.store[RESOURCE_ENERGY] < 10000)
                        });
                        break;
                    case 'W33N5': 
                        var targets = creep.pos.findClosestByRange(FIND_STRUCTURES, {
                        // var targets = creep.room.find(FIND_STRUCTURES, {
                            filter: (i) =>  (i.structureType == STRUCTURE_EXTENSION && i.store[RESOURCE_ENERGY] < 50) || 
                                            (i.structureType == STRUCTURE_SPAWN && i.store[RESOURCE_ENERGY] < 300) || 
                                            (i.structureType == STRUCTURE_LINK && i.store[RESOURCE_ENERGY] < 400) || 
                                            (i.structureType == STRUCTURE_TERMINAL && i.store[RESOURCE_ENERGY] < 10000)
                        });
                        break;
                }
                // if (targets.length > 0) {
                //     if (creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                //         creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffffff'}});
                //     }
                // }
                if (targets) {
                    if (creep.transfer(targets, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(targets, {visualizePathStyle: {stroke: '#ffffff'}});
                    }
                }
            }
        }
	} 
};

module.exports = roleTransporter;