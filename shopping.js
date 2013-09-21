var eyeliner = {
    price: 5.45,
    name: "eyeliner",
    company: "loreal"
}

var lipstick = {
    price: 8.36,
    name: "lipstick",
    company: "wet & wild"
}

var shopping_cart = {
    items: [],
    add: function(item) {
        this.items.push(item);
    },
    remove: function(name) {
        for(var i = 0; i < this.items.length; i++) {
            if (this.items[i].name === name) {
               this.items.splice(i,1);
               // items_len--;
               // i--;
                return;
            }
        }
    },
    total: function() {
        var cost = 0.0;
        for(var i = 0; i < this.items.length; i++) {
            cost += this.items[i].price;
        }
        return cost;
    }
}



shopping_cart.add(lipstick);
console.log(shopping_cart.total());

shopping_cart.add(lipstick);
console.log(shopping_cart.total());

shopping_cart.add(eyeliner);
console.log(shopping_cart.total());

shopping_cart.remove("lipstick");
console.log(shopping_cart.total());

//console.log(shopping_cart);
