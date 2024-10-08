import { Account, Client, ID, Databases, Storage, Query } from "appwrite";
import {
  VITE_APPWRITE_BUCKET_ID,
  VITE_APPWRITE_COLLECTION_ID,
  VITE_APPWRITE_DATABASE_ID,
  VITE_APPWRITE_PROJECT_ID,
  VITE_APPWRITE_URL,
} from "../config";

export class Service {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client
      .setEndpoint(VITE_APPWRITE_URL)
      .setProject(VITE_APPWRITE_PROJECT_ID);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async createPost({ title, content, slug, featuredImage, status, userId }) {
    try {
      return await this.databases.createDocument(
        VITE_APPWRITE_DATABASE_ID,
        VITE_APPWRITE_COLLECTION_ID,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
          userId,
        }
      );
    } catch (error) {
      console.error("Error creating post:", error);
      throw error;
    }
  }

  async updatePost(slug, updatedPost) {
    try {
      return await this.databases.updateDocument(
        VITE_APPWRITE_DATABASE_ID,
        VITE_APPWRITE_COLLECTION_ID,
        slug,
        updatedPost
      );
    } catch (error) {
      console.error("Error updating post:", error);
      throw error;
    }
  }

  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        VITE_APPWRITE_DATABASE_ID,
        VITE_APPWRITE_COLLECTION_ID,
        slug
      );
      return true;
    } catch (error) {
      console.error("Error deleting post:", error);
      return false;
    }
  }

  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        VITE_APPWRITE_DATABASE_ID,
        VITE_APPWRITE_COLLECTION_ID,
        slug
      );
    } catch (error) {
      console.error("Error getting post:", error);
    }
  }

  async getPosts(queries = [Query.equal("status", "active")]) {
    
    try {
      return await this.databases.listDocuments(
        VITE_APPWRITE_DATABASE_ID,
        VITE_APPWRITE_COLLECTION_ID,
        queries
      );
    } catch (error) {
      console.error("Error getting post:", error);
      return false;
    }
  }

  //   Upload file
  async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        VITE_APPWRITE_BUCKET_ID,
        ID.unique(),
        file
      );
    } catch (error) {
      console.error("Error uploading file:", error);
      return false;
    }
  }
  async deleteFile(fileId) {
    try {
       await this.bucket.deleteFile(VITE_APPWRITE_BUCKET_ID, fileId);
       return true
    } catch (error) {
      console.error("Error deleting file:", error);
      return false;
    }
  }

  async updateFile(fileId, file) {
    try {
      return await this.bucket.updateFile(
        VITE_APPWRITE_BUCKET_ID,
        fileId,
        file
      );
    } catch (error) {
      console.error("Error updating file:", error);
      return false;
    }
  }

   getFilePreview(fileId) {
    return  this.bucket.getFilePreview(VITE_APPWRITE_BUCKET_ID, fileId);
  }
}
const service = new Service();
export default service;
