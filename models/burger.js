const { update } = require("../../Classwork/MVC/17-CatsApp/Solved/config/orm");
const orm = require("../config/orm");

const burger = {
    all(cb) {
        orm.all("burgers", (res) => cb(res));
    },
    create(cols, vals, cb) {
        orm.create("burgers", cols, vals, (res) => cb(res));
    },

    update(objColVals, condition, cb) {
        orm.update("burgers", objColVals, condition, (res) => cb(res));
    },
};

module.exports = burger;