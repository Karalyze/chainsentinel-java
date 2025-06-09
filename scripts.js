document.getElementById('uploadForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];

    if (file) {
        const formData = new FormData();
        formData.append('file', file);

        // Mocking a PDF generation
        generateMockPDF(formData);
    } else {
        alert("Please upload a valid file.");
    }
});

function generateMockPDF(formData) {
    // This function will simulate the PDF report generation
    // In a real-world application, you would process the file here
    setTimeout(() => {
        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML = '<p>Your scan is complete! Download the PDF report below:</p>';
        resultDiv.innerHTML += '<a href="mock_report.pdf" download="ChainSentinel_Scan_Report.pdf">Download Report</a>';
    }, 2000);  // Simulating a 2-second delay for report generation
}
