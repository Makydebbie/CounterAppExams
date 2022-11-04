export const useCounter = () => {

    const handleIncrement = (state) => {
        return {count: state.count + 1};
    };

    const handleDecrement = (state) => {
        return {count: state.count - 1};
        };
    const handleReset = () => {
        return {count: 0, value:0};
    };
    const handleUpdate= (newValue)=>{
            return {count:Number(newValue)}
    };

    return {
        actions: {
            handleIncrement,
            handleDecrement,
            handleReset,
            handleUpdate
        }
    };
};



