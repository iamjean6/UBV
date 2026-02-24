import { memo, useState } from 'react';
import { HiX } from 'react-icons/hi';
import { useParams } from "react-router-dom";
import { programs } from "../../constants";
const Gallery = () => {

    const { id } = useParams();
    const program = programs.find(p => p.id === Number(id));
    const [model , setModel] = useState(false)
    const[tempImg , setTempImg]= useState('')
    const getImg= (img) =>{
        setTempImg(img)
        setModel(true)
    }
    const data = program?.images.map((img, index) => ({
  id: index,
  img
})) || [];
  return (
  <>
  <div className={model ? "model open ": "model"}>
    <img  src={tempImg}/>
    <span>
         <HiX  onClick={()=> setModel(false)} />
    </span>
   
  </div>
   <div className='gallery py-16'>
      {data.map((item, index)=>{
        return(
            <div className='pics' key={index} 
            onClick={()=>getImg(item.img)}
            >
                <img src={item.img}
                className='w-full'
                />
            </div>
        )
      })}
    </div>
  </>
   
  );
};

export default memo(Gallery);