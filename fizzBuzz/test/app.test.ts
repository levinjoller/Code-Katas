import { assert, expect } from 'chai';
import { DevideByThreeOrAndFive } from '../app/app';

describe('FizzBuzz DevideByThreeOrAndFive function', () => {
    it('Pass number 1, Return 1', () => {
        //Act
        let actual = DevideByThreeOrAndFive(1);
        //Assert
        assert.equal(actual, '1');
    });
    it('Pass number 2, return 2', () => {
        //Act
        let actual = DevideByThreeOrAndFive(2);
        //Assert
        assert.equal(actual, '2');
    });
    it('Pass number 3, return Fizz', () => {
        //Act
        let actual = DevideByThreeOrAndFive(3);
        //Assert
        assert.equal(actual, 'Fizz');
    });
    it('Pass number 4, return 4', () => {
        //Act
        let actual = DevideByThreeOrAndFive(4);
        //Assert
        assert.equal(actual, '4');
    });
    it('Pass number 5, return 5', () => {
        //Act
        let actual = DevideByThreeOrAndFive(5);
        //Assert
        assert.equal(actual, 'Buzz');
    });
    it('Pass number 6, return Fizz', () => {
        //Act
        let actual = DevideByThreeOrAndFive(6);
        //Assert
        assert.equal(actual, 'Fizz');
    });
    it('Pass number 7, return 7', () => {
        //Act
        let actual = DevideByThreeOrAndFive(7);
        //Assert
        assert.equal(actual, '7');
    });
    it('Pass number 8, return 8', () => {
        //Act
        let actual = DevideByThreeOrAndFive(8);
        //Assert
        assert.equal(actual, '8');
    });
    it('Pass number 9, return 9', () => {
        //Act
        let actual = DevideByThreeOrAndFive(9);
        //Assert
        assert.equal(actual, 'Fizz');
    });
    it('Pass number 10, return 10', () => {
        //Act
        let actual = DevideByThreeOrAndFive(10);
        //Assert
        assert.equal(actual, 'Buzz');
    });
    it('Pass number 15, return FizzBuzz', () => {
        //Act
        let actual = DevideByThreeOrAndFive(15);
        //Assert
        assert.equal(actual, 'FizzBuzz');
    });
    it('Pass number 0, return 0', () => {
        //Act
        let actual = DevideByThreeOrAndFive(0);
        //Assert
        assert.equal(actual, '0');        
    });
});