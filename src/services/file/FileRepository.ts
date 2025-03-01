import mongoose, { Schema, Document } from 'mongoose';

export interface IFile extends Document {
  originalName: string;
  mimeType: string;
  size: number;
  path: string;
  userId: string;
  status: string;
  previewUrl?: string;
  metadata?: {
    width?: number;
    height?: number;
    colorSpace?: string;
    resolution?: number;
    pageCount?: number;
  };
  createdAt: Date;
  updatedAt: Date;
}

const FileSchema: Schema = new Schema({
  originalName: { type: String, required: true },
  mimeType: { type: String, required: true },
  size: { type: Number, required: true },
  path: { type: String, required: true },
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  status: { type: String, required: true, default: 'uploaded' },
  previewUrl: { type: String },
  metadata: {
    width: { type: Number },
    height: { type: Number },
    colorSpace: { type: String },
    resolution: { type: Number },
    pageCount: { type: Number }
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const FileModel = mongoose.model<IFile>('File', FileSchema);

export class FileRepository {
  async save(fileData: {
    originalName: string;
    mimeType: string;
    size: number;
    path: string;
    userId: string;
    status: string;
  }): Promise<IFile> {
    const file = new FileModel(fileData);
    return file.save();
  }

  async findById(fileId: string): Promise<IFile | null> {
    return FileModel.findById(fileId);
  }

  async findByUserId(userId: string): Promise<IFile[]> {
    return FileModel.find({ userId });
  }

  async updateStatus(fileId: string, status: string): Promise<IFile | null> {
    return FileModel.findByIdAndUpdate(
      fileId,
      { status, updatedAt: new Date() },
      { new: true }
    );
  }

  async updateMetadata(fileId: string, metadata: any): Promise<IFile | null> {
    return FileModel.findByIdAndUpdate(
      fileId,
      { metadata, updatedAt: new Date() },
      { new: true }
    );
  }
} 