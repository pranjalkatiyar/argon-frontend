import { Link } from 'react-router-dom';
import { useUser } from '@clerk/clerk-react';
const Home = () => {

    const {isSignedIn} = useUser();

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            {!isSignedIn && <Link to="/login" className="px-8 py-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 font-bold text-2xl">Login/SignUp</Link>}
        </div>
    )
}

export default Home;
