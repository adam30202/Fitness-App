import React from "react";

const CategoryStep = ({ formData, setFormData, location }) => {

return (
    <div className='category-container'>
        <div className="image-form-container">
            <img src={formData.image}/>
        </div>
        <input 
            type="text"
            placeholder="write a category"
            value={ formData.category }
            onChange={(e) => setFormData({...formData, category: e.target.value, location: location }) }
            />
    </div>
)

}

export default CategoryStep;