import React, { useState } from 'react';
import './Board.css';
import Square from '../Square/Square';

interface BoardProps {
    squares: any;
    xIsNext: boolean
    handlePlay: any;
}

const Board: React.FC<BoardProps> = ({ squares, xIsNext, handlePlay }) => {
    function handleClick(i: number) {
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        const nextSquares = squares.slice();
        if (xIsNext) {
            nextSquares[i] = "X";
        } else {
            nextSquares[i] = "O";
        }
        handlePlay(nextSquares);
    }
    const winner = calculateWinner(squares);
    let status;
    if (winner) {
        status = "Winner: " + winner;
    } else {
        status = "Next player: " + (xIsNext ? "X" : "O");
    }

    const renderRow = (row : number) => {
        const rows: any[] = [];
        for (var column = 0;
            column < 3;
            column++) {
                var index = row*3 + column;
                rows.push(
                    <Square value={squares[index]} onSquareClick={() => handleClick(index)} />
            )
        }
        return rows;

    }
    const renderBoard = () => {
        const board: any[] = [];
        for (var row = 0;
            row < 3;
            row++) {
            board.push(
                <div className='board-row'>{renderRow(row)}</div>
            )
        }
        return board;
    }

    return (
        <div className='board'>
            <div>
                {status}
            </div>
            {renderBoard()}
        </div>
    );
};

function calculateWinner(squares: any) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}
export default Board;