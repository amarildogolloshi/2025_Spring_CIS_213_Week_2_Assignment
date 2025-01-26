
import './Square.css'

const Square = (props) => {
    return (
        <div className="square">
            <button>{props.value}</button>
        </div>
    );
};

export default Square;