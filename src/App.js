import data from './data.js'
import {GoPrimitiveDot} from 'react-icons/go'
import {useState} from 'react'

function App() {

  let notificationSum = 0;
  for(let object of data){
    if(object.read === false){
      notificationSum = notificationSum + 1
    }
  }

  const [readMessage,setRead] = useState(false)

  function readAll() {
    for(let object of data){
    if(object.read === false){
      object.read = true
    }
    setRead(true)
    }}
  

  return (
    <div className="bg-[#F7FAFD] sm:p-11 sm:flex justify-center items-center">
      <div className='py-2 mx-auto max-w-[36em] px-4 rounded-md bg-[white]'>
        
        <header className='flex justify-between mb-6'>
          <p className='font-bold text-[#1C202B] text-[1.1rem]'>Notifications 
          <span className='text-white text-[0.9rem] ml-2 inline-block rounded-md text-center w-[1.8rem] bg-[#173265]'>{notificationSum}</span></p>
          <p onClick={readAll} className='text-[0.8rem] cursor-pointer text-[#7b8290] mt-[5px]'>Mark all as read</p>
        </header>
        <main className='flex flex-col-reverse'>
          {data.map((item,index) => {
            return(
              <div key={index} 
              className={`${!item.read ? 'bg-[#E5EFFA]' : 'bg-[white]'}
               px-4 py-3 max-w-[34em] rounded-md mb-3 flex`}>
                <div>
                  <img className='max-w-[2.4rem] mr-3' 
                  src={item.img} alt='avatar' />
                </div>
                <div>
                    <p className='font-bold  inline-block leading-4
                    text-[0.9rem]'>{item.name} 
                    <span className='text-[0.8rem] text-[#7b8290] ml-1 font-normal'>{item.action}</span>
                    
                    {item.reaction ? <span className='text-[0.8rem] ml-1 text-[#7b8290] font-semibold'>{item.reaction}</span> : <></>}
                    {item.chessClub ? <span className='text-[0.9rem] ml-1 font-bold text-[#273a74]'>{item.chessClub}</span> : <></>}
                    {!item.read ? <span className='inline-block ml-1 text-[red]'><GoPrimitiveDot className='inline-block' /></span> : <></>}
                    </p>
                    
                    <p className='text-[#7b8290] text-[0.8rem]'>{item.notificationTime}</p>
                    {item.message ? (
                      <div className='mt-2 border p-3 rounded-md max-w-[20em] md:max-w-[34em]'>
                        <p className='text-[0.8rem] max-w-[17em] md:max-w-[32em] leading-4 text-[#696f7a]'>{item.message}</p>
                      </div>
                    ) : <></> }
                    
                </div>
                {item.picture ? <img className='w-[2.5em] md:ml-[auto] h-[2.2em] ml-1 inline-block' src={item.picture} alt='chess player'/> : <></>}
              </div>
            )
          })}

        </main>

      </div>
    </div>
  );
}

export default App;
