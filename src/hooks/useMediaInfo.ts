import { useState } from 'react';
import { MediaInfo, RapidAPIResponse } from '../types';
import { fetchMediaInfo } from '../services/api';
import toast from 'react-hot-toast';

export function useMediaInfo() {
  const [mediaInfo, setMediaInfo] = useState<MediaInfo | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (url: string) => {
    try {
      setLoading(true);
      const data: RapidAPIResponse = await fetchMediaInfo(url);
      
      if (data.error) {
        throw new Error('Failed to fetch media info');
      }

      const downloadOptions = data.medias.map(media => ({
        quality: media.quality,
        format: media.extension.toUpperCase(),
        url: media.url
      }));

      const transformedData: MediaInfo = {
        thumbnail: data.thumbnail,
        title: data.title,
        author: data.author,
        downloadOptions
      };

      setMediaInfo(transformedData);
      toast.success('Media info retrieved successfully!');
    } catch (error) {
      console.error('Error fetching media:', error);
      toast.error('Failed to fetch media info. Please try again.');
      setMediaInfo(null);
    } finally {
      setLoading(false);
    }
  };

  const clearMediaInfo = () => {
    setMediaInfo(null);
  };

  return { mediaInfo, loading, handleSubmit, clearMediaInfo };
}