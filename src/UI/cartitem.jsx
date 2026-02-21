import { useState, useEffect } from 'react';
import { merch } from '../../constants';
import { useDispatch } from 'react-redux';
import { decreaseQuantity,addToCart } from '../store/cart';


const CartItem = (props) => {
    const {productId, quantity}= props.data
    const [detail, setDetail] = useState([])
    const dispatch = useDispatch()
    useEffect(()=>{
        const findDetail = merch.filter(item=> item.id === productId)[0]
        setDetail(findDetail)
    },[productId])
    const handleMinusQuantity = () => {
    dispatch(decreaseQuantity({ productId }));
  };

  const handlePlusQuantity = () => {
    dispatch(addToCart({ productId, quantity: 1 }));
  };
  if (!detail) return null;
  return (
    <div className='flex justify-between items-center bg-slate text-white p-2 border-b-2 border-slate-700 gap-5 rounded-md'>
      <img src={detail.img} alt="" className='w-12' />
      <p> KES {detail.priceValue * quantity}</p>
      <div className='w-20 flex justify-between gap-2'>
        <button onClick={handleMinusQuantity} className='bg-blue-700 rounded-full w-6 h-6'>-</button>
        <span>{quantity}</span>
        <button onClick={handlePlusQuantity} className='bg-blue-700 rounded-full w-6 h-6'>+</button>
      </div>
    </div>
  );
};

export default CartItem;