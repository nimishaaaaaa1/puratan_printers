import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from '../../../styles/FileUpload.module.css';

export default function FileUpload() {
  const router = useRouter();
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setError('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!file) {
      setError('Please select a file to upload');
      return;
    }
    
    // Validate file type
    const allowedTypes = [
      'application/pdf',
      'application/postscript',
      'application/illustrator',
      'application/vnd.adobe.photoshop',
      'application/x-indesign'
    ];

    if (!allowedTypes.includes(file.type)) {
      setError('Unsupported file type. Please upload PDF, AI, PSD, INDD, or EPS files.');
      return;
    }

    // Validate file size
    if (file.size > 500 * 1024 * 1024) {
      setError('File size exceeds the limit of 500MB.');
      return;
    }

    // Handle file upload
    setUploading(true);
    // In a real implementation, this would send the file to the server
    // for processing and updating the progress
    setProgress(50);
    // Simulate file processing
    setTimeout(() => {
      setProgress(100);
      setUploading(false);
      router.push('/dashboard/files');
    }, 2000);
  };

  return (
    <div className={styles.container}>
      <h1>Upload File</h1>
      
      {error && <div className={styles.error}>{error}</div>}
      
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="file">File</label>
          <input
            type="file"
            id="file"
            name="file"
            accept=".pdf,.ai,.psd,.indd,.eps"
            onChange={handleFileChange}
            required
            className={styles.input}
          />
        </div>
        
        <button 
          type="submit" 
          className={styles.button}
          disabled={uploading}
        >
          {uploading ? `Uploading... (${progress}%)` : 'Upload'}
        </button>
      </form>
      
      <Link href="/dashboard/files">
        <a className={styles.backLink}>Back to Files</a>
      </Link>
    </div>
  );
} 