import Square from "./Square";
import './Board.css'


const Board = (props) => {
    return (
        <div className="board">
            <Square value="x" />
            <Square value="x" />
            <Square value="x" />
            <Square value="x" />
            <Square value="x" />
            <Square value="x" />
            <Square value="x" />
            <Square value="x" />
            <Square value="x" />
        </div>
    );
};

export default Board;