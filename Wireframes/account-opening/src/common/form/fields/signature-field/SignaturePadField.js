import React, { useRef, useState, useEffect } from 'react'

import { Form } from 'antd'
import SignaturePad from 'react-signature-canvas'

import styles from './SignaturePadField.module.css'
import CustomButton from '../button/CustomButton'
import { Widget } from 'react-chat-widget'


const SignaturePadField = ({
    saveState,
    clearState,
}) => {
    const sigCanvas = useRef({})
    const clear = () => sigCanvas.current.clear()
    const [imageURL, setImageUrl] = useState(null)
    const save = () => {

        let canvas = sigCanvas.current.getTrimmedCanvas()

        setImageUrl(canvas.toDataURL("image/png").replace("image/png", "image/octet-stream"))

    }
    useEffect(() => {
        if (clearState) {
            clear()
        }
    }, [clearState])

    useEffect(() => {
        if (saveState) {
            save()
        }
    }, [saveState])

    return (
        <>
            <SignaturePad
                ref={sigCanvas}
                canvasProps={{
                    className: `${styles.signatureCanvas}`
                }}>
            </SignaturePad>
            {
                imageURL ? (
                    <img
                        src={imageURL}
                        alt="sign"
                        style={{
                            display: 'block',
                            margin: "0 auto",
                            border: "1px solid black",
                            width: "350px"
                        }}

                    />
                ) : null
            }
        </>
    )
}
export default SignaturePadField