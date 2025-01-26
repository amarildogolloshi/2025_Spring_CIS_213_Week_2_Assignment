import  './Status.css'

const Status = (props) => {
    return (
        <div className="status">
            <p>Next:<span>{props.turn}</span> </p>
        </div>
    );
};

export default Status;