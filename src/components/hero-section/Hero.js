import React, { useEffect } from 'react';

const displayImage = async () => {
  try {
    const response = await fetch('https://ik.imagekit.io/dev24/');
    if (!response.ok) {
      throw new Error('Failed to fetch image');
    }
    const imageData = await response.json(); // Assuming API returns JSON with image URL
    const imageUrl = imageData.url; // Adjust this according to your API response structure
    // Now you can update the image source with the fetched URL
    document.querySelector('.hero-image').src = imageUrl;
  } catch (error) {
    console.log(error);
  }
};

const Herosection = () => {
  useEffect(() => {
    try {
      displayImage();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className='relative w-screen overflow-hidden'>
      <div className='absolute inset-0 flex items-end justify-center'>
        <svg
          className='h-16 w-screen '
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1440 320'
          preserveAspectRatio='none'
        >
          <path
            className='bg-indigo-900'
            d='M0,256L60,261.3C120,267,240,277,360,240C480,203,600,117,720,101.3C840,85,960,139,1080,144C1200,149,1320,107,1380,85.3L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z'
          ></path>
        </svg>
      </div>
      <img
        src='assets/space.jpeg'
        width='100%'
        height='50px'
        alt='dummy image'
        className='hero-image'
      />
    </div>
  );
};

export default Herosection;
