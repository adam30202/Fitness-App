import { useState, useEffect } from "react";
import ImageStep from "./ImageStep";
import CaptionStep from "./CaptionStep";
import CategoryStep from "./CategoryStep";
import GeoLocation from './GeoLocation';
import Cookies from "universal-cookie";

const Form = ({ post, submitPost }) => {

    /// decodes JWT to get userId for image upload
    const cookies = new Cookies();
    const token = cookies.get("TOKEN")
    const payloadBase64Url = token.split('.')[1];
    const decodedPayload = JSON.parse(window.atob(payloadBase64Url));
    const userId = decodedPayload.userId;
    const username = decodedPayload.userUsername;

    const [ page, setPage ] = useState(0);
    const [location, setLocation] = useState('');
    //// This state object will be used to set the post data. It will then be sent to the backend.
    const [ formData, setFormData ] = useState({
        image: '',
        caption: '',
        category: '',
        location: '',
        author: userId,
        username: username,
    });

    //////// If the user is editing a post, the formData will be prefilled with that post's data
    useEffect(() => {
        if (post) {
            setFormData({
                image: post.image,
                caption: post.caption,
                category: post.category,
                location: post.location,
                author: userId,
                username: username,
            });
        } 
    }, [post]);

    const _handleSubmit = (e) => {
        e.preventDefault();

        submitPost(formData)
    }

    const FormTitles = ["Image Upload", "Caption", "Category"];

    //////// Function that uses state to determine what step of the form the user is on
    const StepDisplay = () => {
        if (page === 0) {
            return <ImageStep formData={ formData }  setFormData={ setFormData }/>
        } else if (page === 1) {
            return <CaptionStep formData={ formData }  setFormData={ setFormData }/>
        } else if (page === 2) {
            return <CategoryStep formData={ formData }  setFormData={ setFormData } location={ location }/>
        }
    }

return (
    <div className='form'>
        <GeoLocation setLocation={ setLocation }/>
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
                        console.log(formData)
                        console.log(location)
                        }}
                    disabled={ !formData.image }
                    >
                    { page === 2 ? "Submit!" : "Next" }
                </button>
            </div>
        </div>
    </div>
)

}

export default Form;