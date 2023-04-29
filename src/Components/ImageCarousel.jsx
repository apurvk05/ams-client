import ReactImageGallery from "react-image-gallery";
import Grid from "@mui/material/Unstable_Grid2";
export default function ImageCarousel() {
  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];

  return (
    <Grid xs={12} sm={12} md={12} lg={12} xl={12}>
      <div
        style={{
          margin: "auto",
          maxWidth: "600px",
          maxHeight: "420px",
          padding: "0px 0px 20px 0px",
        }}
      >
        <ReactImageGallery
          items={images}
          thumbnailPosition="left"
          showPlayButton={false}
          stopPropagation={true}
          autoPlay={true}
          slideInterval="3000"
          infinite={true}
        />
      </div>
    </Grid>
  );
}
