import React from 'react';

interface Image {
  src: string;
  alt: string;
}

const images: Image[] = [
  { src: '/images/project1.jpg', alt: 'Project 1' },
  { src: '/images/project2.jpg', alt: 'Project 2' },
];

const ImageGallery: React.FC = () => {
  return (
    <div className="py-12 bg-white">
      <h2 className="text-3xl font-bold text-center mb-8">Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-md">
            <img src={image.src} alt={image.alt} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery; 

import { render, screen } from '@testing-library/react';
import ImageGallery from '../components/ImageGallery';

test('renders images in the gallery', () => {
  render(<ImageGallery />);
  const image = screen.getByAltText(/Project 1/i);
  expect(image).toBeInTheDocument();
});