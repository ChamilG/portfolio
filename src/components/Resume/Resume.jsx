import { Button, Col, Container, Row } from "react-bootstrap";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import { useState, useEffect } from "react";
import pdf from "../../Assets/../Assets/ChamilGamageCV.pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function Resume(){
    const[pageNumber, setpageNumber] = useState(1);
    // function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    //     setNumPages(numPages);
    //   }
    const [width, setWidth] = useState(1200);

    useEffect(() => {
        setWidth(window.innerWidth);
    }, []);
    const handleClick = (num) =>{
        const Tot = 2 // total number of pages need to be displayed
        if (pageNumber + num > Tot){
            setpageNumber(1);
        }
        else if(pageNumber + num < 1){
            setpageNumber(2);
        }
        else{
            setpageNumber(pageNumber + num);
        }  
    }
    return(
        <div>
        <Container fluid className="resume-section">
            <Row style ={{ justifyContent: "center"}}>
                <Button
                 variant="warning"
                 href={pdf}
                 target="_blank"
                 style={{ maxWidth: "250px" }}>
                    <AiOutlineDownload/>
                     Download
                </Button>
            </Row>
            <Row className="button-container">
                    <Button className="button"
                    onClick={()=>handleClick(-1)}>Previous</Button> 
                    <Button className="button"
                    onClick={()=>handleClick(1)}>Next </Button>
            </Row>
            <Row className="resume">
                <Document file={pdf} className="d-flex justify-content-center" > 
                    <Page pageNumber={pageNumber} scale={width > 786 ? 1.9 : 0.6} style= {{height:"100px"}}/>
                </Document>
            </Row>
        </Container>
        </div>
    )
}

export default Resume;