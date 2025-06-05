import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PageTitle from "./shared/PageTitle";

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
          `https://jsonplaceholder.typicode.com/posts/${invoiceId}`,
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
            <div>{data.body}</div>
            <table
              style={{
                borderCollapse: "collapse",
                width: "100%",
                marginTop: "1rem",
              }}
            >
              <tbody>
                {Object.entries(data).map(([key, value]) => (
                  <tr key={key}>
                    <th
                      style={{
                        border: "1px solid #ccc",
                        padding: "8px",
                        textAlign: "left",
                        background: "#f0f0f0",
                      }}
                    >
                      {key}
                    </th>
                    <td
                      style={{
                        border: "1px solid #ccc",
                        padding: "8px",
                        whiteSpace: "pre-wrap",
                      }}
                    >
                      {String(value)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}
      </div>
    </>
  );
}

export default InvoiceDetails;
