var roleMiner = {
    
    run: function(creep) {
        
        var storage = creep.room.storage;
        
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
                if (lans[3].store.getFreeCapacity == 0) {
                    if (creep.transfer(labs[3], RESOURCE_UTRIUM) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(labs[3], {visualizePathStyle: {stroke: '#ffffff'}});
                    }
                }
                else {
                    if (creep.transfer(storage, RESOURCE_UTRIUM) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(storage, {visualizePathStyle: {stroke: '#ffffff'}});
                    }
                }
            }
        }
    }
};

module.exports = roleMiner;