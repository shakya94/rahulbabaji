import React from "react";
import ReactPlayer from "react-player";

export default function Testimonials() {
  const Infertility=[
    "https://www.youtube.com/watch?v=SptC-_KJ2ws&t=1s",
    "https://www.youtube.com/watch?v=Jy0gsA35bPU",
    "https://www.youtube.com/watch?v=WWfVZsWlC_c"
  ];
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
    "https://www.youtube.com/watch?v=ke6i7dNSbYo",
    "https://www.youtube.com/watch?v=pggBNX-QUD4"
  ];
  const autoImmuneDesease = [
    "https://www.youtube.com/watch?v=h-z-74ZFi88",
    "https://www.youtube.com/watch?v=QrcL1ftFIdI",
    "https://www.youtube.com/watch?v=KM7gUURRaIw"
  ];
  const liver = [
    "https://www.youtube.com/watch?v=_o_DY4elrLk",
    "https://www.youtube.com/watch?v=vZ9t39miH64",
    "https://www.youtube.com/watch?v=hnzZHc9d-PM"
  ];
  const ENT = [
    "https://www.youtube.com/watch?v=2KogUXjsS3A",
    "https://www.youtube.com/watch?v=owBZrc15VdM&t=13s",
    "https://www.youtube.com/watch?v=8MDTFfWD2Go"
  ];
  // const eye = [""];
  // const diabetese = [""];
  const cancer = [
    "https://www.youtube.com/watch?v=RRjOrIuO_9Q",
    "https://www.youtube.com/watch?v=26M5y7aI_nM",
    "https://www.youtube.com/watch?v=DR6wbqEz714"
  ];
  const allVideos = [
    Infertility,
    piles,
    kidneyFailure,
    mind,
    multipleOrganFailure,
    autoImmuneDesease,
    liver,
    ENT,
    // eye,
    // diabetese,
    cancer,
  ];
  const allVideosNames = [
    "Infertility",
    "Piles",
    "Kidney Failure",
    "Mind",
    "Multiple Organ Failure",
    "Auto Immune Desease",
    "Liver",
    "ENT",
    // "Eye",
    // "Diabetese",
    "Cancer",
  ];
  return (
    <div>
      {allVideos.map((v, i) => (
        <>
          <h1 className="text-formate ml-4">{allVideosNames[i]}</h1>
          <div className="row m-4 ">
            {v.map((video, i) => (
              <div
                key={i}
                className="col-12 col-xl-4 mb-4 d-flex justify-content-center align-items-center"
              >
                <ReactPlayer width={330} height={200} url={video} className=""/>
              </div>
            ))}
          </div>
        </>
      ))}
    </div>
  );
}
