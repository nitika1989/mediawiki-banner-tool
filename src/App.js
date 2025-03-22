import React, {useState} from 'react';

function App() {
  const [bannerText, setBannerText] =useState('Welcome to wikipedia');
  const [bannerBg, setBannerBg]= useState('3f8f9fa');
  const [bannerImage, setBannerImage] = useState('');
   return(
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">MediaWiki Banner Creator</h1>
      {/* Banner Preview*/}
      <div
        className="w-full p-6 text-center"
        style={{background: bannerBg}}
      >
        {bannerImage && (
          <img
          src={bannerImage}
          alt="Banner"
          className="mx-auto mb-4"
          width="300"
          />
    
        )}
        <h2>{bannerText}</h2>
      </div>
      {/*Control form*/ }
      <div className="mt-8">
        <label>Change Banner Text:</label>
        <input
           type="text"
           value={bannerText}
           onChange={(e)=>setBannerText(e.target.value)}
           classNmae="p-2 border rounded w-full mb-4"
        
        />
        <label>Change Background Color:</label>
        <input
                    type="color"
                    value={bannerBg}
                    onChange={(e) => setBannerBg(e.target.value)}
                    className="p-2 mb-4"
                />

                <label>Image URL:</label>
                <input
                    type="text"
                    placeholder="Paste image URL"
                    onChange={(e) => setBannerImage(e.target.value)}
                    className="p-2 border rounded w-full mb-4"
                />

      </div>
    </div>
   )
  }
 

export default App;
