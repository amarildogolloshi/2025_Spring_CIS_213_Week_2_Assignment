
import Header from "./Header.jsx";
import Board from "./Board.jsx";
import Status from "./Status.jsx";
import Restart from "./Restart.jsx";

import './Game.css'

const Game = (props) => {
    return (
        <div className="game">
            <Header gameName={props.name} />
            <Board />
            <Status turn="x" />
            <Restart />
        </div>
    );
};

export default Game;