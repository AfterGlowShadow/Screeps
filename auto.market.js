var autoDeal = {
    
    run: function(marketMode) {
        if (marketMode) {
            for (var name in Game.rooms) {
                if (Game.rooms[name].terminal == null) continue;
                Terminal = Game.rooms[name].terminal;
                if (Terminal.store.getUsedCapacity(RESOURCE_UTRIUM) < 1000) {
                    var buyOrder = Game.market.getAllOrders({type: ORDER_BUY, resourceType: RESOURCE_ENERGY});
                    var tax = Game.market.calcTransactionCost(1000, buyOrder[0].roomName, Terminal.pos.roomName);
                    if (buyOrder[0].price > 0.010) {
                        Game.market.deal(buyOrder[0].id, 1000, Terminal.pos.roomName);
                    }
                }
                else {
                    var buyOrder = Game.market.getAllOrders({type: ORDER_BUY, resourceType: RESOURCE_UTRIUM});
                    var tax = Game.market.calcTransactionCost(1000, buyOrder[0].roomName, Terminal.pos.roomName);
                    if (buyOrder[0].price > 0.010) {
                        Game.market.deal(buyOrder[0].id, 1000, Terminal.pos.roomName);
                    }
                }
            }
        }
        
        //var sellOrder = Game.market.getAllOrders({type: ORDER_SELL, resourceType: RESOURCE_ENERGY});
        //if (sellOrder[0].price >= 0.3) return;
        //var tax = Game.market.calcTransactionCost(100, sellOrder[0].roomName, Terminal.pos.roomName);
        //if (Terminal.store.getFreeCapacity() - tax > 0) {
        //  Game.market.deal(sellOrder[0].id, 100, Terminal.pos.roomName);
        //}
    }
};

module.exports = autoDeal;