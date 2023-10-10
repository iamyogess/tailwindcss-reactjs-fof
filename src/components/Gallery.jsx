import React from "react";

const Gallery = () => {
  return (
    <div id="gallery" className="max-w-[1140px] w-full py-15 m-auto px-4">
        <h2 className="text-center text-gray-700 p-4">Gallery</h2>
      <div className="grid md:grid-cols-5 gap-4">
        <div className="sm:col-span-3 col-span-2 row-span-2">
          <img className="w-full h-full object-cover"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStGWY8GhjchO2FPlI0z4CjTyB1ctDMvyzJNA&usqp=CAU"
            alt="/"
          />
        </div>
        <div>
          <img className="w-full h-full object-cover"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKnxSALmKCWDOzWO9UQ37UfgEm6BAP34NEjA&usqp=CAU"
            alt="/"
          />
        </div>
        <div>
          <img className="w-full h-full object-cover"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKj6SSXgDTjYZEtDpKTB7jaBvXWXeLcSXAus9re4hqCbgKlGaVCSf-Ld1neJBvnPZ7SBk&usqp=CAU"
            alt="/"
          />
        </div>
        <div>
          <img className="w-full h-full object-cover"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDrqV1_0epkOfTV0lVeGDRbl_U_7t-O7ZqfQ&usqp=CAU"
            alt="/"
          />
        </div>
        <div>
          <img className="w-full h-full object-cover"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdKvGdkOWI-_hn2M-sj7MypgGpLMuWjv0Jbg&usqp=CAU0"
            alt="/"
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
