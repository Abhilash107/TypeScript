"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SeatChoice;
(function (SeatChoice) {
    SeatChoice["AISLE"] = "aisle";
    SeatChoice[SeatChoice["MIDDLE"] = 2] = "MIDDLE";
    SeatChoice[SeatChoice["WINDOW"] = 3] = "WINDOW"; //default == 2
})(SeatChoice || (SeatChoice = {}));
var mySeat = SeatChoice.AISLE;
