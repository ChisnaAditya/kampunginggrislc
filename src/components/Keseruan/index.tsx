"use client";

import YoutubePlayer from "../YoutubePlayer";
export default function Keseruan() {
  return (
    <div className="container flex flex-col py-10 w-full">
      <article className="container prose flex flex-col w-full text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight py-5">
          Yuk, Makin Kenal dan Semakin Dekat dengan{" "}
          <span className="italic text-primaryLC">Kampung Inggris LC</span>
        </h1>
      </article>
      <YoutubePlayer videoId="ECEzqm3Mlns" />
    </div>
  );
}
