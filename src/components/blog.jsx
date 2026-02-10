import { useState } from 'react';
import { MdOutlineTimer, MdOutlineCalendarToday,MdOutlineChatBubbleOutline} from "react-icons/md";
import { events } from '../../constants/index.js';

const Blog = () => {
  return (
    <div className='min-h-screen w-full bg-gray-100 py-16'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='text-center mb-16 '>
            <h2 className='text-3xl  md:text-4xl uppercase font-extrabold mb-4'>
                Our Blog
            </h2>
            <p className='text-lg text-gray-400 pb-16 '>
                Read about recent team activities
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10'>
                {events.map((event)=>{
                    return(
                 <div className="bg-white rounded-sm flex flex-col group">
  
  <div className="relative w-full h-72 lg:h-80 overflow-hidden">
    <img
      src={event.image}
      alt={event.title}
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
    />

    
    {event.featured && (
      <span className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-semibold px-3 py-1">
        Featured
      </span>
    )}
  </div>
  <div className="flex flex-col flex-1 pt-6 px-6">
    <span className="text-sm text-gray-400 mb-2">
      {event.day}
    </span>
    <h3 className="text-lg font-extrabold uppercase text-orange-600 leading-snug hover:text-blue-800 transition mb-3">
      {event.title}
    </h3>
    <p className="text-gray-600 text-sm leading-relaxed mb-6">
      {event.description}
    </p>
    
    <div className="w-12 h-px bg-gray-300 mb-4"></div>
    <div className="flex items-center text-sm text-gray-400 gap-2">
      <span>by {event.author}</span>
      <span>/</span>
      <span>{event.category}</span>
      <span>/</span>
      <span>{event.comments} Comments</span>
    </div>
  </div>
</div>

                    )
                })}
            </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;