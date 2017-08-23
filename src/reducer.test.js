import gameReducer from './reducer';
import {newGame, makeGuess, toggleInfoModal} from './actions';

describe('GameReducer', () => {
	const guess1 = 'a';
	const guess2 = 10;
	const guess3 = 50;
	const guess4 = 70;
	const guess5 = 79;
	const guess6 = 80;

	it('Should return the current state on an unknown action', () => {
        let currentState = {};
        const state = gameReducer(currentState, {type: '__UNKNOWN'});
        expect(state).toBe(currentState);
    });

    describe('newGame', () => {
    	it('Should start new game', () => {
    		let state;
    		state = gameReducer(state, newGame());
    		let firstAnswer = state.correctAnswer;
    		state = gameReducer(state, newGame());
    		let secondAnswer = state.correctAnswer;
    		expect(firstAnswer).not.toEqual(secondAnswer);
    	});
    });

    describe('makeGuess', () => {
    	it('Should set appropriate feedback when guess is NaN', () => {
    		let state;
    		state = gameReducer(state, makeGuess(guess1));
    		expect(state.feedback).toEqual('Please enter a valid number');
    	});

    	it('Should add guesses and return appropriate feedback', () => {
    		let state = {
    			guesses: [],
    			feedback: 'Make your guess!',
    			correctAnswer: 80
    		};
    		state = gameReducer(state, makeGuess(guess2));
    		expect(state.feedback).toEqual('You\'re Ice Cold...');
    		state = gameReducer(state, makeGuess(guess3));
    		expect(state.feedback).toEqual('You\'re Cold...');
    		state = gameReducer(state, makeGuess(guess4));
    		expect(state.feedback).toEqual('You\'re Warm');
    		state = gameReducer(state, makeGuess(guess5));
    		expect(state.feedback).toEqual('You\'re Hot!');
    		state = gameReducer(state, makeGuess(guess6));
    		expect(state.feedback).toEqual('You got it!');
    		expect(state.guesses).toEqual([10, 50, 70, 79, 80]);
    	});
    });

    describe('toggleInfoModal', () => {
    	it('Should toggle showInfoModal', () => {
    		let state = {showInfoModal: false};
    		state = gameReducer(state, toggleInfoModal());
    		expect(state.showInfoModal).toEqual(true);
    	});
    });
});