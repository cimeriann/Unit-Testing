const { checkForShip, damageShip } = require('../game_logic/ship_methods');

var expect = require('chai').expect;

describe('checkForShip', function (){
    var checkForShip = require('../game_logic/ship_methods').checkForShip;

    it('should correctly report ship at a given players coordinate', function (){
        player = {
            ships: [
                {
                    locations: [[0, 0]]
                }
            ]
        };

        expect(checkForShip(player, [9, 9])).to.be.false;
    });

    it('should correctly report a ship at a given players coordinate', function (){
        player = {
            ships: [
                {
                    locations: [[0, 0]]
                }
            ]
        };

        expect(checkForShip(player, [0, 0])).to.be.true;
    });

    it('should handle ships located at one or more coordinates', function (){
        player = {
            ships: [
                {
                    locations: [[0, 0], [0, 1]]
                }
            ]
        };
        expect(checkForShip(player, [0, 1])).to.be.true;
        expect(checkForShip(player, [9, 9])).to.be.false;
        expect(checkForShip(player, [0, 0])).to.be.true;
    });

    it('should handle checking of multiple ships', function (){
        player = {
            ships: [
                {
                    locations: [[0, 0], [0, 1]]
                },
                {
                    locations: [[1, 0], [1, 1]]
                },
                {
                    locations: [[2, 0], [2, 1], [2, 3]]
                }
            ]
        };
        expect(checkForShip(player, [0, 1])).to.be.true;
        expect(checkForShip(player, [1, 0])).to.be.true;
        expect(checkForShip(player, [1, 1])).to.be.true;
        expect(checkForShip(player, [0, 0])).to.be.true;
        expect(checkForShip(player, [2, 0])).to.be.true;
        expect(checkForShip(player, [2, 3])).to.be.true;
    });
});

describe('damageShip', function (){
    var damageShip = require('../game_logic/ship_methods').damageShip;

    it('should register damage on a given ship at a given location', function (){
        var ship = {
            locations: [[0, 0]],
            damage: []
        };
        damageShip(ship, [0, 0]);

        expect(ship.damage).to.not.be.empty;
        expect(ship.damage[0]).to.deep.equal([0, 0]);
    });
});

describe('fire', function(){
    var fire = require('../game_logic/ship_methods').fire;

    it('should fire at an opponents ship', function(){
        player = {
            ships: [
                {
                    locations: [[0, 0]],
                }
            ]
        };
        var ship = {
            locations: [[0, 0]],
            damage: []
        };
        if (checkForShip(player, [0, 1]) == true){
            damageShip(ship, [0, 0]);
            expect(ship.damage).to.not.be.empty;
        };
    });
});