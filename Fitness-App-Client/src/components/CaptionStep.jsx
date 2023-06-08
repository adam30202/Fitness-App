import React from "react";

const CaptionStep = ({ formData, setFormData }) => {

return (
    <div className='caption-container'>
        <div className="image-form-container">
            <img src={formData.image}/>
        </div>
        <input 
            type="text"
            placeholder="write a caption"
            value={ formData.caption }
            onChange={(e) => setFormData({...formData, caption: e.target.value }) }
            />
    </div>
)

}

export default CaptionStep;