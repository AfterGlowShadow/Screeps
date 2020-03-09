var autoLabtory = {
    
    runCreep: function (creep) {
        var terminal = Game.terminal;
        var labs = Game.rooms[name].find(FIND_STRUCTURE, {
            filter: (structure) => structure.structureType == STRUCTURE_LAB
        });
        if (terminal) {
            if (creep.store.getUsedCapacity == 0) {
                if (creep.withdraw(terminal, RESOURCE_UTRIUM) == ERR_NOT_IN_RANGE && labs[0].store.getFreeCapacity(RESOURCE_UTRIUM) > 0) {
                    creep.moveto(terminal, {visualizePathStyle: {stroke: '#ffaa00'}});
                }
                else if (creep.withdraw(terminal, RESOURCE_OXYGEN) == ERR_NOT_IN_RANGE && labs[1].store.getFreeCapacity(RESOURCE_OXYGEN) > 0) {
                    creep.moveto(terminal, {visualizePathStyle: {stroke: '#ffaa00'}});
                }
            }
            else {
                if (labs[2].getUsedCapacity > 0) {
                    if (creep.withdraw(labs[2], RESOURCE_UTRIUM_OXIDE) == ERR_NOT_IN_RANGE) {
                        creep.moveto(labs[2], {visualizePathStyle: {stroke: '#ffffff'}})
                    }
                }
            }
        }
    }
    
    runLabtory: function () {
        //labs[2].runReaction(labs[0], labs[1]);    //Z + K == ZK
        //labs[9].runReaction(labs[3], labs[4]);    //U + L == UL
        //labs[7].runReaction(labs[2], labs[9]);    //ZK + UL == G
        for (var name in Game.rooms) {
            var labs = Game.rooms[name].find(FIND_STRUCTURE, {
                filter: (structure) => structure.structureType == STRUCTURE_LAB
            });
            if (labs) {
                labs[2].runReaction(labs[0], labs[1]);
            }
        }
    }
}

module.exports = auto:abtory;