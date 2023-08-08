import React from "react";

const Gallery = () => {
  return (
    <div id="gallery" className="max-w-[1140px] w-full py-15 m-auto px-4">
        <h2 className="text-center text-gray-700 p-4">Gallery</h2>
      <div className="grid md:grid-cols-5 gap-4">
        <div className="sm:col-span-3 col-span-2 row-span-2">
          <img className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1566371486490-560ded23b5e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
            alt="/"
          />
        </div>
        <div>
          <img className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1594179594534-9d826c107c10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
            alt="/"
          />
        </div>
        <div>
          <img className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1613109040830-ffdd96756f5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
            alt="/"
          />
        </div>
        <div>
          <img className="w-full h-full object-cover"
            src="https://plus.unsplash.com/premium_photo-1682390303034-4c0913063e51?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
            alt="/"
          />
        </div>
        <div>
          <img className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1472586662442-3eec04b9dbda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
            alt="/"
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
