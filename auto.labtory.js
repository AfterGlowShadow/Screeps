var autoLabtory = {
    
    run: function() {
        for (var name in Game.rooms) {
            var labs = Game.rooms[name].find(FIND_STRUCTURES, {
                filter: (structure) => structure.structureType == STRUCTURE_LAB
            });
            if (labs) {
                //labs[2].runReaction(labs[0], labs[1]);    //Z + K == ZK
                //labs[9].runReaction(labs[3], labs[4]);    //U + L == UL
                //labs[7].runReaction(labs[2], labs[9]);    //ZK + UL == G
            }
        }
    }
}

module.exports = autoLabtory;