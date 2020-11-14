import { assert, expect } from 'chai';
import { Add } from '../app/app';

describe('StringCalculator add function', () => {
    it('Empty string return 0', () => {
        let actual = Add("");
        assert.equal(actual, 0);
    });
    it('Passed number 1, return number 1', () => {
        //Arrange
        let number = 1;
        //Act
        let actual = Add(number.toString());
        //Assert
        assert.equal(actual, 1);
    });
    it('Passed number 2, return number 2', () => {
        //Arrange
        let number = 2;
        //Act
        let actual = Add(number.toString());
        //Assert
        assert.equal(actual, 2);
    });
    it('Passed two numbers 0&0, return 0', () => {
        //Arrange
        let numbers = "0,0";
        //Act
        let actual = Add(numbers);
        //Assert
        assert.equal(actual, 0);
    });
    it('Passed two numbers 1&2, return sum', () => {
        //Arrange
        let numbers = "1,2";
        //Act
        let actual = Add(numbers);
        //Assert
        assert.equal(actual, 3);
    });
    it('Passed two numbers 4&3, return sum', () => {
        //Arrange
        let numbers = "4,3";
        //Act
        let actual = Add(numbers);
        //Assert
        assert.equal(actual, 7);
    });
    it('Passed newline separated numbers 1&2, return 3', () => {
        //Arrange
        let numbers = "1\n2";
        //Act
        let actual = Add(numbers);
        //Assert
        assert.equal(actual, 3);
    });
    it('Passed newline & comma separeted number 1&6&4, return 11', () => {
        //Arrange
        let numbers = "1\n6,4";
        //Act
        let actual = Add(numbers);
        //Assert
        assert.equal(actual, 11);        
    });
    it('Passed delimiter ; with numbers 1&2, return true', () => {
        //Arrange
        let numbers = "//;\n1;2";
        //Act
        let actual = Add(numbers);
        //Assert
        assert.equal(actual, 3);   
    });
    it('Negativ number -1, return error message', () => {
        //Arrange
        let numbers = "//;\n-1;2";
        //Act/Assert
        expect(() => Add(numbers)).to.throw('No negativ numbers allowed: -1');
    });
    it('Negativ numbers -3&2&-4, return error message', () => {
        //Arrange
        let numbers = "-3,2,-4";
        //Act/Assert
        expect(() => Add(numbers)).to.throw('No negativ numbers allowed: -3,-4');          
    });
});