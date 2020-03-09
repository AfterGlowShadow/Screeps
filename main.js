var autoMarket = require('auto.market');
var roleBuilder = require('role.builder');
var roleHarvester = require('role.harvester');
var roleHarvesterFar = require('role.harvester.far');
var roleMiner = require('role.miner');
var roleRepairer = require('role.repairer');
var roleSupplier = require('role.supplier');
var roleTransporter = require('role.transporter');
var roleUpgrader = require('role.upgrader');
var oldTime = new Date().getTime();
var newTime = 0;
//var expectedBuilders = 1;

var fixingMode = 1;
var marketMode = 0;
var allowBuilder = 1;
var allowBuilder_W34N3 = 1;

var expectedHarvesters = 1;
var expectedHarvestersFar = 1;
var expectedMiner = 0;
var expectedRepairers = 1;
var expectedSuppliers = 1;
var expectedTransporters = 1;
var expectedUpgraders = 1;

var expectedHarvesters_W34N3 = 1;
var expectedHarvestersFar_W34N3 = 0;
var expectedMiner_W34N3 = 0;
var expectedRepairers_W34N3 = 0;
var expectedSuppliers_W34N3 = 1;
var expectedTransporters_W34N3 = 1;
var expectedUpgraders_W34N3 = 1;

module.exports.loop = function() {

    //if (Game.time % 1 == 0) {
        if (!Memory.stats) Memory.stats = {};
        Memory.stats.gcl = (Game.gcl.progress / Game.gcl.progressTotal) * 100;
        Memory.stats.gclLevel = Game.gcl.level;
        Memory.stats.gpl = (Game.gpl.progress / Game.gpl.progressTotal) * 100;
        Memory.stats.gplLevel = Game.gpl.level;
        Memory.stats.cpu = Game.cpu.getUsed() * 100;
        Memory.stats.bucket = Game.cpu.bucket;
        Memory.stats.gameTime = Game.time;
        Memory.stats.credits = Game.market.credits;
        Memory.stats.storageW34N2 = Game.rooms['W34N2'].storage.store.getUsedCapacity();
        Memory.stats.storageW34N3 = Game.rooms['W34N3'].storage.store.getUsedCapacity();
        Memory.stats.terminalW34N2 = Game.rooms['W34N2'].terminal.store.getUsedCapacity();
        Memory.stats.terminalW34N3 = 0;
        var Order = Game.market.getAllOrders({type: ORDER_BUY, resourceType: RESOURCE_ENERGY});
        Memory.stats.valueEnergy = Order[0].price;
        var Order = Game.market.getAllOrders({type: ORDER_BUY, resourceType: RESOURCE_UTRIUM});
        Memory.stats.valueUtrium = Order[0].price;
        var Order = Game.market.getAllOrders({type: ORDER_SELL, resourceType: SUBSCRIPTION_TOKEN});
        Memory.stats.valueToken = Order[0].price / 1000000;
    //}

    //console.clear();
    console.log();
    console.log();

    newTime = new Date().getTime();
    console.log('Game Time is: ' + Game.time + ' (' + (newTime - oldTime) / 1000 + ' second).');
    oldTime = newTime;

    console.log('You have ' + Game.market.credits + ' Credits aviliable.');

    for (var name in Game.rooms) {
        console.log('Room "' + name + '" has ' + Game.rooms[name].energyAvailable + '/' + Game.rooms[name].energyCapacityAvailable + ' energy.\t' +
                    'Room "' + name + '" controller level is ' + Game.rooms[name].controller.level + ' , progress left ' + (Game.rooms[name].controller.progressTotal - Game.rooms[name].controller.progress) + '.\t');
    }

    console.log('Room "' + 'W34N2' + '" has ' + Game.rooms['W34N2'].terminal.store.getUsedCapacity(RESOURCE_ENERGY) + ' Energy to sell, market mode is ' + marketMode + '.');
    if (marketMode) {
        autoMarket.run(Game.rooms['W34N2'].terminal);
    }

    for (var name in Memory.creeps) {
        if (!Game.creeps[name]) {
            delete Memory.creeps[name];
            console.log('Clearing non-existing creep memory:', name);
        }
    }

    for (var name in Game.rooms) {
        var towers = Game.rooms[name].find(FIND_STRUCTURES, {
            filter: (structure) => structure.structureType == STRUCTURE_TOWER
        });
        var closestHostile = towers[0].pos.findClosestByRange(FIND_HOSTILE_CREEPS);
        if (closestHostile) {
            for (var i = 0; i < towers.length; i++) towers[i].attack(closestHostile);
        }
        else if (fixingMode) {
            if (towers[0]) {
                var closestDamagedStructure = towers[0].pos.findInRange(FIND_STRUCTURES, 20, {
                    filter: (structure) => (structure.structureType != STRUCTURE_WALL) && (structure.structureType != STRUCTURE_RAMPART) && (structure.hits < structure.hitsMax)
                });
                closestDamagedStructure.sort((a,b) => a.hits - b.hits);
                if (closestDamagedStructure.length > 0 && towers[0] != null) {
                    towers[0].repair(closestDamagedStructure[0]);
                }
            }
            if (towers[1]) {
                var closestDamagedStructure = towers[1].pos.findInRange(FIND_STRUCTURES, 20, {
                    filter: (structure) => (structure.structureType != STRUCTURE_WALL) && (structure.structureType != STRUCTURE_RAMPART) && (structure.hits < structure.hitsMax)
                });
                closestDamagedStructure.sort((a,b) => a.hits - b.hits);
                if (closestDamagedStructure.length > 0) {
                    towers[1].repair(closestDamagedStructure[0]);
                }
            }
        }
    }

    Game.getObjectById('5e53f1600f2d8f234857fa24').transferEnergy(Game.getObjectById('5e648a81356a961615dd55c6'));
    if (Game.getObjectById('5e648a81356a961615dd55c6').store.getUsedCapacity(RESOURCE_ENERGY) > 600) {
        Game.getObjectById('5e648a81356a961615dd55c6').transferEnergy(Game.getObjectById('5e5374800a99ae4be2286c7a'), Game.getObjectById('5e648a81356a961615dd55c6').store.getUsedCapacity(RESOURCE_ENERGY) - 600);
    }

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
    console.log('Room "W34N2" has' +
            ' Creeps: ' + (builders.length + harvesters.length + harvestersFar.length + repairers.length + suppliers.length + transporters.length + upgraders.length) +
            '\tBuilders: ' + builders.length + '(' + allowBuilder + '/1800)' +
            '\tHarvesters: ' + harvesters.length  + '(' + expectedHarvesters + '/1300)' +
            '\tHarvestersFar: ' + harvestersFar.length + '(' + expectedHarvestersFar + '/1300)' +
            '\tMiner: ' + miners.length + '(' + expectedMiner + '/800)' +
            '\tRepairers: ' + repairers.length + '(' + expectedRepairers + '/550)' +
            '\tSuppliers: ' + suppliers.length + '(' + expectedSuppliers + '/150)' +
            '\tTransporters: ' + transporters.length + '(' + expectedTransporters + '/150)' +
            '\tUpgraders: ' + upgraders.length + '(' + expectedUpgraders + '/1400)'
            );
    console.log('Room "W34N3" has' +
            ' Creeps: ' + (builders_W34N3.length + harvesters_W34N3.length + harvestersFar_W34N3.length + repairers_W34N3.length + suppliers_W34N3.length + transporters_W34N3.length + upgraders_W34N3.length) +
            '\tBuilders: ' + builders_W34N3.length + '(' + allowBuilder_W34N3 + '/400)' +
            '\tHarvesters: ' + harvesters_W34N3.length  + '(' + expectedHarvesters_W34N3 + '/1300)' +
            '\tHarvestersFar: ' + harvestersFar_W34N3.length + '(N/A)\t' +
            '\tMiner: ' + miners_W34N3.length + '(' + expectedMiner_W34N3 + ')' +
            '\tRepairers: ' + repairers_W34N3.length + '(' + expectedRepairers_W34N3 + '/400)' +
            '\tSuppliers: ' + suppliers_W34N3.length + '(' + expectedSuppliers_W34N3 + '/100)' +
            '\tTransporters: ' + transporters_W34N3.length + '(' + expectedTransporters_W34N3 + '/150)' +
            '\tUpgraders: ' + upgraders_W34N3.length + '(' + expectedUpgraders_W34N3 + '/400)'
            );

    //1300 Energy
    if (harvesters.length < expectedHarvesters) {
        var newName = 'Harvester' + Game.time;
        console.log('Spawning new Harvester: ' + newName);
        Game.spawns['Spawn1'].spawnCreep([WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE], newName,
            {memory: {role: 'harvester'}});
    }

    //1300 Energy
    if (harvestersFar.length < expectedHarvestersFar) {
        var newName = 'HarvesterFar' + Game.time;
        console.log('Spawning new HarvesterFar: ' + newName);
        Game.spawns['Spawn1'].spawnCreep([WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE], newName,
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
    const constructionTarget = Game.spawns['Spawn1'].pos.findClosestByRange(FIND_CONSTRUCTION_SITES);
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

    //150 Energy
    if (transporters.length < expectedTransporters) {
        var newName = 'Transporter' + Game.time;
        console.log('Spawning new Transporter: ' + newName);
        Game.spawns['Spawn1'].spawnCreep([CARRY,MOVE,MOVE], newName,
            {memory: {role: 'transporter'}});
    }

    //150 Energy
    if (suppliers.length < expectedSuppliers) {
        var newName = 'Supplier' + Game.time;
        console.log('Spawning new Supplier: ' + newName);
        Game.spawns['Spawn1'].spawnCreep([CARRY,CARRY,MOVE], newName,
            {memory: {role: 'supplier'}});
    }

    //1400 Energy
    if (upgraders.length < expectedUpgraders) {
        var newName = 'Upgrader' + Game.time;
        console.log('Spawning new Upgrader: ' + newName);
        Game.spawns['Spawn1'].spawnCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE], newName,
            {memory: {role: 'upgrader'}});
    }

    //400 Energy
    const constructionTarget_W34N3 = Game.spawns['Spawn2'].pos.findClosestByRange(FIND_CONSTRUCTION_SITES);
    if (constructionTarget_W34N3 != null && builders_W34N3.length == 0 && allowBuilder_W34N3) {
        var newName = 'Builder_W34N3_' + Game.time;
        console.log('Spawning new Builder for W34N3: ' + newName);
        Game.spawns['Spawn2'].spawnCreep([WORK,WORK,CARRY,CARRY,MOVE,MOVE], newName,
            {memory: {role: 'builder'}});
    }

    //400 Energy
    if (harvesters_W34N3.length < expectedHarvesters_W34N3) {
        var newName = 'Harvester_W34N3_' + Game.time;
        console.log('Spawning new Harvester for W34N3: ' + newName);
        Game.spawns['Spawn2'].spawnCreep([WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE], newName,
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
        Game.spawns['Spawn2'].spawnCreep([CARRY,MOVE,MOVE], newName,
            {memory: {role: 'transporter'}});
    }

    //150 Energy
    if (suppliers_W34N3.length < expectedSuppliers_W34N3) {
        var newName = 'Supplier_W34N3_' + Game.time;
        console.log('Spawning new Supplier for W34N3: ' + newName);
        Game.spawns['Spawn2'].spawnCreep([CARRY,CARRY,MOVE], newName,
            {memory: {role: 'supplier'}});
    }

    //400 Energy
    if (upgraders_W34N3.length < expectedUpgraders_W34N3) {
        var newName = 'Upgrader_W34N3_' + Game.time;
        console.log('Spawning new Upgrader for W34N3: ' + newName);
        Game.spawns['Spawn2'].spawnCreep([WORK,WORK,CARRY,CARRY,MOVE,MOVE], newName,
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
    if (Game.spawns['Spawn2'].spawning) {
        var spawningCreep = Game.creeps[Game.spawns['Spawn2'].spawning.name];
        Game.spawns['Spawn2'].room.visual.text(
            '🛠️' + spawningCreep.memory.role,
            Game.spawns['Spawn2'].pos.x + 1,
            Game.spawns['Spawn2'].pos.y,
            {align: 'left', opacity: 0.8});
    }

    for (var name in Game.creeps) {
        var creep = Game.creeps[name];
        if (creep.memory.role == 'builder') {
            roleBuilder.run(creep);
        }
        if (creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
        if (creep.memory.role == 'harvesterFar') {
            roleHarvesterFar.run(creep);
        }
        if (creep.memory.role == 'miner') {
            roleMiner.run(creep);
        }
        if (creep.memory.role == 'repairer') {
            roleRepairer.run(creep);
        }
        if (creep.memory.role == 'supplier') {
            roleSupplier.run(creep);
        }
        if (creep.memory.role == 'transporter') {
            roleTransporter.run(creep);
        }
        if (creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }
        if (creep.hits < creep.hitsMax) {
            creep.say('Help ME !');
            creep.moveTo(22,45);
        }
    }

}
