import React from "react";

const CategoryStep = ({ formData, setFormData, location }) => {

return (
    <div className='category-container'>
        <div className="image-form-container">
            <img src={formData.image}/>
        </div>
        <input 
            type="text" 
            class="block w-full p-2  border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Write a category"
            maxLength={ 27 }
            value={ formData.category }
            onChange={(e) => setFormData({...formData, category: e.target.value, location: location }) }
            />
    </div>
)

}

export default CategoryStep;