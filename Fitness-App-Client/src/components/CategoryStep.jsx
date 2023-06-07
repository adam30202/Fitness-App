import React from "react";

const CategoryStep = ({ formData, setFormData }) => {


return (
    <div className='category-container'>
        <input 
            type="text"
            placeholder="write a caption"
            value={ formData.category }
            onChange={(e) => setFormData({...formData, category: e.target.value }) }
            />
    </div>
)

}

export default CategoryStep;