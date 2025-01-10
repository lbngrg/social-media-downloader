import toast from 'react-hot-toast';

export async function downloadMedia(url: string, filename: string) {
  try {
    // Create download link
    const link = document.createElement('a');
    link.href = url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.download = filename;
    
    // Trigger download
    document.body.appendChild(link);
    link.click();
    
    // Cleanup
    document.body.removeChild(link);
    
    toast.success('Download started! If download does not start automatically, please check your popup blocker.');
  } catch (error) {
    console.error('Download error:', error);
    toast.error('Download failed. Please try again or try opening in new tab.');
  }
}