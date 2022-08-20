const { checkForShip, damageShip } = require('../game_logic/ship_methods');

var expect = require('chai').expect;

//below is the first suite which tests the checkForShip function for expected output
describe('checkForShip', function (){
    var checkForShip = require('../game_logic/ship_methods').checkForShip;
    //below is the first Spec which tests our function for a particular scenario
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
    //second spec - tests for second scenario
    it('should correctly report a ship at a given players coordinate', function (){
        player = {
            ships: [
                {
                    locations: [[0, 0]]
                }
            ]
        };

        expect(checkForShip(player, [0, 0])).to.deep.equal(player.ships[0]);
    });
    //third spec
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
    // fourth spec
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
// second suite which tests the damageShip function
describe('damageShip', function (){
    //import the damageShip function 
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
// tests the fire function
describe('fire', function(){
    var fire = require('../game_logic/ship_methods').fire;

    it('should should recored damage on the given players ship', function(){
        var player = {
            ships: [
                {
                    locations: [[0, 0]],
                    damage: [],
                }
            ]
        };
        fire(player, [0, 0]);
        expect(player.ships[0].damage[0]).to.deep.equal([0, 0]);
        
    });
});