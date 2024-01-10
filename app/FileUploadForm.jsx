// FileUploadForm.jsx
"use client";
import React, { useState, useEffect } from 'react';

const FileUploadForm = () => {
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [formData, setFormData] = useState({
        Category: '',
    });
    const [categories, setCategories] = useState([]);
    const [btnText, setBtnText] = useState('Submit');

    useEffect(() => {
        // Fetch categories from the server
        fetch('http://89.116.34.51:3002/api/categories')
            .then((response) => response.json())
            .then((data) => {
                console.log('Fetched categories:', data);
                setCategories(data);
            })
            .catch((error) => console.error('Error fetching categories:', error));
    }, []);
    

    const handleFileChange = (event) => {
        setSelectedFiles(Array.from(event.target.files));
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formDataToSend = new FormData();

        selectedFiles.forEach((file, index) => {
            formDataToSend.append('images', file);
        });

        formDataToSend.append('category_id', formData.Category);

        try {
            const response = await fetch('http://89.116.34.51:3002/api/upload', {
                method: 'POST',
                body: formDataToSend,
            });

            if (response.ok) {
                setBtnText('Done');
                console.log('Form data and files uploaded successfully!');
            } else {
                setBtnText('Something Went Wrong');
                console.error('Form data and file upload failed.');
            }
        } catch (error) {
            setBtnText('Something Went Wrong');
            console.error('Error during form data and file upload:', error);
        }
    };

    return (
        <div className="container mx-auto p-4">
            <form onSubmit={handleSubmit}>
                {/* File input */}
                <label htmlFor="file">Select Files:</label>
                <input type="file" id="file" name="file" onChange={handleFileChange} multiple />

                {/* Category input */}
                <label htmlFor="Category">Category:</label>
                <select
                    id="Category"
                    name="Category"
                    onChange={handleChange}
                    defaultValue=""
                    style={{ color: 'black' }}
                >
                    <option value="" disabled hidden>
                        Select Category
                    </option>
                    {categories.map((category) => (
                        <option
                            key={category.id}
                            value={category.id}
                            style={{ backgroundColor: 'red' }}
                        >
                            {category.name}
                        </option>
                    ))}
                </select>

                {/* Submit button */}
                <button type="submit">{btnText}</button>
            </form>
        </div>
    );
};

export default FileUploadForm;
