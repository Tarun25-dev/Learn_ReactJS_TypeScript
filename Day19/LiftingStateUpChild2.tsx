type CounterButtonsProps = {
    onIncrease: () => void;
    onDecrease: () => void;
    onReset: () => void;
}

function DisplayButtons({onIncrease,onDecrease,onReset}: CounterButtonsProps){
    return(
        <div>
            <button onClick={onIncrease}>IncreaseCount</button>
            <button onClick={onDecrease}>DecreaseCount</button>
            <button onClick={onReset}>ResetCount</button>
        </div>
    );
}

export default DisplayButtons;