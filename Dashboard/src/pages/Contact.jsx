import React, { useEffect, useState } from "react";
import axios from "axios";
import { MdContactPhone, MdDelete } from "react-icons/md";

function Contacts() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch contacts on mount
  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await axios.get("https://food-web-wgol.onrender.com/api/contact/");
        if (response.data && Array.isArray(response.data)) {
          setContacts(response.data);
        } else {
          throw new Error("Invalid data format: contacts array not found");
        }
      } catch (err) {
        setError(err.message || "Failed to fetch contacts. Please try again later.");
        console.error("Fetch error:", err);
        setContacts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchContacts();
  }, []);


  if (loading) {
    return <div style={styles.loading}>Loading contacts...</div>;
  }

  if (error) {
    return (
      <div style={styles.error}>
        {error}
        <button 
          style={styles.retryButton} 
          onClick={() => window.location.reload()}
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>
        <MdContactPhone style={{ marginRight: '10px', verticalAlign: 'middle' }} />
        Contact Messages
      </h2>
      {contacts.length === 0 ? (
        <div style={styles.noContacts}>No contact messages found.</div>
      ) : (
        <div style={styles.tableWrapper}>
          <table style={styles.table}>
            <thead style={styles.tableHeader}>
              <tr>
                <th style={styles.th}>Name</th>
                <th style={styles.th}>Email</th>
                <th style={styles.th}>Subject</th>
                <th style={styles.th}>Message</th>
                <th style={styles.th}>Date</th>
               
              </tr>
            </thead>
            <tbody style={styles.tableBody}>
              {contacts.map((contact) => (
                <tr key={contact._id} style={styles.tr}>
                  <td style={styles.td}>{contact.name || 'N/A'}</td>
                  <td style={styles.td}>{contact.email || 'N/A'}</td>
                  <td style={styles.td}>{contact.subject || 'N/A'}</td>
                  <td style={styles.td}>{contact.message || 'N/A'}</td>
                  <td style={styles.td}>
                    {contact.createdAt ? new Date(contact.createdAt).toLocaleDateString() : 'N/A'}
                  </td>
                  
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    maxWidth: "1200px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#333",
    fontSize: "24px",
    fontWeight: "600",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  tableWrapper: {
    height: "50vh",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    borderRadius: "8px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
  tableHeader: {
    display: "block",
    background: "#f8f9fa",
  },
  tableBody: {
    display: "block",
    overflowY: "auto",
    flex: 1,
  },
  tr: {
    display: "table",
    width: "100%",
    tableLayout: "fixed",
  },
  th: {
    padding: "12px 15px",
    borderBottom: "1px solid #ddd",
    textAlign: "left",
    fontWeight: "600",
    color: "#495057",
    width: "16.66%", // Adjusted for 6 columns
  },
  td: {
    padding: "12px 15px",
    borderBottom: "1px solid #eee",
    textAlign: "left",
    color: "#495057",
    width: "16.66%", // Adjusted for 6 columns
  },
  loading: {
    textAlign: "center",
    padding: "40px",
    fontSize: "18px",
    color: "#495057",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "200px",
  },
  error: {
    textAlign: "center",
    padding: "20px",
    fontSize: "16px",
    color: "#dc3545",
    backgroundColor: "#f8d7da",
    borderRadius: "4px",
    margin: "20px auto",
    maxWidth: "500px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  noContacts: {
    textAlign: "center",
    padding: "20px",
    fontSize: "16px",
    color: "#6c757d",
    backgroundColor: "#f8f9fa",
    borderRadius: "4px",
    margin: "20px auto",
    maxWidth: "500px",
  },
  retryButton: {
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    padding: "8px 16px",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "14px",
    alignSelf: "center",
  },
  deleteButton: {
    backgroundColor: "transparent",
    border: "none",
    color: "#dc3545",
    cursor: "pointer",
    fontSize: "18px",
    padding: "5px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};

export default Contacts;