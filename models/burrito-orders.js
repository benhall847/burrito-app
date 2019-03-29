const db = require('./data');

class BurritoOrder {
    constructor(id, name, sauce, side){
        this.id = id;
        this.name = name;
        this.sauce = sauce;
        this.side = side;
    };
    static getAll(){
        return db.any(`select * from burrito_orders`)
            .then((burritoDataArray)=>{
                return burritoDataArray.map((data)=>{
                    return new BurritoOrder(data.id, data.name, data.sauce, data.side);
                });
            });
    };

    static getByName(name){
        return db.any(`select * from burrito_orders where name=$1`,[name])
            .then((burritoDataArray)=>{
                return burritoDataArray.map((data)=>{
                    return new BurritoOrder(data.id, data.name, data.sauce, data.side);
                });
            });
    };
};

module.exports = BurritoOrder