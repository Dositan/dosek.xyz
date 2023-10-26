"use client";
import useSWR from "swr";
import { Icons } from "./icons";

export const NowPlaying = () => {
  const fetcher = (url: string) => fetch(url).then((r) => r.json());
  const { data } = useSWR("/api/spotify", fetcher);

  return (
    <span className="flex items-center justify-center space-x-2">
      {data?.isPlaying ? (
        <img
          className="w-6 h-6 rounded-full"
          src={data?.albumImageUrl}
          alt={data?.album}
        />
      ) : (
        <Icons.spotify className="w-6 h-6 text-[#1ED760]" />
      )}
      <div>
        {data?.isPlaying ? (
          <a href={data?.songUrl} className="font-bold hover:underline">
            {data?.isPlaying ? data.title : "Not Playing"}
          </a>
        ) : (
          <span className="font-bold">
            {data?.isPlaying ? data.title : "Not Playing"}
          </span>
        )}
        <span className="text-gray-400">
          {" "}
          ― {data?.isPlaying ? data.artist : "Spotify"}
        </span>
      </div>
    </span>
  );
};
