'use client'
import React, { useState } from 'react';
import axios from 'axios';

interface Clip {
  status: string;
  video_url?: string;
  progress?: number;
}

const GeneratedCartoon: React.FC = () => {
  const [jobId, setJobId] = useState('');
  const [clip, setClip] = useState<Clip | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/get-job-results', { job_id: jobId.trim() });
      const responseData = response.data;
      console.log(responseData);

      // Ensure response data structure matches expected format
      if (responseData.status === 'success') {
        if (responseData.value.status === 'succeed' && responseData.value.video_url) {
          setClip({ status: responseData.value.status, video_url: responseData.value.video_url });
          setError(null);
        } else if (responseData.value.status === 'processing' && typeof responseData.value.progress === 'number') {
          setClip({ status: responseData.value.status, progress: responseData.value.progress });
          setError(null);
        } else {
          setError('Invalid response format');
          setClip(null);
        }
      } else {
        setError('Invalid response format');
        setClip(null);
      }
    } catch (error) {
      setError('Error fetching job results');
      setClip(null);
    }
  };

  return (
    <div>
      <h2>Generated Cartoon</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Job ID:
          <input type="text" value={jobId} onChange={(e) => setJobId(e.target.value)} />
        </label>
        <button type="submit">Fetch Job Results</button>
      </form>

      {error && <p>{error}</p>}

      {clip && (
        <div>
          <p>Status: {clip.status}</p>
          {clip.status === 'succeed' && clip.video_url && (
            <video controls>
              <source src={clip.video_url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
          {clip.status === 'processing' && typeof clip.progress === 'number' && (
            <p>Progress: {(clip.progress * 100).toFixed(2)}%</p>
          )}
        </div>
      )}
    </div>
  );
};

export default GeneratedCartoon;
