import React from 'react'


const Contact = () => {
  return (
    <div>
      
      <div className="flex justify-center items-center h-screen w-screen">
        <div className='flex h-96 w-300 p-3 flex-row justify-center border shadow-lg rounded-lg'>
          <div className='h-full w-2/4 flex  items-center justify-center font-bold text-5xl'>
            <h1>Contact Us</h1>
          </div>
          <div className='h-full w-2/4 flex justify-center items-center flex-col gap-5'>
            <div className='flex w-full justify-center items-center flex-row gap-7'>
              <div className='w-1/4'><div className='h-14 w-14 rounded-3xl overflow-hidden'>
                <img src="https://banner2.cleanpng.com/20180425/sce/kisspng-computer-icons-email-symbol-clip-art-mail-icon-5ae130946d7d15.1366074415247074764485.jpg" alt="" className='h-full w-full' />

              </div></div>

              <div className='w-3/4'>
                <h1 className="text-xl font-bold">
                  Reach to us
                </h1>
                <h3>Our friendly team is ready to help</h3>
                <a href="#">example@company.in</a>
              </div>
            </div>

            <div className="flex justify-center w-full items-center flex-row gap-7">
              <div className="w-1/4">
                <div className="h-14 w-14 rounded-3xl overflow-hidden">
                <img src="https://i.pinimg.com/736x/f6/13/8a/f6138a6ed22a06203ea5859ba639d9c6.jpg" alt="" className='h-full w-full' />
              </div>
              </div>
              
              <div className='w-3/4'>
                <h1 className="text-xl font-bold">
                  Office
                </h1>
                <h3>Come and say hello to our office HQ</h3>
                <h3>121,Rock street,21 avenue,New York,NY-92103-9000</h3>
              </div>
            </div>


            <div className='flex justify-center w-full items-center flex-row gap-7'>
              <div className="w-1/4">
                <div className="h-14 w-14 rounded-3xl overflow-hidden">
                  <img src="https://icones.pro/wp-content/uploads/2021/02/icone-de-broche-de-localisation-verte.png" alt="" className='h-full w-full' />
                </div>
              </div>
              
              <div className='w-3/4'>
                <h1 className="text-xl font-bold">
                  Phone
                </h1>
                <h3>Mon-Fri from 5am-9pm</h3>
                <h3>xxx-xxx-xxx</h3>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default Contact
