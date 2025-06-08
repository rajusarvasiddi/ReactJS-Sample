import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PageTitle from "../shared/PageTitle";

function InvoiceDetails() {
  const { invoiceId } = useParams<{ invoiceId: string }>();
  const [data, setData] = useState<Record<string, any> | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    if (!invoiceId) {
      <PageTitle title={ "Invoice loading ... "} />
    }

    const fetchData = async () => {
      setLoading(true);
      setError(null);
      setData(null);
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${invoiceId}?_delay=500`,
          { signal }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        // await new Promise((resolve) => setTimeout(resolve, 3000)); // simulate delay
        const result = await response.json();
        setData(result); // set data first; let UI update before stopping loader
      } catch (err: any) {
        if (err.name !== "AbortError") {
          setError(err);
        }
      }
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, [invoiceId]);

  // Wait for data to be set and render once before hiding loader
  useEffect(() => {
    if (data) {
      // Let the browser paint once with the data before hiding loader
      requestAnimationFrame(() => setLoading(false));
    }
  }, [data]);

  return (
    <>
      {invoiceId && <PageTitle title={ `Invoice ${invoiceId}`} />}
      <div>
        {isLoading && <div>Loading details for ID: #{invoiceId}. Please wait...</div>}
        {error && <div style={{ color: "red" }}>Error: {error.message}</div>}
        {!isLoading && !error && data && (
          <>
            <h2>INVOICE DETAILS: #{invoiceId}</h2>
            <table className="table-auto border-collapse border">
              <tbody>
                <tr className="hover:bg-gray-50">
                  <th className="border px-4 py-2">ID</th>
                  <td className="border px-4 py-2">{data.id}</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <th className="border px-4 py-2">User ID</th>
                  <td className="border px-4 py-2">{data.userId}</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <th className="border px-4 py-2">Title</th>
                  <td className="border px-4 py-2">{data.title}</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <th className="border px-4 py-2">Body</th>
                  <td className="border px-4 py-2">{data.body}</td>
                </tr>
              </tbody>
            </table>
          </>
        )}
      </div>
    </>
  );
}

export default InvoiceDetails;
