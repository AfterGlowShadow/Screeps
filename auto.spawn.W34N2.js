var allowBuilder = 1;

var expectedHarvesters = 1;
var expectedHarvestersFar = 1;
var expectedMiner = 1;
var expectedRepairers = 1;
var expectedSuppliers = 1;
var expectedTransporters = 1;
var expectedUpgraders = 1;

var autoSpawn_W34N2 = {
    run: function() {
        var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder' && creep.pos.roomName == 'W34N2');
        var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester' && creep.pos.roomName == 'W34N2');
        var harvestersFar = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvesterFar' && creep.pos.roomName == 'W34N2');
        var miners = _.filter(Game.creeps, (creep) => creep.memory.role == 'miner' && creep.pos.roomName == 'W34N2');
        var repairers = _.filter(Game.creeps, (creep) => creep.memory.role == 'repairer' && creep.pos.roomName == 'W34N2');
        var suppliers = _.filter(Game.creeps, (creep) => creep.memory.role == 'supplier' && creep.pos.roomName == 'W34N2')
        var transporters = _.filter(Game.creeps, (creep) => creep.memory.role == 'transporter' && creep.pos.roomName == 'W34N2');
        var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader' && creep.pos.roomName == 'W34N2');
        
        //w34n2
        //1300 Energy
        if (harvesters.length < expectedHarvesters) {
            var newName = 'Harvester' + Game.time;
            console.log('Spawning new Harvester: ' + newName);
            Game.spawns['Spawn1'].spawnCreep([WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE], newName,
                {memory: {role: 'harvester'}});
        }

        //1900 Energy
        if (harvestersFar.length < expectedHarvestersFar) {
            var newName = 'HarvesterFar' + Game.time;
            console.log('Spawning new HarvesterFar: ' + newName);
            Game.spawns['Spawn1'].spawnCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE], newName,
                {memory: {role: 'harvesterFar', target: '5bbcab1e9099fc012e632e1b'}});
        }

        //800 Energy
        if (miners.length < expectedMiner) {
            var newName = 'Miner' + Game.time;
            console.log('Spawning new Miner: ' + newName);
            Game.spawns['Spawn1'].spawnCreep([WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE], newName,
                {memory: {role: 'miner'}});
        }

        //1800 Energy
        //no construction site no builder, 1 builder only, allowed to spawn
        var constructionTarget = Game.spawns['Spawn1'].pos.findClosestByRange(FIND_CONSTRUCTION_SITES);
        if (constructionTarget != null && builders.length == 0 && allowBuilder) {
            var newName = 'Builder' + Game.time;
            console.log('Spawning new Builder: ' + newName);
            Game.spawns['Spawn1'].spawnCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], newName,
            {memory: {role: 'builder'}});
        }

        //550 Energy
        if (repairers.length < expectedRepairers) {
            var newName = 'Repairers' + Game.time;
            console.log('Spawning new Repairers: ' + newName);
            Game.spawns['Spawn1'].spawnCreep([WORK,WORK,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE], newName,
                {memory: {role: 'repairer'}});
        }

        //200 Energy
        if (transporters.length < expectedTransporters) {
            var newName = 'Transporter' + Game.time;
            console.log('Spawning new Transporter: ' + newName);
            Game.spawns['Spawn1'].spawnCreep([CARRY,CARRY,MOVE,MOVE], newName,
                {memory: {role: 'transporter'}});
        }

        //150 Energy
        if (suppliers.length < expectedSuppliers + 1) {
            var newName = 'Supplier' + Game.time;
            console.log('Spawning new Supplier: ' + newName);
            Game.spawns['Spawn1'].spawnCreep([CARRY,CARRY,MOVE], newName,
                {memory: {role: 'supplier'}});
        }

        //1150 Energy
        if (upgraders.length < expectedUpgraders) {
            var newName = 'Upgrader' + Game.time;
            console.log('Spawning new Upgrader: ' + newName);
            Game.spawns['Spawn1'].spawnCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE], newName,
                {memory: {role: 'upgrader'}});
        }
        
        if (Game.spawns['Spawn1'].spawning) {
            var spawningCreep = Game.creeps[Game.spawns['Spawn1'].spawning.name];
            Game.spawns['Spawn1'].room.visual.text(
                '🛠️' + spawningCreep.memory.role,
                Game.spawns['Spawn1'].pos.x + 1,
                Game.spawns['Spawn1'].pos.y,
                {align: 'left', opacity: 0.8});
        }
        if (Game.spawns['Spawn_W34N2_2'].spawning) {
            var spawningCreep = Game.creeps[Game.spawns['Spawn_W34N2_2'].spawning.name];
            Game.spawns['Spawn_W34N2_2'].room.visual.text(
                '🛠️' + spawningCreep.memory.role,
                Game.spawns['Spawn_W34N2_2'].pos.x + 1,
                Game.spawns['Spawn_W34N2_2'].pos.y,
                {align: 'left', opacity: 0.8});
        }
    }
}

module.exports = autoSpawn_W34N2;