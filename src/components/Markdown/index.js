import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import { Button} from "react-bootstrap";
import "./Markdown.css"

function PDF() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <Document
        file="https://www2.ed.gov/free/toolkit/template.pdf"
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <p>Page {pageNumber} of {numPages}</p>
      <Button type="submit" class="btn" id="edit-btn">Annotate</Button>
    </div>
  );
}
export default PDF
