var allowBuilder_W32N4 = 1;

var expectedHarvesters_W32N4 = 1;
var expectedHarvestersFar_W32N4 = 0;
var expectedMiner_W32N4 = 0;
var expectedRepairers_W32N4 = 0;
var expectedSuppliers_W32N4 = 1;
var expectedTransporters_W32N4 = 1;
var expectedUpgraders_W32N4 = 1;

var autoSpawn_W32N4 = {
    run: function() {
        var builders_W32N4 = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder' && creep.pos.roomName == 'W32N4');
        var harvesters_W32N4 = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester' && creep.pos.roomName == 'W32N4');
        var harvestersFar_W32N4 = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvesterFar' && creep.pos.roomName == 'W32N4');
        var miners_W32N4 = _.filter(Game.creeps, (creep) => creep.memory.role == 'miner' && creep.pos.roomName == 'W32N4');
        var repairers_W32N4 = _.filter(Game.creeps, (creep) => creep.memory.role == 'repairer' && creep.pos.roomName == 'W32N4');
        var suppliers_W32N4 = _.filter(Game.creeps, (creep) => creep.memory.role == 'supplier' && creep.pos.roomName == 'W32N4');
        var transporters_W32N4 = _.filter(Game.creeps, (creep) => creep.memory.role == 'transporter' && creep.pos.roomName == 'W32N4');
        var upgraders_W32N4 = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader' && creep.pos.roomName == 'W32N4');
        
        //W32N4
        //200 Energy
        if (harvesters_W32N4.length < expectedHarvesters_W32N4) {
            var newName = 'Harvester_W32N4_' + Game.time;
            console.log('Spawning new Harvester for W32N4: ' + newName);
            Game.spawns['Spawn_W32N4_1'].spawnCreep([WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE], newName,
                {memory: {role: 'harvester'}});
        }

        //200 Energy
        if (miners_W32N4.length < expectedMiner_W32N4) {
            var newName = 'Miner_W32N4_' + Game.time;
            console.log('Spawning new Miner: ' + newName);
            Game.spawns['Spawn_W32N4_1'].spawnCreep([WORK,CARRY,MOVE], newName,
                {memory: {role: 'miner'}});
        }

        //200 Energy
        //no construction site no builder, 1 builder only, allowed to spawn
        var constructionTarget = Game.spawns['Spawn_W32N4_1'].pos.findClosestByRange(FIND_CONSTRUCTION_SITES);
        if (constructionTarget != null && builders_W32N4.length == 0 && allowBuilder_W32N4) {
            var newName = 'Builder_W32N4_' + Game.time;
            console.log('Spawning new Builder: ' + newName);
            Game.spawns['Spawn_W32N4_1'].spawnCreep([WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE], newName,
            {memory: {role: 'builder'}});
        }

        //200 Energy
        if (repairers_W32N4.length < expectedRepairers_W32N4) {
            var newName = 'Repairers_W32N4_' + Game.time;
            console.log('Spawning new Repairers: ' + newName);
            Game.spawns['Spawn_W32N4_1'].spawnCreep([WORK,CARRY,MOVE], newName,
                {memory: {role: 'repairer'}});
        }

        //200 Energy
        if (transporters_W32N4.length < expectedTransporters_W32N4) {
            var newName = 'Transporter_W32N4_' + Game.time;
            console.log('Spawning new Transporter: ' + newName);
            Game.spawns['Spawn_W32N4_1'].spawnCreep([CARRY,CARRY,MOVE,MOVE], newName,
                {memory: {role: 'transporter'}});
        }

        //150 Energy
        if (suppliers_W32N4.length < expectedSuppliers_W32N4) {
            var newName = 'Supplier_W32N4_' + Game.time;
            console.log('Spawning new Supplier: ' + newName);
            Game.spawns['Spawn_W32N4_1'].spawnCreep([CARRY,CARRY,MOVE], newName,
                {memory: {role: 'supplier'}});
        }

        //200 Energy
        if (upgraders_W32N4.length < expectedUpgraders_W32N4) {
            var newName = 'Upgrader_W32N4_' + Game.time;
            console.log('Spawning new Upgrader: ' + newName);
            Game.spawns['Spawn_W32N4_1'].spawnCreep([WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE], newName,
                {memory: {role: 'upgrader'}});
        }
        
        if (Game.spawns['Spawn_W32N4_1'].spawning) {
            var spawningCreep = Game.creeps[Game.spawns['Spawn_W32N4_1'].spawning.name];
            Game.spawns['Spawn_W32N4_1'].room.visual.text(
                '🛠️' + spawningCreep.memory.role,
                Game.spawns['Spawn_W32N4_1'].pos.x + 1,
                Game.spawns['Spawn_W32N4_1'].pos.y,
                {align: 'left', opacity: 0.8});
        }
    }
}

module.exports = autoSpawn_W32N4;