import { useEffect, useState } from "react";
// import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";

export default function VoiceRecorder() {
    const [isListening, setIsListening] = useState(false);
    const [hasPermission, setHasPermission] = useState(false);

    useEffect(() => {
        console.log(navigator.mediaDevices);

        const permissionName = "microphone" as PermissionName;
        navigator.permissions.query({ name: permissionName }).then((result) => {
            if (result.state === "granted") {
              console.log('microphone - granted');
            } else if (result.state === "prompt") {
              console.log('microphone - denied');
            }
            // Don't do anything if the permission was denied.
          });
    }, []);

    const getPermission = () => {
            const permissions = navigator.mediaDevices.getUserMedia({audio: true, video: false});
            permissions.then((stream) => {
                setHasPermission(true);
                console.log(stream);
            }).catch((err) => {
                setHasPermission(false);
                console.log(err);
            });
    }

    function startListening() {
        if(hasPermission){
            setIsListening(true);
            console.log('listening');
        } else {
            getPermission();
        }
    }
    function stopListening() {
        setIsListening(false);
    }

    return (
        <>
            <div style={{ width: '500px', margin: 'auto', textAlign: 'center' }}>
                <button className="microphone-reset btn" onClick={startListening}>
                    Start
                </button>
                <button className="microphone-reset btn" onClick={stopListening}>
                    Stop
                </button>
            </div>
        </>
    );
}


// export default function VoiceRecorder() {
//     const { transcript, resetTranscript, isMicrophoneAvailable } = useSpeechRecognition();
//     const [isListening, setIsListening] = useState(false);
    
//     if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
//         return (
//         <div className="mircophone-container">
//             Browser is not Support Speech Recognition.
//         </div>
//         );
//     }
//     const handleListing = () => {
//         console.log(isMicrophoneAvailable);
//         if(isMicrophoneAvailable){
//             handleReset();
//             setIsListening(true);
//             SpeechRecognition.startListening({
                
//             });
//         }
//     };
//     const stopHandle = () => {
//         setIsListening(false);
//         SpeechRecognition.stopListening();
//     };
//     const handleReset = () => {
//         stopHandle();
//         resetTranscript();
//     };

//   return (
//     <>
//         <div style={{ width: '500px', margin: 'auto', textAlign: 'center' }}>
//             {isListening ? "Listening........." : "Click to start Listening"}
//             <br/><br/>
//             <button className="microphone-reset btn" onClick={handleListing}>
//                 Start
//             </button>
//             <button className="microphone-reset btn" onClick={stopHandle}>
//                 Stop
//             </button>
//             <button className="microphone-reset btn" onClick={handleReset}>
//                 Reset
//             </button>
//             <br/><br/>
//             <div>
//                 {transcript && 'Recorded content:'}
//                 <br/>
//                 {transcript}
//             </div>
//         </div>
//     </>
//   );
// }