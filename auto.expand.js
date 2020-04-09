var targetRoom = '';
var expandRoom = '';
var finished = 0;

var autoExpand = {
    run: function() {
        if (targetRoom != '' && expandRoom != '' && finished) {
            console.log('Expanding <font color="cyan">' + targetRoom + '</font> from <font color="cyan">' + expandRoom + '</font>.');
            var spawns = Game.rooms[expandRoom].find(FIND_STRUCTURES, {
                filter : spawn => (spawn.structureType == STRUCTURE_SPAWN)
            });
            if (spawns.length > 0) {
                if (spawns[0].spawnCreep([CLAIM,CLAIM,MOVE,MOVE], 'claim', {memory:{role:'claim'}}) != ERR_NAME_EXISTS) {}
                if (spawns[0].spawnCreep([WORK,WORK,CARRY,CARRY,MOVE,MOVE], 'expandBuilder', {memory:{role:'expandBuilder'}}) == ERR_NAME_EXISTS) {}
            
                if (Game.creeps['claim'].pos.roomName == targetRoom && Game.creeps['claim'].claimController(Game.creeps['claim'].room.controller) == ERR_NOT_IN_RANGE) {
                    Game.creeps['claim'].moveTo(Game.creeps['claim'].room.controller.pos);
                }
                
                if (Game.creeps['expandBuilder'].pos.roomName == targetRoom) {
                    Game.creeps['expandBuilder'].memory.role = 'builder';
                }
            }
        }
        else {
            console.log('<font color="cyan">No</font> plan for expanding now.');
        }
    }
}

module.exports = autoExpand;