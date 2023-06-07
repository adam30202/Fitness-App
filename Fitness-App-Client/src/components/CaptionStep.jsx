import React from "react";

const CaptionStep = ({ formData, setFormData }) => {


return (
    <div className='caption-container'>
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