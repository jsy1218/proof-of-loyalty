import React, { useState } from "react";
import 'react-modal-video/css/modal-video.css';
import dynamic from "next/dynamic";

const ModalVideo = dynamic(import("react-modal-video"), {
    ssr: false,
});

const ModalVideos = () => {
    const [isOpen, setOpen] = useState(false);
    return (
        <>
            <a onClick={() => setOpen(true)}>Click</a>

            <ModalVideo
                channel="youtube"
                autoplay
                isOpen={isOpen}
                videoId="7e90gBu4pas"
                onClose={() => setOpen(false)}
            />
        </>
    );
};

export default ModalVideos;