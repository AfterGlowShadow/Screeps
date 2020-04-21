var roleMiner = {
    
    run: function(creep) {
        
        var terminal = creep.room.terminal;
        var factory = creep.pos.findClosestByRange(FIND_STRUCTURES, {
            filter: (structure) => structure.structureType == STRUCTURE_FACTORY
        });
        
        if (creep.store.getFreeCapacity() > 0) {
            var mineral = creep.pos.findClosestByRange(FIND_MINERALS);
            if (creep.harvest(mineral) == ERR_NOT_IN_RANGE) {
                creep.moveTo(mineral, {visualizePathStyle: {stroke: '#ffaa00'}});
            }
        }
        else {
            var labs = creep.room.find(FIND_STRUCTURES, {
                filter: (structure) =>  (structure.structureType == STRUCTURE_LAB)
            });
            if (labs.length > 0) {
                if (labs[3] != null && labs[3].store.getFreeCapacity == 0) {
                    if (creep.transfer(labs[3], RESOURCE_UTRIUM) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(labs[3], {visualizePathStyle: {stroke: '#ffffff'}});
                    }
                }
                else {
                    if (creep.transfer(factory, RESOURCE_UTRIUM) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(factory, {visualizePathStyle: {stroke: '#ffffff'}});
                    }
                }
            }
            else {
                if (creep.transfer(factory, RESOURCE_UTRIUM) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(factory, {visualizePathStyle: {stroke: '#ffffff'}});
                }
            }
        }
    }
};

module.exports = roleMiner;