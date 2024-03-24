import React from "react";
import ReactPlayer from "react-player";

export default function Testimonials() {
  const piles = [
    "https://www.youtube.com/watch?v=SptC-_KJ2ws",
    "https://www.youtube.com/watch?v=SptC-_KJ2ws",
  ];
  const kidneyFailure = [
    "https://www.youtube.com/watch?v=SptC-_KJ2ws",
    "https://www.youtube.com/watch?v=SptC-_KJ2ws",
  ];
  const mind = [""];
  const multipleOrganFailure = [""];
  const autoImmuneDesease = [""];
  const liver = [""];
  const ENT = [""];
  const eye = [""];
  const diabetese = [""];
  const cancer = [""];
  const allVideos = [
    piles,
    kidneyFailure,
    mind,
    multipleOrganFailure,
    autoImmuneDesease,
    liver,
    ENT,
    eye,
    diabetese,
    cancer,
  ];
  const allVideosNames = [
    "Piles",
    "Kidney Failure",
    "Mind",
    "Multiple Organ Failure",
    "Auto Immune Desease",
    "Liver",
    "ENT",
    "Eye",
    "Diabetese",
    "Cancer",
  ];
  return (
    <div>
      {allVideos.map((v, i) => (
        <>
          <h1 className="text-formate ml-4">{allVideosNames[i]}</h1>
          <div className="row m-4">
            {v.map((video, i) => (
              <div
                key={i}
                className="col-12 col-xl-4 mb-4 d-flex justify-content-center align-items-center"
              >
                <ReactPlayer width={330} height={200} url={video} />
              </div>
            ))}
          </div>
        </>
      ))}
    </div>
  );
}
