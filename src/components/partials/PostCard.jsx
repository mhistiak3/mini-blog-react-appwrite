import { Link } from "react-router-dom";
import service from "../../app/config.service";


export const PostCard = ({ $id, title, featuredImage }) => {
    
  return (
    <Link to={`/post/${$id}`} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 ease-in-out">
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
      </div>
    </Link>
  );
};
