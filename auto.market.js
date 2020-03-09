var autoDeal = {
    
    run: function(Terminal) {
        var buyOrder = Game.market.getAllOrders({type: ORDER_BUY, resourceType: RESOURCE_ENERGY});
        if (buyOrder[0].price > 0.010) { 
            var tax = Game.market.calcTransactionCost(100, buyOrder[0].roomName, Terminal.pos.roomName);
            Game.market.deal(buyOrder[0].id, 100, Terminal.pos.roomName);
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