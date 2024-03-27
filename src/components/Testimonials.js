import React from "react";
import ReactPlayer from "react-player";

export default function Testimonials() {
  const piles = [
    "https://www.youtube.com/watch?v=BTy91ksYDmc",
    "https://www.youtube.com/watch?v=S1T67xnoPGg",
    "https://www.youtube.com/watch?v=sZP8YSNU_MU"
  ];
  const kidneyFailure = [
    "https://www.youtube.com/watch?v=b4Ue4u0XMZ4",
    "https://www.youtube.com/watch?v=RvM3pekjmRs",
    "https://www.youtube.com/watch?v=LiEP9yngb30"
  ];
  const mind = [
    "https://www.youtube.com/watch?v=Ln5qpH6wIC8&t=11s",
    "https://www.youtube.com/watch?v=dPI5QYynvcY",
    "https://www.youtube.com/watch?v=11xfJKY_SW8"
  ];
  const multipleOrganFailure = [
    "https://www.youtube.com/watch?v=YKVHja9SREw&t=17s",
  ];
  const autoImmuneDesease = [""];
  const liver = [""];
  const ENT = [""];
  const eye = [""];
  const diabetese = [""];
  const cancer = [
    "https://www.youtube.com/watch?v=RRjOrIuO_9Q",
    "https://www.youtube.com/watch?v=26M5y7aI_nM",
  ];
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
