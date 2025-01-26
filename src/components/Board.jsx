import Square from "./Square";
import './Board.css'


const Board = (props) => {
    return (
        <div className="board">
            <Square value="x" />
            <Square value="o" />
            <Square value="x" />
            <Square value="o" />
            <Square value="x" />
            <Square value="o" />
            <Square value="x" />
            <Square value="x" />
            <Square value="o" />
        </div>
    );
};

export default Board;