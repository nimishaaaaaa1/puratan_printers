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
    
    // Validate file size (500MB max)
    const maxSize = 500 * 1024 * 1024;
    if (file.size > maxSize) {
      setError(`File size exceeds the limit of 500MB.`);
      return;
    }
    
    setUploading(true);
    setProgress(0);
    
    try {
      const token = localStorage.getItem('token');
      
      if (!token) {
        router.push('/auth/login');
        return;
      }
      
      const formData = new FormData();
      formData.append('file', file);
      
      const xhr = new XMLHttpRequest();
      
      xhr.open('POST', '/api/files/upload');
      xhr.setRequestHeader('Authorization', `Bearer ${token}`);
      
      xhr.upload.onprogress = (event) => {
        if (event.lengthComputable) {
          const percentComplete = Math.round((event.loaded / event.total) * 100);
          setProgress(percentComplete);
        }
      };
      
      xhr.onload = () => {
        if (xhr.status === 201) {
          router.push('/dashboard/files');
        } else {
          const response = JSON.parse(xhr.responseText);
          setError(response.error || 'Upload failed');
          setUploading(false);
        }
      };
      
      xhr.onerror = () => {
        setError('Upload failed. Please try again.');
        setUploading(false);
      };
      
      xhr.send(formData);
    } catch (err: any) {
      setError(err.message);
      setUploading(false);
    }
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Upload File</h1>
        <Link href="/dashboard/files">
          <a className={styles.backLink}>Back to Files</a>
        </Link>
      </header>
      
      <main className={styles.main}>
        <div className={styles.uploadCard}>
          <h2>Upload Print File</h2>
          
          {error && <div className={styles.error}>{error}</div>}
          
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.fileInput}>
              <label htmlFor="file" className={styles.fileLabel}>
                {file ? file.name : 'Choose a file'}
              </label>
              <input
                type="file"
                id="file"
                onChange={handleFileChange}
                className={styles.hiddenInput}
              />
              {file && (
                <div className={styles.fileInfo}>
                  <p>Size: {(file.size / (1024 * 1024)).toFixed(2)} MB</p>
                  <p>Type: {file.type}</p>
                </div>
              )}
            </div>
            
            {uploading && (
              <div className={styles.progressContainer}>
                <div 
                  className={styles.progressBar} 
                  style={{ width: `${progress}%` }}
                ></div>
                <span className={styles.progressText}>{progress}%</span>
              </div>
            )}
            
            <div className={styles.guidelines}>
              <h3>File Guidelines</h3>
              <ul>
                <li>Supported formats: PDF, AI, PSD, INDD, EPS</li>
                <li>Maximum file size: 500MB</li>
                <li>Minimum resolution: 300dpi</li>
                <li>Color space: CMYK preferred</li>
                <li>Include 3mm bleed if applicable</li>
              </ul>
            </div>
            
            <button 
              type="submit" 
              className={styles.uploadButton}
              disabled={uploading || !file}
            >
              {uploading ? 'Uploading...' : 'Upload File'}
            </button>
          </form>
        </div>
      </main>
    </div>
  );
} 