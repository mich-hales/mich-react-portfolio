import React from 'react';

export default function contact() {
    return (
        <div className='contentContainer container'>
            <h1 className='contactHeader'>Contact</h1>
            <div className='contactInput'>
                <div class="mb-3">
                    <label for="formGroupExampleInput" class="form-label">Name</label>
                    <input type="text" class="form-control" id="nameInput" placeholder="Jane Doe"/>
                </div>
                <div class="mb-3">
                    <label for="formGroupExampleInput2" class="form-label">Email Address</label>
                    <input type="text" class="form-control" id="emailInput" placeholder="example@email.com"/>
                </div>
                <div class="mb-3">
                    <label for="messageInput" class="form-label">Message</label>
                    <textarea class="form-control" id="messageInput" rows="5"></textarea>
                </div>
                <button className='btn'>Submit</button>
            </div>
        </div>
    )
}