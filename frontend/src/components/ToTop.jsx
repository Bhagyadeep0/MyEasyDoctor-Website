
const ToTop = () => {
  return (
   <div className='fixed bottom-5 right-5 z-[9999]'>
     <a href='/'>
      <button className='p-5 rounded-full text-white text-lg bg-blue-800 hover:bg-blue-400 hover:text-black transition-all duration-500 ease-in-out'>Top</button>
    </a>
   </div>
  )
}

export default ToTop
