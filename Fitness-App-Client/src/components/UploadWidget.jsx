import { useEffect, useRef } from "react";
import { Helmet } from "react-helmet";

const UploadWidget = () => {

    const cloudinaryRef = useRef();
    const widgetRef = useRef();
    useEffect(() => {
        cloudinaryRef.current = window.cloudinary;
        widgetRef.current = cloudinaryRef.current.createUploadWidget({
            cloudName: 'dnwt2kr32',
            uploadPreset: 'dgkxujdz'
        }, function(error, result) {
            console.log(result)
        })
        console.log(cloudinaryRef.current)
    }, [])

    return (
        <button onClick={() => widgetRef.current.open() }>
            Upload
        </button>
    )
}

export default UploadWidget;