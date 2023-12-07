import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Button, Form, Toast } from 'react-bootstrap';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import ExcelJS from 'exceljs';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

const CustomerList = () => {
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    axios.get('/api/fruits').then(response => setContacts(response.data));
  }, []);

  const handleDelete = (id) => {
    axios.delete(`/api/fruits/${id}`).then(() => {
      setContacts(prevContacts => prevContacts.filter(contact => contact._id !== id));
      setShowNotification(true);

      // Hide the notification after a certain duration (e.g., 3 seconds)
      setTimeout(() => {
        setShowNotification(false);
      }, 3000);
    });
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const generatePdf = () => {
    const headerText = "Page {pageNumber} of {pageCount}";
    const footerText = '© 2023 Union Center Pharmacy. All Rights Reserved.';

    const docDefinition = {
      header: {
        text: headerText,
        alignment: 'center',
        margin: [0, 20, 0, 0],
      },
      footer: {
        text: footerText,
        alignment: 'center',
        margin: [0, 20, 0, 0],
      },
      content: [
        { text: 'Union Center', style: 'header1' },
        { text: 'Pharmacy', style: 'header' },
        { text: '\n' },
        { text: 'Customer List', style: 'header' },
        { text: '\n' },
        {
          table: {
            headerRows: 1,
            widths: ['auto', 'auto', 'auto', 'auto', 'auto', 'auto', '*', 'auto', 'auto'],
            body: [
              [
                { text: 'No.', style: 'tableHeader' },
                { text: 'First Name', style: 'tableHeader' },
                { text: 'Last Name', style: 'tableHeader' },
                { text: 'Address', style: 'tableHeader' },
                { text: 'Gender', style: 'tableHeader' },
                { text: 'Phone Number', style: 'tableHeader' },
                { text: 'Date of Birth', style: 'tableHeader' },
                { text: 'NIC', style: 'tableHeader' },
                { text: 'Description', style: 'tableHeader' },
              ],
              ...contacts
                .filter(contact => {
                  const fullName = `${contact.firstName} ${contact.lastName}`.toLowerCase();
                  const searchTermLowerCase = searchTerm.toLowerCase();
                  return fullName.includes(searchTermLowerCase);
                })
                .map((contact, index) => [
                  { text: (index + 1).toString(), alignment: 'center', fillColor: '#f2f2f2' },
                  { text: contact.firstName },
                  { text: contact.lastName },
                  { text: contact.address },
                  { text: contact.gender },
                  { text: contact.phoneNumber },
                  { text: new Date(contact.dateOfBirth).toLocaleDateString(), fillColor: '#f2f2f2' },
                  { text: contact.nic, fillColor: '#f2f2f2' },
                  { text: contact.description || '', fillColor: '#f2f2f2' },
                ]),
            ],
          },
        },
      ],
      styles: {
        header1: {
          fontSize: 20,
          bold: true,
          alignment: 'center',
          margin: [0, 0, 0, 10],
        },
        header: {
          fontSize: 18,
          bold: true,
          alignment: 'center',
          margin: [0, 0, 0, 10],
        },
        tableHeader: {
          bold: true,
          alignment: 'left',
          fillColor: '#6495ED',
          margin: [0, 0, 0, 10],
        },
      },
    };

    pdfMake.createPdf(docDefinition).download('customer_report.pdf');
  };

  const generateExcel = () => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Customer List');

    // Define column headers
    worksheet.columns = [
      { header: 'No.', key: 'no' },
      { header: 'First Name', key: 'firstName' },
      { header: 'Last Name', key: 'lastName' },
      { header: 'Address', key: 'address' },
      { header: 'Gender', key: 'gender' },
      { header: 'Phone Number', key: 'phoneNumber' },
      { header: 'Date of Birth', key: 'dateOfBirth' },
      { header: 'NIC', key: 'nic' },
      { header: 'Description', key: 'description' },
    ];

    // Populate data rows
    contacts
      .filter(contact => {
        const fullName = `${contact.firstName} ${contact.lastName}`.toLowerCase();
        const searchTermLowerCase = searchTerm.toLowerCase();
        return fullName.includes(searchTermLowerCase);
      })
      .forEach((contact, index) => {
        worksheet.addRow({
          no: index + 1,
          firstName: contact.firstName,
          lastName: contact.lastName,
          address: contact.address,
          gender: contact.gender,
          phoneNumber: contact.phoneNumber,
          dateOfBirth: new Date(contact.dateOfBirth).toLocaleDateString(),
          nic: contact.nic,
          description: contact.description,
        });
      });

    // Generate and download Excel file
    workbook.xlsx.writeBuffer().then(buffer => {
      const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'customer_report.xlsx';
      a.click();
      window.URL.revokeObjectURL(url);
    });
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '89vh',
        width: '185vh',
        backgroundImage: `url('https://static.vecteezy.com/system/resources/previews/002/196/212/large_2x/abstract-blue-hexagon-pattern-background-medical-and-science-concept-and-health-care-icon-pattern-free-vector.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div>
        <h1>𝘾𝙐𝙎𝙏𝙊𝙈𝙀𝙍 𝘿𝙀𝙏𝘼𝙄𝙇𝙎</h1>
        <br />
        <Form.Control
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={handleSearch}
          style={{ marginBottom: '10px' }}
        />

        <Button variant="primary" size="sm" onClick={generatePdf} style={{ marginBottom: '10px', fontSize: '12px' }}>
          Generate PDF
        </Button>
        <Button variant="success" size="sm" onClick={generateExcel} style={{ marginBottom: '10px', fontSize: '12px', marginLeft: '10px' }}>
          Generate Excel
        </Button>

        <Table striped bordered hover size="sm" style={{ fontSize: '12px' }}>
          <thead>
            <tr>
              <th>No.</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Address</th>
              <th>Gender</th>
              <th>Phone Number</th>
              <th>Date of Birth</th>
              <th>NIC</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {contacts
              .filter(contact => {
                const fullName = `${contact.firstName} ${contact.lastName}`.toLowerCase();
                const searchTermLowerCase = searchTerm.toLowerCase();
                return fullName.includes(searchTermLowerCase);
              })
              .map((contact, index) => (
                <tr key={contact._id}>
                  <td>{index + 1}</td>
                  <td>{contact.firstName}</td>
                  <td>{contact.lastName}</td>
                  <td>{contact.address}</td>
                  <td>{contact.gender}</td>
                  <td>{contact.phoneNumber}</td>
                  <td>{new Date(contact.dateOfBirth).toLocaleDateString()}</td>
                  <td>{contact.nic}</td>
                  <td>{contact.description}</td>
                  <td>
                    <Button variant="warning" size="sm" href={`api/fruits/edit/${contact._id}`} style={{ fontSize: '12px' }}>
                      Edit
                    </Button>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => handleDelete(contact._id)}
                      style={{ fontSize: '12px' }}
                    >
                      Delete
                    </Button>

                    <Toast
                      show={showNotification}
                      onClose={() => setShowNotification(false)}
                      style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                      }}
                    >
                      <Toast.Header>
                        <strong className="mr-auto">Notification</strong>
                      </Toast.Header>
                      <Toast.Body>Details deleted successfully!</Toast.Body>
                    </Toast>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default CustomerList;

