import { useState, useRef, useEffect } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Mic, MicOff, Video, VideoOff, PhoneOff, MonitorUp, Users } from "lucide-react"
import { MdPerson } from 'react-icons/md'

const participants = [
  { id: 1, name: "You", isSpeaking: false },
  { id: 2, name: "John Doe", isSpeaking: true },
  { id: 3, name: "Jane Smith", isSpeaking: false },
  { id: 4, name: "Bob Johnson", isSpeaking: false },
]

export default function VideoClass() {
  const [isMuted, setIsMuted] = useState(false)
  const [isVideoOn, setIsVideoOn] = useState(false)
  const [isScreenSharing, setIsScreenSharing] = useState(false)
  const [showParticipants, setShowParticipants] = useState(false)
  
  const videoRef = useRef(null);

  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: (isVideoOn)?true:false} );
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        console.error('Error accessing the camera: ', err);
      }
    };

    startCamera();

    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject;
        const tracks = stream.getTracks();
        tracks.forEach(track => track.stop());
      }
    };
  }, [isVideoOn]);


  return (
    <div className="container align-middle">
      <div className="flex h-[80vh] m-auto bg-white !rounded-[20px] border-none my-10">
        <div className="flex-1 flex flex-col !rounded-[20px]">
          {/* Main video area */}
          <div className="flex-1 relative border-none">            
            {
              (isVideoOn)?<video ref={videoRef} autoPlay playsInline className="h-[60vh] object-cover mx-10 mt-16 rounded-[20px] aspect-video"/>:
              <div className='h-[60vh] object-cover mx-10 mt-16 rounded-[20px] aspect-video bg-[#EEEEEE] flex items-center justify-center'>
                <div className='p-1 rounded-full bg-[#dadada]'>
                  <MdPerson size = {150} className='opacity-35'/>
                </div>
              </div>
            }
            
            <div className="absolute bottom-16 left-16 bg-gray-600 bg-opacity-50 text-white px-2 py-1 rounded">
              John Doe
            </div>
          </div>

          {/* Call controls */}
          <div className="pb-10 flex justify-center border-none">
            <Button
              variant={isMuted ? "destructive" : "secondary"}
              size="icon"
              onClick={() => setIsMuted(!isMuted)}
              className = "w-16 bg-slate-100 rounded-[20px] mx-1"
            >
              {isMuted ? <MicOff className="h-6 w-6" /> : <Mic className="h-6 w-6" />}
            </Button>
            <Button
              variant={isVideoOn ? "secondary" : "destructive"}
              size="icon"
              onClick={() => setIsVideoOn(!isVideoOn)}
              className = "w-16 bg-slate-100 rounded-[20px] mx-1"
            >
              {isVideoOn ? <Video className="h-6 w-6" /> : <VideoOff className="h-6 w-6" />}
            </Button>
            <Button
              variant={isScreenSharing ? "default" : "secondary"}
              size="icon"
              onClick={() => setIsScreenSharing(!isScreenSharing)}
              className = "w-16 bg-slate-100 rounded-[20px] mx-1"
            >
              <MonitorUp className="h-6 w-6" />
            </Button>
            <Button
              variant={showParticipants ? "default" : "secondary"}
              size="icon"
              onClick={() => setShowParticipants(!showParticipants)}
              className = "w-16 bg-slate-100 rounded-[20px] mx-1"
            >
              <Users className="h-6 w-6" />
            </Button>
            <Button variant="destructive" size="icon" className= "bg-pink text-white w-16 rounded-[20px] mx-1">
              <PhoneOff className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Participant list */}
        <Card className={`w-72 pt-12 ${showParticipants ? 'block' : 'hidden'} md:block !border-none bg-transparent`}>
          <CardContent className="p-4">
            <h2 className="font-semibold mb-4">Participants ({participants.length})</h2>
            <ScrollArea className="h-[calc(80vh-8rem)]">
              <div className="space-y-4">
                {participants.map((participant) => (
                  <div key={participant.id} className="flex items-center space-x-4">
                    <Avatar className={participant.isSpeaking ? "ring-2 ring-green-500" : ""}>
                      <AvatarImage src={`https://i.pravatar.cc/150?u=${participant.id}`} />
                      <AvatarFallback>{participant.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{participant.name}</p>
                      {participant.isSpeaking && (
                        <p className="text-xs text-green-500">Speaking</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}