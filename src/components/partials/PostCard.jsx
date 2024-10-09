import { Link } from "react-router-dom";
import service from "../../app/config.service";

export const PostCard = ({ $id, title, featuredImage, author, createdAt }) => {
  return (
    <Link
      to={`/post/${$id}`}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 ease-in-out"
    >
      {/* Featured Image */}
      <div className="h-48 overflow-hidden">
        <img
          src={service.getFilePreview(featuredImage)}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Post Content */}
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-900 mb-2">{title}</h2>

        {/* Author and Created At */}
        <div className="text-sm text-gray-600 mb-4">
          <p>
            By <span className="font-semibold">{author}</span> •{" "}
            {new Date(createdAt).toLocaleDateString("en-US", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </p>
        </div>

        {/* Read More Button */}
        <div className="text-right">
          <button className="text-indigo-600 hover:text-indigo-800 font-semibold">
            Read More &rarr;
          </button>
        </div>
      </div>
    </Link>
  );
};
