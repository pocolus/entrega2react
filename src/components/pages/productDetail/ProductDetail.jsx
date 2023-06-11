
import { ItemCount } from "../../common/ItemCount";


const ProductDetail = ({ productSelected }) => {

  const onAdd = (cantidad) => {
    
    let data = {
      ...productSelected,
      quantity: cantidad,
    };

    console.log(data);
  };

  return (
    <>
      <div>
        <h2 style={{color:"darkred", textAlign:"center", padding: "20px"}} >{productSelected.title}</h2>
        <img src={productSelected.img} style={{position: "relative",  left: "43%"}} alt="" size="100px" width= "200px" />
      </div>
      {productSelected.stock > 0 ? (
        <ItemCount stock={productSelected.stock} initial={1} onAdd={onAdd} />
      ) : (
        <h3>No hay stock</h3>
      )}
    </>
  );
};

export default ProductDetail;




