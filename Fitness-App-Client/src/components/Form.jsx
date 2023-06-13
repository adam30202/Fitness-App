import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import ImageStep from "./ImageStep";
import CaptionStep from "./CaptionStep";
import CategoryStep from "./CategoryStep";
import Cookies from "universal-cookie";

const Form = ({ post, submitPost }) => {

    /// decodes JWT to get userId for image upload
    const cookies = new Cookies();
    const token = cookies.get("TOKEN")
    const payloadBase64Url = token.split('.')[1];
    const decodedPayload = JSON.parse(window.atob(payloadBase64Url));
    const userId = decodedPayload.userId
    const userLocation = decodedPayload.userLocation
    console.log(userId, userLocation)

    const [ page, setPage ] = useState(0);
    const [ formData, setFormData ] = useState({
        image: '',
        caption: '',
        category: '',
        location: userLocation,
        author: userId,
    });

    useEffect(() => {
        if (post) {
        setFormData({
            image: post.image,
            caption: post.caption,
            category: post.category,
            location: userLocation,
            author: userId
        })
        }
    }, [post]);

    const _handleSubmit = (e) => {
        e.preventDefault();

        submitPost(formData)
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