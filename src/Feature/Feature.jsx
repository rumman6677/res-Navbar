import { FaRegCircleCheck } from "react-icons/fa6";

const Feature = ({feature}) => {
    return (
        <div className="flex items-center ">
            <FaRegCircleCheck className="text-green-600 mr-4 "></FaRegCircleCheck> 
            <p>{feature}</p>
        </div>
    );
};

export default Feature;