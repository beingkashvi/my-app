"use client";
import React, { useState } from "react";

const Builder = () => {
  const [customFields, setCustomFields] = useState<{ label: string; value:string}[]>([]);
  const addCustomField = () => {
    setCustomFields([...customFields, {label:"",value:""}]);
  };
  return (
    
      <div className="bg-black p-6 rounded absolute inset-y-0 left-0">
        <h2 className="text-2xl font-bold mb-4">Your details:</h2>
        <form className="space-y-8">
          <div>
            <label className="block text-sm">Full Name</label>
            <input type="text" className="w-full p-2 bg-[#4F4747] bg-opacity-25 rounded" />
          </div>
          <div>
            <label className="block text-sm">Headline</label>
            <input type="text" className="w-full p-2 bg-[#4F4747] bg-opacity-25 rounded" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm">Email</label>
              <input type="email" className="w-full p-2 bg-[#4F4747] bg-opacity-25 rounded" />
            </div>
            <div>
              <label className="block text-sm">Website</label>
              <input type="url" className="w-full p-2 bg-[#4F4747] bg-opacity-25 rounded" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm">Phone</label>
              <input type="tel" className="w-full p-2 bg-[#4F4747] bg-opacity-25 rounded" />
            </div>
            <div>
              <label className="block text-sm">Location</label>
              <input type="text" className="w-full p-2 bg-[#4F4747] bg-opacity-25 rounded" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm">Experience</label>
              <textarea className="w-full p-2 bg-[#4F4747] bg-opacity-25 rounded"></textarea>
            </div>
            <div>
              <label className="block text-sm">Skills</label>
              <textarea className="w-full p-2 bg-[#4F4747] bg-opacity-25 rounded"></textarea>
            </div>
          </div>
          {customFields.map((_, index) => (
            <div key={index}>
              <label className="block text-sm">Custom Field {index + 1}</label>
              <input type="text" className="w-full p-2 bg-[#4F4747] bg-opacity-25 rounded" />
            </div>
          ))}
          <button type="button" onClick={addCustomField} className="text-center text-sm bg-[#4F4747] bg-opacity-50 text-white-400 cursor-pointer rounded p-2">+ Add a custom field</button>
        </form>
      </div>
  );
};

export default Builder;
