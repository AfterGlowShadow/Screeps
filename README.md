#### Script

```javascript
var roleHarvester = require('role.harvester');
//引入模块并实例化

for(var name in Game.creeps) {
   	var creep = Game.creeps[name];
}
//选中所有creeps并执行

console.log('Room ' + name + ' has ' + Game.rooms[name].energyAviliable + ' energy.');
//控制台分别输出所有room的总energy
```
####  Console

```javascript
Game.spawns['Spawn1'].spawnCreep( [WORK, CARRY, MOVE], 'Harvester1' );
//新建一个creep

Game.creeps['Builder1'].memory.role = 'builder';
Game.creeps['Harvester1'].memory.role = 'harvester';
Game.creeps['Upgrader1'].memory.role = 'upgrader';
//creep内存分类

Game.spawns['Spawn1'].spawnCreep( [WORK, CARRY, MOVE], 'Builder1',{ memory: { role: 'builder' } } );
//新建一个creep并直接指派内存分类
```

#### Introduction

- 至少一个Upgrader以确保Base等级不降至0

	- 无Upgrader供能时开始降级倒数

	- | 等级 | tick  |
		| :--: | :---: |
		|  1   | 20000 |
		|  2   | 10000 |
		|  3   |       |
		|  4   |       |
		|  5   |       |
		|  6   |       |
		|  7   |       |
		|  8   |       |



- 1 Creep[WORK, CARRY, MOVE] = 200 Energy, 1 CARRY 搬运 50 Energy

- Creep 分类
	- Builder
	- Harvestor
	- Upgrader

- 一个Energy块可同时被八个方向采集，不可越过creep、墙体采集

- 模拟世界的世界名`Game.rooms = ‘sim’`

- Spawn每Tick自动生成1个Energy

- Creep分类出错可以直接更改memory.role来临时代替

- Energy原料重生成时间为300Tick
