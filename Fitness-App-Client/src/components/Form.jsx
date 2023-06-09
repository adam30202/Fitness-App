import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import ImageStep from "./ImageStep";
import CaptionStep from "./CaptionStep";
import CategoryStep from "./CategoryStep";
import Cookies from "universal-cookie";
import axios from "axios";



const Form = () => {

    /// decodes JWT to get userId for image upload
    const cookies = new Cookies();
    const token = cookies.get("TOKEN")
    const payloadBase64Url = token.split('.')[1];
    const decodedPayload = JSON.parse(window.atob(payloadBase64Url));
    const userId = decodedPayload.userId
    const userLocation = decodedPayload.userLocation

    const [ page, setPage ] = useState(0);
    const [ formData, setFormData ] = useState({
        image: '',
        caption: '',
        category: '',
        location: userLocation,
        author: userId,
    });

    const navigate = useNavigate();

    const _handleSubmit = (e) => {
        e.preventDefault();

        const configuration = {
            method: 'post',
            url: 'http://localhost:3000/new-post',
            data: formData
        }

        axios(configuration)
            .then((result) => {

                console.log(result);

                setFormData({
                    image: '',
                    caption: '',
                    category: '',
                    location: userLocation,
                    author: userId,
                });

                navigate('/myposts');
            })
            .catch((error) => {
                console.error(`An error occured: ${error}`)
            });
    }


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
                    onClick={(e) => {
                        if (page === FormTitles.length - 1) {
                            _handleSubmit(e)
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