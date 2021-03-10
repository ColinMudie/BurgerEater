const orm = require("../config/orm");

const burger = {
    all(cb) {
        orm.all("burgers", (res) => cb(res));
    },
    create(column, value, cb) {
        orm.create("burgers", column, value, (res) => cb(res));
    },

    update(column, value, condition, cb) {
        orm.update("burgers", column, value, condition, (res) => cb(res));
    },
};

module.exports = burger;