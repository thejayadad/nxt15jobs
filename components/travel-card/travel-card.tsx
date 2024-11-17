import Image from "next/image";
import Link from "next/link";

interface Props {
  image: string;
  userEmail: string;
  name: string;
  id: string;
}

const TravelCard = ({ image, userEmail, name, id }: Props) => {
  return (
    <div className="flex items-center justify-between p-4 border border-gray-300 rounded-lg hover:shadow-lg transition-shadow duration-300">
      {/* User Image */}
      <div className="flex items-center space-x-4">
        <div className=" lg:h-14 lg:w-14 rounded-full bg-gray-300">
          <img
            height={100}
            width={100}
            src={image}
            alt="User"
            className="h-full w-full rounded-full object-cover"
          />
        </div>

        {/* Title */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
          <p className="text-sm text-gray-600">{userEmail}</p>
        </div>
      </div>

      {/* See More Link */}
      <div>
        <Link
          href={`/post/${id}`}
          className=" sm:text-sm flex sm:ml-4 text-primary font-medium hover:underline"
        >
          See More
        </Link>
      </div>
    </div>
  );
};

export default TravelCard;
