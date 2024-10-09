import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button, Container, Loader } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";
import service from "../app/config.service";

export default function Post() {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const { slug } = useParams();
  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.user);
  const isAuthor = post && userData ? post.userId === userData.$id : false;

  useEffect(() => {
    if (slug) {
      service.getPost(slug).then((post) => {
        if (post){
          setPost(post);
          setLoading(false)
        } 
        else navigate("/");
      });
    } else navigate("/");
  }, [slug, navigate]);

  const deletePost = () => {
    service.deletePost(post.$id).then((status) => {
      if (status) {
        service.deleteFile(post.featuredImage).then(() => {
          navigate("/all-post");
        });
        navigate("/");
      }
    });
  };

  if(loading){
    return <Loader />}
  return post ? (
    <div className="py-8 bg-gray-50 min-h-screen">
      <Container>
        <div className="w-full flex flex-col items-center">
          {/* Post Image */}
          <div className="relative w-full max-w-3xl rounded-lg overflow-hidden shadow-lg mb-8">
            <img
              src={service.getFilePreview(post.featuredImage)}
              alt={post.title}
              className="w-full h-72 object-cover rounded-lg"
            />
            {isAuthor && (
              <div className="absolute top-4 right-4 flex space-x-3">
                <Link to={`/edit-post/${post.$id}`}>
                  <Button bgColor="bg-green-500" classNames="px-4 py-2">
                    Edit
                  </Button>
                </Link>
                <Button
                  bgColor="bg-red-500"
                  classNames="px-4 py-2"
                  onClick={deletePost}
                >
                  Delete
                </Button>
              </div>
            )}
          </div>

          {/* Post Content */}
          <div className="w-full max-w-3xl bg-white p-8 rounded-lg shadow-md">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              {post.title}
            </h1>

            {/* Author and Created Date */}
            <div className="text-gray-600 mb-6 flex items-center space-x-4">
              <span className="font-semibold">By {post.author}</span>
              <span>•</span>
              <span>
                {new Date(post.$createdAt).toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </span>
            </div>

            {/* Post Body */}
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              {parse(post.content)}
            </div>
          </div>
        </div>
      </Container>
    </div>
  ) : null;
}
