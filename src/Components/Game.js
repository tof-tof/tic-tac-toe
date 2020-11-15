import React, {useState} from 'react';
import { calculateWinner, isFull } from '../Helper';
import Board from './Board';

const Game = () => {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [stepNum, setStepNum] = useState(0);
    const [xIsNext, setXIsNext] = useState(true);
    const winner = calculateWinner(history[stepNum]);
    const xo = xIsNext ? "X" : "O";
    const historyPoint = history.slice(0, stepNum + 1);
    const current = historyPoint[stepNum];
    const squares = [...current];

    const handleClick = (i) => {
        //return if won or occupied
        if (winner || squares[i]) return;
        // select square
        squares[i] = xo;
        setHistory([...historyPoint, squares]);
        setStepNum(historyPoint.length);
        setXIsNext(!xIsNext);
    };

    const jumpTo = (step) => {
        setStepNum(step);
        setXIsNext(step % 2 === 0);
    };

    const renderMoves = () => history.map((_step, move) => {
        const destination = move ? `Go to move #${move}` : "Go to Start";
        return (
            <li key={move}>
                <button onClick={() => jumpTo(move)}>{destination}</button>
            </li>
        )
    })

    let style = winner ? `winner` : "";
    let outputMessage = winner ? "Winner: " + winner +" - Click 'Go to Start' to start again" : "Next Player: " + xo;
    if (isFull(squares)) {
        outputMessage = "Tie!   -   Press 'Go to Start' to start again";
        style = "tie";
    }
    return (
        <>
            <h1>Tic Tac Toe</h1>
            <Board squares={history[stepNum]} onClick={handleClick} />
            <div className="info-wrapper">
                <div>
                    <h3>History</h3>
                    {renderMoves()}
                </div>
                <h3 className={style}>{outputMessage}</h3>
            </div>
        </>
    )
};
export default Game;

/*
export default class Game extends React.Component{

}
*/