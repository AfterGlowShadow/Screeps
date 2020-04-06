var allowBuilder = 1;
var allowBuilder_W34N3 = 1;
var allowBuilder_W33N5 = 1;

var expectedHarvesters = 1;
var expectedHarvestersFar = 1;
var expectedMiner = 1;
var expectedRepairers = 1;
var expectedSuppliers = 1;
var expectedTransporters = 1;
var expectedUpgraders = 1;

var expectedHarvesters_W34N3 = 5;
var expectedHarvestersFar_W34N3 = 0;
var expectedMiner_W34N3 = 0;
var expectedRepairers_W34N3 = 0;
var expectedSuppliers_W34N3 = 1;
var expectedTransporters_W34N3 = 1;
var expectedUpgraders_W34N3 = 1;

var expectedHarvesters_W33N5 = 1;
var expectedHarvestersFar_W33N5 = 0;
var expectedMiner_W33N5 = 0;
var expectedRepairers_W33N5 = 0;
var expectedSuppliers_W33N5 = 0;
var expectedTransporters_W33N5 = 0;
var expectedUpgraders_W33N5 = 1;


var autoSpawn = {

    run: function() {
        var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder' && creep.pos.roomName == 'W34N2');
        var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester' && creep.pos.roomName == 'W34N2');
        var harvestersFar = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvesterFar' && creep.pos.roomName == 'W34N2');
        var miners = _.filter(Game.creeps, (creep) => creep.memory.role == 'miner' && creep.pos.roomName == 'W34N2');
        var repairers = _.filter(Game.creeps, (creep) => creep.memory.role == 'repairer' && creep.pos.roomName == 'W34N2');
        var suppliers = _.filter(Game.creeps, (creep) => creep.memory.role == 'supplier' && creep.pos.roomName == 'W34N2')
        var transporters = _.filter(Game.creeps, (creep) => creep.memory.role == 'transporter' && creep.pos.roomName == 'W34N2');
        var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader' && creep.pos.roomName == 'W34N2');
        
        var builders_W34N3 = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder' && creep.pos.roomName == 'W34N3');
        var harvesters_W34N3 = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester' && creep.pos.roomName == 'W34N3');
        var harvestersFar_W34N3 = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvesterFar' && creep.pos.roomName == 'W34N3');
        var miners_W34N3 = _.filter(Game.creeps, (creep) => creep.memory.role == 'miner' && creep.pos.roomName == 'W34N3');
        var repairers_W34N3 = _.filter(Game.creeps, (creep) => creep.memory.role == 'repairer' && creep.pos.roomName == 'W34N3');
        var suppliers_W34N3 = _.filter(Game.creeps, (creep) => creep.memory.role == 'supplier' && creep.pos.roomName == 'W34N3');
        var transporters_W34N3 = _.filter(Game.creeps, (creep) => creep.memory.role == 'transporter' && creep.pos.roomName == 'W34N3');
        var upgraders_W34N3 = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader' && creep.pos.roomName == 'W34N3');
        
        var builders_W33N5 = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder' && creep.pos.roomName == 'W33N5');
        var harvesters_W33N5 = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester' && creep.pos.roomName == 'W33N5');
        var harvestersFar_W33N5 = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvesterFar' && creep.pos.roomName == 'W33N5');
        var miners_W33N5 = _.filter(Game.creeps, (creep) => creep.memory.role == 'miner' && creep.pos.roomName == 'W33N5');
        var repairers_W33N5 = _.filter(Game.creeps, (creep) => creep.memory.role == 'repairer' && creep.pos.roomName == 'W33N5');
        var suppliers_W33N5 = _.filter(Game.creeps, (creep) => creep.memory.role == 'supplier' && creep.pos.roomName == 'W33N5');
        var transporters_W33N5 = _.filter(Game.creeps, (creep) => creep.memory.role == 'transporter' && creep.pos.roomName == 'W33N5');
        var upgraders_W33N5 = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader' && creep.pos.roomName == 'W33N5');
        
        var HTMLSheet = '<font color="cyan"><table border=2 align="center">' +
                            '<tr>' +
                                '<td>' + 'Room\t' + '</td>' +
                                '<td>' + 'Creeps\t' + '</td>' +
                                '<td>' + 'Builders\t' + '</td>' +
                                '<td>' + 'Harvesters\t' + '</td>' +
                                '<td>' + 'HarvestersFar\t' + '</td>' +
                                '<td>' + 'Miners\t' + '</td>' +
                                '<td>' + 'Repairers\t' + '</td>' +
                                '<td>' + 'Suppliers\t' + '</td>' +
                                '<td>' + 'Transporters\t' + '</td>' +
                                '<td>' + 'Upgraders\t' + '</td>' +
                            '</tr>' +
                            '<tr>' +
                                '<td>' + 'W34N2' + '</td>' +
                                '<td>' + (builders.length + harvesters.length + harvestersFar.length + miners.length + repairers.length + suppliers.length + transporters.length + upgraders.length) + '</td>' +
                                '<td>' + builders.length + '(' + allowBuilder + '/1800)</td>' +
                                '<td>' + harvesters.length + '(' + expectedHarvesters + '/1300)</td>' +
                                '<td>' + harvestersFar.length + '(' + expectedHarvestersFar + '/1300)</td>' +
                                '<td>' + miners.length + '(' + expectedMiner + '/800)</td>' +
                                '<td>' + repairers.length + '(' + expectedRepairers + '/550)</td>' +
                                '<td>' + suppliers.length + '(' + expectedSuppliers + '/150)</td>' +
                                '<td>' + transporters.length+ '(' + expectedTransporters + '/150)</td>' +
                                '<td>' + upgraders.length + '(' + expectedUpgraders_W33N5 + '/1150)</td>' +
                            '</tr>' +
                            '<tr>' +
                                '<td>' + 'W34N3' + '</td>' +
                                '<td>' + (builders_W34N3.length + harvesters_W34N3.length + harvestersFar_W34N3.length + miners_W34N3.length + repairers_W34N3.length + suppliers_W34N3.length + transporters_W34N3.length + upgraders_W34N3.length) + '</td>' +
                                '<td>' + builders_W34N3.length + '(' + allowBuilder_W34N3 + '/400)</td>' +
                                '<td>' + harvesters_W34N3.length + '(' + expectedHarvesters_W34N3 + '/1300)</td>' +
                                '<td>' + harvestersFar_W34N3.length + '(' + expectedHarvestersFar_W34N3 + '/1300)</td>' +
                                '<td>' + miners_W34N3.length + '(' + expectedMiner_W34N3 + '/800)</td>' +
                                '<td>' + repairers_W34N3.length + '(' + expectedRepairers_W34N3 + '/550)</td>' +
                                '<td>' + suppliers_W34N3.length + '(' + expectedSuppliers_W34N3 + '/150)</td>' +
                                '<td>' + transporters_W34N3.length + '(' + expectedTransporters_W34N3 + '/200)</td>' +
                                '<td>' + upgraders_W34N3.length + '(' + expectedUpgraders_W33N5 + '/1150)</td>' +
                            '</tr>' +
                            '<tr>' +
                                '<td>' + 'W33N5' + '</td>' +
                                '<td>' + (builders_W33N5.length + harvesters_W33N5.length + harvestersFar_W33N5.length + miners_W33N5.length + repairers_W33N5.length + suppliers_W33N5.length + transporters_W33N5.length + upgraders_W33N5.length) + '</td>' +
                                '<td>' + builders_W33N5.length + '(' + allowBuilder_W33N5 + '/400)</td>' +
                                '<td>' + harvesters_W33N5.length + '(' + expectedHarvesters_W33N5 + '/400)</td>' +
                                '<td>' + harvestersFar_W33N5.length + '(' + expectedHarvestersFar_W33N5 + '/400)</td>' +
                                '<td>' + miners_W33N5.length + '(' + expectedMiner_W33N5 + '/800)</td>' +
                                '<td>' + repairers_W33N5.length + '(' + expectedRepairers_W33N5 + '/550)</td>' +
                                '<td>' + suppliers_W33N5.length + '(' + expectedSuppliers_W33N5 + '/150)</td>' +
                                '<td>' + transporters_W33N5.length+ '(' + expectedTransporters_W33N5 + '/150)</td>' +
                                '<td>' + upgraders_W33N5.length + '(' + expectedUpgraders_W33N5 + '/400)</td>' +
                            '</tr>' +
                        '</table></font>';

        console.log(HTMLSheet);

        //w34n2
        //1300 Energy
        if (harvesters.length < expectedHarvesters) {
            var newName = 'Harvester' + Game.time;
            console.log('Spawning new Harvester: ' + newName);
            Game.spawns['Spawn1'].spawnCreep([WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE], newName,
                {memory: {role: 'harvester'}});
        }

        //1500 Energy
        if (harvestersFar.length < expectedHarvestersFar) {
            var newName = 'HarvesterFar' + Game.time;
            console.log('Spawning new HarvesterFar: ' + newName);
            Game.spawns['Spawn1'].spawnCreep([WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE], newName,
                {memory: {role: 'harvesterFar'}});
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

        //400 Energy
        var constructionTarget_W34N3 = Game.spawns['Spawn2'].pos.findClosestByRange(FIND_CONSTRUCTION_SITES);
        if (constructionTarget_W34N3 != null && builders_W34N3.length == 0 && allowBuilder_W34N3) {
            var newName = 'Builder_W34N3_' + Game.time;
            console.log('Spawning new Builder for W34N3: ' + newName);
            Game.spawns['Spawn2'].spawnCreep([WORK,WORK,CARRY,CARRY,MOVE,MOVE], newName,
            {memory: {role: 'builder'}});
        }

        //w34n3
        //1300 Energy
        if (harvesters_W34N3.length < expectedHarvesters_W34N3) {
            var newName = 'Harvester_W34N3_' + Game.time;
            console.log('Spawning new Harvester for W34N3: ' + newName);
            // Game.spawns['Spawn2'].spawnCreep([WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE], newName,
            Game.spawns['Spawn2'].spawnCreep([WORK,CARRY,MOVE], newName,
                {memory: {role: 'harvester'}});
        }

        //400 Energy
        if (repairers_W34N3.length < expectedRepairers_W34N3) {
            var newName = 'Repairer_W34N3_' + Game.time;
            console.log('Spawning new Repairer for W34N3: ' + newName);
            Game.spawns['Spawn2'].spawnCreep([WORK,WORK,CARRY,CARRY,MOVE,MOVE], newName,
                {memory: {role: 'repairer'}});
        }

        //150 Energy
        if (transporters_W34N3.length < expectedTransporters_W34N3) {
            var newName = 'Transporter_W34N3_' + Game.time;
            console.log('Spawning new Transporter for W34N3: ' + newName);
            Game.spawns['Spawn2'].spawnCreep([CARRY,CARRY,MOVE,MOVE], newName,
                {memory: {role: 'transporter'}});
        }

        //150 Energy
        if (suppliers_W34N3.length < expectedSuppliers_W34N3) {
            var newName = 'Supplier_W34N3_' + Game.time;
            console.log('Spawning new Supplier for W34N3: ' + newName);
            Game.spawns['Spawn2'].spawnCreep([CARRY,CARRY,MOVE], newName,
                {memory: {role: 'supplier'}});
        }

        //1150 Energy
        if (upgraders_W34N3.length < expectedUpgraders_W34N3) {
            var newName = 'Upgrader_W34N3_' + Game.time;
            console.log('Spawning new Upgrader for W34N3: ' + newName);
            Game.spawns['Spawn2'].spawnCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE], newName,
                {memory: {role: 'upgrader'}});
        }

        //W33N5
        //400 Energy
        if (harvesters_W33N5.length < expectedHarvesters_W33N5) {
            var newName = 'Harvester_W33N5_' + Game.time;
            console.log('Spawning new Harvester for W33N5: ' + newName);
            Game.spawns['Spawn3'].spawnCreep([WORK,WORK,CARRY,CARRY,MOVE,MOVE], newName,
                {memory: {role: 'harvester'}});
        }

        //200 Energy
        if (harvestersFar_W33N5.length < expectedHarvestersFar_W33N5) {
            var newName = 'HarvesterFar_W33N5_' + Game.time;
            console.log('Spawning new HarvesterFar: ' + newName);
            Game.spawns['Spawn3'].spawnCreep([WORK,CARRY,MOVE], newName,
                {memory: {role: 'harvesterFar'}});
        }

        //200 Energy
        if (miners_W33N5.length < expectedMiner_W33N5) {
            var newName = 'Miner_W33N5_' + Game.time;
            console.log('Spawning new Miner: ' + newName);
            Game.spawns['Spawn3'].spawnCreep([WORK,CARRY,MOVE], newName,
                {memory: {role: 'miner'}});
        }

        //200 Energy
        //no construction site no builder, 1 builder only, allowed to spawn
        var constructionTarget = Game.spawns['Spawn3'].pos.findClosestByRange(FIND_CONSTRUCTION_SITES);
        if (constructionTarget != null && builders_W33N5.length == 0 && allowBuilder_W33N5) {
            var newName = 'Builder_W33N5_' + Game.time;
            console.log('Spawning new Builder: ' + newName);
            Game.spawns['Spawn3'].spawnCreep([WORK,WORK,CARRY,CARRY,MOVE,MOVE], newName,
            {memory: {role: 'builder'}});
        }

        //200 Energy
        if (repairers_W33N5.length < expectedRepairers_W33N5) {
            var newName = 'Repairers_W33N5_' + Game.time;
            console.log('Spawning new Repairers: ' + newName);
            Game.spawns['Spawn3'].spawnCreep([WORK,CARRY,MOVE], newName,
                {memory: {role: 'repairer'}});
        }

        //200 Energy
        if (transporters_W33N5.length < expectedTransporters_W33N5) {
            var newName = 'Transporter_W33N5_' + Game.time;
            console.log('Spawning new Transporter: ' + newName);
            Game.spawns['Spawn3'].spawnCreep([CARRY,CARRY,MOVE,MOVE], newName,
                {memory: {role: 'transporter'}});
        }

        //150 Energy
        if (suppliers_W33N5.length < expectedSuppliers_W33N5) {
            var newName = 'Supplier_W33N5_' + Game.time;
            console.log('Spawning new Supplier: ' + newName);
            Game.spawns['Spawn3'].spawnCreep([CARRY,CARRY,MOVE], newName,
                {memory: {role: 'supplier'}});
        }

        //400 Energy
        if (upgraders_W33N5.length < expectedUpgraders_W33N5) {
            var newName = 'Upgrader_W33N5_' + Game.time;
            console.log('Spawning new Upgrader: ' + newName);
            Game.spawns['Spawn3'].spawnCreep([WORK,WORK,CARRY,CARRY,MOVE,MOVE], newName,
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

        if (Game.spawns['Spawn2'].spawning) {
            var spawningCreep = Game.creeps[Game.spawns['Spawn2'].spawning.name];
            Game.spawns['Spawn2'].room.visual.text(
                '🛠️' + spawningCreep.memory.role,
                Game.spawns['Spawn2'].pos.x + 1,
                Game.spawns['Spawn2'].pos.y,
                {align: 'left', opacity: 0.8});
        }

        if (Game.spawns['Spawn3'].spawning) {
            var spawningCreep = Game.creeps[Game.spawns['Spawn3'].spawning.name];
            Game.spawns['Spawn3'].room.visual.text(
                '🛠️' + spawningCreep.memory.role,
                Game.spawns['Spawn3'].pos.x + 1,
                Game.spawns['Spawn3'].pos.y,
                {align: 'left', opacity: 0.8});
        }

        //special rule
        //1.Spawn_W34N4_2 Gen supplier @W34N2 22, 19
        // var supplier = Game.spawns['Spawn_W34N2_2'].pos.findInRange(FIND_MY_CREEPS, 10, {
        //     filter: (creep) => creep.memory.role == 'supplier'
        // });
        // if (supplier.length == 0) {
        //     var newName = 'Supplier' + Game.time;
        //     console.log('Spawning new Supplier: ' + newName);
        //     Game.spawns['Spawn_W34N2_2'].spawnCreep([CARRY,CARRY,MOVE], newName,
        //         {memory: {role: 'supplier'}});
        // }
    }
}

module.exports = autoSpawn;
