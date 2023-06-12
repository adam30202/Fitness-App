import UploadWidget from "./UploadWidget";

const ImageStep = ({ formData, setFormData }) => {

    // Sets the image parameter in formData to be the cloudinary url obtained in UploadWidget
    const widgetURLSetter = (url) => {
        setFormData({...formData, image: url }) 
    }

return (
    <div className='image-upload-container'>
        { formData.image && 
        <div className="image-form-container">
            <img src={formData.image}/>
        </div>
        }
        <UploadWidget widgetURLSetter={ widgetURLSetter }/>
        {/* <input 
            type="text"
            placeholder="image URL"
            value={ formData.image || '' }
            onChange={(e) => setFormData({...formData, image: e.target.value }) }
            /> */}
    </div>
)

}

export default ImageStep;