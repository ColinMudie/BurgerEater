const orm = require("../config/orm");

const burger = {
    all(cb) {
        orm.all("burgers", (res) => cb(res));
    },
    create(cols, vals, cb) {
        orm.create("burgers", cols, vals, (res) => cb(res));
    },

    update(table, column, value, condition, cb) {
        orm.update("burgers", column, value, condition, (res) => cb(res));
    },
};

module.exports = burger;