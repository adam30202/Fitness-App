import { useEffect, useRef, useState } from "react";

const UploadWidget = ({ widgetURLSetter }) => {

///Cloudinary image uploader widget ->
    const cloudinaryRef = useRef();
    const widgetRef = useRef();
    useEffect(() => {
        cloudinaryRef.current = window.cloudinary;
        widgetRef.current = cloudinaryRef.current.createUploadWidget({
            cloudName: 'dnwt2kr32',
            uploadPreset: 'dgkxujdz'
        }, function(error, result) {
            if (!error && result.event === 'success') {
                widgetURLSetter(result.info.secure_url)
            } 
        })
    }, [])

    return (
        <button onClick={() => widgetRef.current.open() }>
            Upload Image
        </button>
    )
}

export default UploadWidget;