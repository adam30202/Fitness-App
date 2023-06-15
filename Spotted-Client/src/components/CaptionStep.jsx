import React from "react";

const CaptionStep = ({ formData, setFormData }) => {

return (
    <div className='caption-container'>
        <div className="image-form-container">
            <img src={formData.image}/>
        </div>
        <input 
            type="text" 
            className="block w-full p-2  border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Write a caption"
            maxLength={ 27 }
            value={ formData.caption }
            onChange={(e) => setFormData({...formData, caption: e.target.value }) }
            />
        
        {/* <input 
            type="text"
            placeholder="Write a caption"
            maxLength={ 20 }
            value={ formData.caption }
            onChange={(e) => setFormData({...formData, caption: e.target.value }) }
            /> */}
    </div>
)

}

export default CaptionStep;