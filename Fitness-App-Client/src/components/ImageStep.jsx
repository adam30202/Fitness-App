import React from "react";

const ImageStep = ({ formData, setFormData }) => {

return (
    <div className='image-upload-container'>
        { formData.image && 
        <div className="image-form-container">
            <img src={formData.image}/>
        </div>
        }
        <input 
            type="text"
            placeholder="image URL"
            value={ formData.image || '' }
            onChange={(e) => setFormData({...formData, image: e.target.value }) }
            />
    </div>
)

}

export default ImageStep;