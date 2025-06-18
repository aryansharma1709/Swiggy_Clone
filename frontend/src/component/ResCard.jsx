import { Link } from "react-router-dom";
function ResCard({ resArr }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4 ">
            {resArr.map((restDetails) => {
                const info = restDetails.info;

                return (
                     <Link to={`restaurants/${info.id}`}>
                    <div
                        key={info.id}
                        className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
                    >
                        <img
                            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${info.cloudinaryImageId}`}
                            alt={info.name}
                            className="w-full h-80 object-cover"
                        />

                        <div className="p-4">
                            <h2 className="text-lg font-semibold text-gray-800 mb-1">
                                {info.name}
                            </h2>

                            <div className="flex items-center text-sm text-gray-600 mb-2 space-x-2">
                                <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
                                    ⭐ {info.avgRating}
                                </span>
                                <span className="text-gray-400">•</span>
                                <span>{info.locality}</span>
                            </div>

                            <p className="text-sm text-gray-500">
                                {info.cuisines?.join(", ")}
                            </p>
                        </div>
                    </div>
            </Link>
                );
            })}
        </div>
    );
}

export default ResCard;
