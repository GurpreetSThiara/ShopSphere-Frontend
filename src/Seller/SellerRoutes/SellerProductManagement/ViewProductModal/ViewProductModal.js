import React, { useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { ShoppingCart } from '@mui/icons-material';
import { Button } from '@mui/material';

const ViewProductModal = ({ open, onClose, product }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextSlide = () => {
    setCurrentImage((currentImage + 1) % product.images.length);
  };

  const prevSlide = () => {
    setCurrentImage((currentImage - 1 + product.images.length) % product.images.length);
  };

  return (
    <Transition.Root show={open} as={React.Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        onClose={onClose}
      >
        <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={React.Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black opacity-30 transition-opacity" />
          </Transition.Child>

          <Transition.Child
            as={React.Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:align-middle sm:max-w-3xl sm:w-full">
              <div className="bg-white p-4 sm:p-6">
                <div className="sm:flex sm:items-start">
                  <div className="sm:w-1/2 sm:mr-4 relative">
                    <button
                      onClick={prevSlide}
                      className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-200 rounded-full p-2 focus:outline-none"
                    >
                      &lt;
                    </button>
                    <img
                      src={product.images[currentImage]}
                      alt={product.title}
                      className="w-full h-auto"
                    />
                    <button
                      onClick={nextSlide}
                      className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-200 rounded-full p-2 focus:outline-none"
                    >
                      &gt;
                    </button>
                    <div className="flex justify-center mt-4">
                      {product.images.map((image, index) => (
                        <img
                          key={index}
                          src={image}
                          alt={product.title}
                          className={`w-12 h-12 mx-2 cursor-pointer rounded-lg border ${
                            index === currentImage ? 'border-primary' : ''
                          }`}
                          onClick={() => setCurrentImage(index)}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="sm:w-1/2 mt-4 sm:mt-0">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                      {product.title}
                    </h3>
                    <p className="text-gray-700 text-lg mb-4">
                      {product.description}
                    </p>
                    <div className="text-gray-700 mb-4">
                      <p>
                        Price: ${product.discountedPrice} <del>${product.price}</del> ({product.discountPersent}% off)
                      </p>
                      <p>Available: {product.quantity} in stock</p>
                      <p>Brand: {product.brand}</p>
                      <p>Color: {product.color}</p>
                      <p>
                        Sizes available: {product.sizes.map((size) => `${size.name} (${size.quantity})`).join(', ')}
                      </p>
                    </div>
                    <div className="flex justify-center">
                      <Button
                        type="button"
                        onClick={onClose}
                      >
                      Close
                       
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default ViewProductModal;
