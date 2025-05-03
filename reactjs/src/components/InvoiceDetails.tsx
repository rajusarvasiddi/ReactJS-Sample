import { useLocation, useParams } from "react-router-dom";

function InvoiceDetails() {
    
    const location = useLocation();
    const { invoiceId } = useParams<{invoiceId: string}>();
    return <>
        <div>INVOICE DETAILS: # {invoiceId}</div>
        <p></p>
    </>
}

export default InvoiceDetails;