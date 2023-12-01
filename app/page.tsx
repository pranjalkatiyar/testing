'use client'
import React from 'react';
import { useEffect, useState } from 'react';

export default function Home() {
  const [videoUrl, setVideoUrl] = useState('');

  useEffect(() => {
    async function fetchVideoUrl() {
const url = `https://scontent.cdninstagram.com/v/t66.30100-16/321149662_1578597952944864_821241978084560869_n.mp4?_nc_ht=scontent.cdninstagram.com&_nc_cat=100&_nc_ohc=cqzRE92KtH4AX-d-TF5&edm=APs17CUBAAAA&ccb=7-5&oh=00_AfByCqpP0DryRzZ7bHWxJz2blED_ZpjF4WwuZgfcrmW8ng&oe=656B850A&_nc_sid=10d13b`
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/mp4',
        },
        mode: 'no-cors',
      });

      const data = await response.blob();
      const videoBlobUrl = window.URL.createObjectURL(data);

      setVideoUrl(videoBlobUrl);
    }

    fetchVideoUrl();
  }, []);

  return (
    <div>
      {videoUrl && (
        <a href={videoUrl} download="video.mp4">Download Video</a>
      )}
    </div>
  );
}
