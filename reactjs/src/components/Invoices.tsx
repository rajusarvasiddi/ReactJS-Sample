import React from "react";
import { List, ListItem, Card } from "@material-tailwind/react";
import { Link, Outlet, useParams, useLocation } from "react-router-dom";

interface Invoice{
    id: string,
    customer: string,
    amount: number,
    date: string,
    status: string
}

function Invoices() {
    // const [selected, setSelected] = React.useState(1);
    //   const setSelectedItem = (value: any) => setSelected(value);
    const { invoiceId } = useParams<{invoiceId: string}>();
    const invoices = [
        { id: '1001', customer: 'Acme Corp', amount: 1250, date: '2025-05-01', status: 'Paid' },
        { id: '1002', customer: 'Globex Inc', amount: 850, date: '2025-04-28', status: 'Pending' },
        { id: '1003', customer: 'Stark Industries', amount: 3200, date: '2025-04-25', status: 'Overdue' }
    ];

    return <>
        <div className="bg-white flex-1 rounded shadow p-4 min-h-screen">
            <h1 className="text-2xl font-bold mb-2 text-gray-800">Invoices</h1>
            <p className="text-gray-600">This area does not grow past the screen. It stays scrollable inside itself.</p>
            <div className="flex flex-1 space-x-4 h-[calc(100vh-10rem)]">
                <div className="w-64 bg-gray-200 p-4 h-full overflow-auto">
                    <p className="text-gray-600">Column 1 content</p>
                        {invoices.map((invoice) => (
                            <div key={invoice.id} className={`hover:bg-gray-50 ${invoice.id === invoiceId ? 'bg-blue-50' : ''}`}>
                                {/* <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    <div>{invoice.id}</div>
                                    {invoice.customer}
                                </td> */}
                                {/* <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${invoice.amount.toFixed(2)}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 hidden md:table-cell">{invoice.date}</td> */}
                                {/* <td className="px-6 py-4 whitespace-nowrap">
                                    <span 
                                    className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full 
                                    ${invoice.status === 'Paid' ? 'bg-green-100 text-green-800' : 
                                        invoice.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 
                                        'bg-red-100 text-red-800'}`}
                                    >
                                    {invoice.status}
                                    </span>
                                </td> */}
                                <div className="px-2 py-2 whitespace-nowrap text-sm font-medium">
                                    {/* Using Link to show details without a full page change */}
                                    <Link 
                                        to={`/dashboard/invoice/${invoice.id}`} 
                                        className={`text-black-600 hover:text-blue-900 ${invoice.id === invoiceId ? 'font-bold' : ''}`}
                                    >
                                        <div>{invoice.id}</div>
                                        {invoice.customer}
                                    </Link>
                                </div>
                            </div>
                        ))}
                </div>
                <div className="flex-1 bg-gray-100 p-4 h-full overflow-auto">
                    <p className="text-gray-600" style={{height: "3000px"}}>
                        <div>
                            { invoiceId }
                        </div>
                        <Outlet />
                    </p>
                </div>
            </div>
        </div>
    </>
}

export default Invoices;