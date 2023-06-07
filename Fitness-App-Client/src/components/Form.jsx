import { useState } from "react";
import ImageStep from "./ImageStep";
import CaptionStep from "./CaptionStep";
import CategoryStep from "./CategoryStep";


const Form = () => {

    const [ page, setPage ] = useState(0);
    const [ formData, setFormData ] = useState({
        image: "",
        caption: "",
        category: ""
    });


    const FormTitles = ["Image Upload", "Caption", "Category"];

    const StepDisplay = () => {
        if (page === 0) {
            return <ImageStep formData={ formData }  setFormData={ setFormData }/>
        } else if (page === 1) {
            return <CaptionStep formData={ formData }  setFormData={ setFormData }/>
        } else if (page === 2) {
            return <CategoryStep formData={ formData }  setFormData={ setFormData }/>
        }
    }

return (
    <div className='form'>
        <div className="progressbar">
            <div style={ {width: page === 0 ? "33.3%" : page === 1 ? "66.6%" : "100%" }}></div>
        </div>
        <div className="form-container">

            <div className="header">
                <h1>{ FormTitles[page] }</h1>
            </div>

            <div className="body">
                { StepDisplay() }
            </div>

            <div className="footer">
                <button
                    disabled={page === 0}
                    onClick={() => {setPage((page) => page - 1 )}}
                    >
                    Prev
                </button>
                <button
                    onClick={() => {
                        if (page === FormTitles.length - 1) {
                            console.log(formData) // send here to api
                        } else {
                            setPage((page) => page + 1 )
                        }
                        }}
                    >
                    { page === 2 ? "Submit!" : "Next" }
                </button>
            </div>
        </div>
    </div>
)

}

export default Form;