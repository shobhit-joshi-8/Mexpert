const StoryContent = () => {
    return (
      <div className='flex justify-center items-center flex-col'>
        <div className='mb-6 text-center'>Drag Pictures to the matching words, light up correct pairs, shake for a retry</div>
        <div className='flex flex-col md:flex-row container'>
          <div className='md:mr-4 mb-4 md:mb-0'>
            {/* Card with title and image */}
            <div className='bg-white rounded-lg shadow-md overflow-hidden'>
              <img className='w-full h-40' src='https://dummyimage.com/720x400' alt='Title' />
              <div className='p-4'>
                <h3 className='text-xl font-bold mb-2'>Title</h3>
                {/* Additional content if needed */}
              </div>
            </div>
          </div>
          <div className='flex flex-col'>
            {/* First row of cards */}
            <div className='flex mb-4'>
              <div className='mr-4'>
                <div className='bg-white rounded-lg shadow-md overflow-hidden'>
                  <img className='w-full h-40' src='https://dummyimage.com/720x400' alt='Image' />
                  {/* Additional content if needed */}
                </div>
              </div>
              <div className='mr-4'>
                <div className='bg-white rounded-lg shadow-md overflow-hidden'>
                  <img className='w-full h-40' src='https://dummyimage.com/720x400' alt='Image' />
                  {/* Additional content if needed */}
                </div>
              </div>
              <div className='mr-4'>
                <div className='bg-white rounded-lg shadow-md overflow-hidden'>
                  <img className='w-full h-40' src='https://dummyimage.com/720x400' alt='Image' />
                  {/* Additional content if needed */}
                </div>
              </div>
              <div>
                <div className='bg-white rounded-lg shadow-md overflow-hidden'>
                  <img className='w-full h-40' src='https://dummyimage.com/720x400' alt='Image' />
                  {/* Additional content if needed */}
                </div>
              </div>
            </div>
            {/* Second row of cards */}
            <div className='flex'>
              <div className='mr-4'>
                <div className='bg-white rounded-lg shadow-md overflow-hidden'>
                  <img className='w-full h-40' src='https://dummyimage.com/720x400' alt='Image' />
                  {/* Additional content if needed */}
                </div>
              </div>
              <div className='mr-4'>
                <div className='bg-white rounded-lg shadow-md overflow-hidden'>
                  <img className='w-full h-40' src='https://dummyimage.com/720x400' alt='Image' />
                  {/* Additional content if needed */}
                </div>
              </div>
              <div className='mr-4'>
                <div className='bg-white rounded-lg shadow-md overflow-hidden'>
                  <img className='w-full h-40' src='https://dummyimage.com/720x400' alt='Image' />
                  {/* Additional content if needed */}
                </div>
              </div>
              <div>
                <div className='bg-white rounded-lg shadow-md overflow-hidden'>
                  <img className='w-full h-40' src='https://dummyimage.com/720x400' alt='Image' />
                  {/* Additional content if needed */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default StoryContent;
  