
"use client";
import React, { useState } from 'react';
import ProjectImageUploadPage from '@/app/ProjectImageUpload'
import AddProjectForm from '@/app/addProject'
import LeftVerticalMenu from '@/components/LeftVerticalMenu';
import FileUploadForm from '@/app/CategoryUpload';
const Dashboard =()=> {
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);

  const handleMenuClick = (menuItem) => {
    setSelectedMenuItem(menuItem);
  };
  return (
    <div className="flex h-screen w-[100%]">
    <LeftVerticalMenu onSelectMenuItem={handleMenuClick} />
    <div className="flex-1 p-4">
      {selectedMenuItem === 'createProject' && <AddProjectForm />}
      {selectedMenuItem === 'uploadImages' && <ProjectImageUploadPage />}
      {selectedMenuItem === 'categories' && <FileUploadForm />}
    </div>
  </div>
  )
}
export default Dashboard
