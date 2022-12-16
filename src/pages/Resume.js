import React from 'react';

export default function Resume() {
    const downloadFile = () => {
        fetch('Michelle_Hales_Resume.pdf').then(res => {
            res.blob().then(blob => {
                const fileURL = window.URL.createObjectURL(blob);
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Michelle_Hales_Resume.pdf';
                alink.click();
            })
        })
    }
    
    return (
        <div className="contentContainer container">
            <h1 className='contactHeader'>Resume</h1>

            <section className="skills">
                <h4>Download My Resume<span><button id="downloadBtn" className='btn' onClick={downloadFile} value="download">Download</button></span></h4>
            </section>

            <section className="skills" id="skills">
            <h2 className="subtitle">Skills</h2>
                <div className="row-1">
                    <p className="row-1-content item-1">HTML / CSS</p>
                    <p className="row-1-content item-2">JavaScript</p>
                    <p className="row-1-content item-3">MySQL</p>
                    <p className="row-1-content item-4">React</p>
                </div>
                <div className="row-2">
                    <p className="row-2-content item-1">Object Oriented Programming (OOP)</p>
                    <p className="row-2-content item-2">Model View Controller (MVC)</p>
                    <p className="row-2-content item-3">APIs</p>
                    <p className="row-2-content item-4">GitHub and Git</p>
                </div>
                <div className="row-3">
                    <p className="row-3-content item-1">Express.js</p>
                    <p className="row-3-content item-2">Sequelize</p>
                    <p className="row-3-content item-3">Node.js</p>
                    <p className="row-3-content item-4">Bootstrap</p>
                </div>
            </section>
        </div>
    )
}