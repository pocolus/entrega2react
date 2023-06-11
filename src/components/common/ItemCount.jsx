import { useCount } from "../hooks/useCount";

export const ItemCount = ({ stock, initial, onAdd }) => {
  const { count, decrement, increment } = useCount(initial, stock);

  return (
    <>
      <div style={{position: "relative",  left: "45%", color:"darkred", padding:"10px"}} className="count--container">
        <button onClick={decrement}>-</button>
        <span>{count}</span>
        <button onClick={increment}>+</button>

        <button onClick={() => onAdd(count)}style={{position: "relative", color:"darkred", left: "0%", padding:"5px"}} >Agregar al carrito</button>
      </div>
    </>
  );
};
