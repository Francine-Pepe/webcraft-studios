import BackgroundVideo from "../../Assets/background_video.mp4";

function Video() {
  return (
    <div className="video">
      <video src={BackgroundVideo} autoPlay loop muted />
    </div>
  );
}

export default Video;
