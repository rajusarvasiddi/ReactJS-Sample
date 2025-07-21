import { useEffect, useState } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import apiClient from "../api/apiClient";
import Placeholder from "../Components/Placeholder";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";


function Invoices() {
    const [data, setData] = useState<Record<string, any> | null>([]);
    const { invoiceId } = useParams<{invoiceId: string}>();
    const location = useLocation();

    const [userData, setUserData] = useState<Record<string, any> | null>([]);
    const showPlaceholder = location.pathname === '/dashboard/invoice';

    useEffect(() => {
        const fetchData = async() => {
            setData(null);
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users");
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const result = await response.json();
                setData(result);
            } catch (err: any) {
                console.log('ERROR :: ', err);
            }
            // finally {}
        };

        fetchData();
    }, []);

    useEffect(() => {
        const getUsers = async () => {
            setUserData(null);
            try {
                const response = await apiClient.get('comments');
                setUserData(response.data);
                console.log(response.data);
            } catch(error) {
                console.log("API Error :: ", error);
            }
        };
        getUsers();
    }, []);

    return <>
        <main className="flex-1 p-4 overflow-auto">
            <div className="bg-white flex-1 rounded shadow p-4 min-h-screen--">
                <h1 className="text-2xl font-bold mb-2 text-gray-800">Invoices</h1>
                <p className="text-gray-600">This area does not grow past the screen. It stays scrollable inside itself.</p>
                <div className="flex flex-1 space-x-4 h-[calc(100vh-10rem)]">
                    

                    <ul className="w-64 bg-gray-200 p-4 h-full overflow-auto">
                        {/* USERS LIST */}
                        {
                            data && data.map((user: any) => (
                                <li key={user.id} className={`hover:bg-gray-50 ${(user.id).toString() === invoiceId ? 'bg-blue-50' : ''}`}>
                                    <div className="px-2 whitespace-nowrap text-sm font-medium">
                                        <Link to={`/dashboard/invoice/${user.id}`}
                                            className={`text-black-600 py-2 hover:text-blue-900 w-full inline-block ${user.id === invoiceId ? 'font-bold' : ''}`}>
                                            {user.name}
                                        </Link>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>

                    <div className="flex-1 bg-gray-100 p-4 h-full overflow-auto">
                        <div className="text-gray-600">
                            {
                            showPlaceholder ? (
                            <div className="text-lg text-gray-500">
                                <Placeholder
                                    message="Select an invoice from the list to view invoice details."
                                    icon={<InfoOutlinedIcon sx={{ fontSize: 60 }} />}
                                />
                            </div>) : (
                                <Outlet />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </>
}

export default Invoices;