import ReactPlayer from "react-player"

const PreviewArea = () => {
  return (
    <section id="Preview">
      <ReactPlayer
        className="debug"
        width="100%"
        height="30rem"
        url={'https://www.youtube.com/watch?v=kI6Ssgg5HLA'}
        controls={true}
        // light is usefull incase of dark mode
        light={false}
        // picture in picture
        pip={true}
      />
    </section>
  )
}

export default PreviewArea
