"use strict";
//Reto1
exports.__esModule = true;
exports.AgenMob = exports.Mobile = void 0;
var Mobile = /** @class */ (function () {
    function Mobile(name, model, trademark, sdSize, color, is5G, cameraNumber, price) {
        this.name = name;
        this.model = model;
        this.trademark = trademark;
        this.sdSize = sdSize;
        this.color = color;
        this.is5G = is5G;
        this.cameraNumber = cameraNumber;
        this.price = price;
    }
    Mobile.prototype.setName = function (name) {
        this.name = name;
    };
    Mobile.prototype.getName = function () {
        return this.name;
    };
    Mobile.prototype.setModel = function (model) {
        this.model = model;
    };
    Mobile.prototype.getModel = function () {
        return this.model;
    };
    Mobile.prototype.setTrademark = function (trademark) {
        this.trademark = trademark;
    };
    Mobile.prototype.getTrademark = function () {
        return this.trademark;
    };
    Mobile.prototype.setSdSize = function (sdSize) {
        this.sdSize = sdSize;
    };
    Mobile.prototype.getSdSize = function () {
        return this.sdSize;
    };
    Mobile.prototype.setColor = function (color) {
        this.color = color;
    };
    Mobile.prototype.getColor = function () {
        return this.color;
    };
    Mobile.prototype.setIs5G = function (is5G) {
        this.is5G = is5G;
    };
    Mobile.prototype.getIs5G = function () {
        return this.is5G;
    };
    Mobile.prototype.setCameraNumber = function (cameraNumber) {
        this.cameraNumber = cameraNumber;
    };
    Mobile.prototype.getCameraNumber = function () {
        return this.cameraNumber;
    };
    Mobile.prototype.setPrice = function (price) {
        this.price = price;
    };
    Mobile.prototype.getPrice = function () {
        return this.price;
    };
    Mobile.prototype.printMob = function () {
        console.log("\u00B7 \"The characteristics of the mobile " + this.name + " are:\"\n    \u00B7 Name: " + this.name + "\n    \u00B7 Model: " + this.model + "\n    \u00B7 Trademark: " + this.trademark + "\n    \u00B7 SD Size (GB): " + this.sdSize + "\n    \u00B7 Color: " + this.color + "\n    \u00B7 Is 5g?: " + this.is5G + "\n    \u00B7 Number of Cameras: " + this.cameraNumber);
    };
    return Mobile;
}());
exports.Mobile = Mobile;
var AgenMob = /** @class */ (function () {
    function AgenMob() {
        this.stock = [];
    }
    AgenMob.prototype.setStock = function (stock) {
        this.stock = stock;
    };
    AgenMob.prototype.getStock = function () {
        return this.stock;
    };
    AgenMob.prototype.printAgenMob = function () {
        for (var i = 0; i < this.stock.length; i++) {
            this.stock[i].printMob();
        }
    };
    return AgenMob;
}());
exports.AgenMob = AgenMob;
