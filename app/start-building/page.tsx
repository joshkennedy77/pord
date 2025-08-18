'use client';
import { useState } from 'react';

export default function StartBuilding() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({ name: '', email: '', property: '', designs: [] });

  const handleChange = (e: any) => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow rounded">
      {step === 1 && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Tell us about yourself</h2>
          <input name="name" onChange={handleChange} placeholder="Name" className="border p-2 w-full mb-2"/>
          <input name="email" onChange={handleChange} placeholder="Email" className="border p-2 w-full mb-2"/>
          <button onClick={() => setStep(2)} className="px-4 py-2 bg-blue-600 text-white rounded">Next</button>
        </div>
      )}
      {step === 2 && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Do you already own property?</h2>
          <select name="property" onChange={handleChange} className="border p-2 w-full mb-2">
            <option value="">Select...</option>
            <option value="yes">Yes, I own property</option>
            <option value="no">No, I need help</option>
          </select>
          <button onClick={() => setStep(3)} className="px-4 py-2 bg-blue-600 text-white rounded">Next</button>
        </div>
      )}
      {step === 3 && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Select your favorite designs</h2>
          <label className="block"><input type="checkbox" value="Cactus"/> The Cactus</label>
          <label className="block"><input type="checkbox" value="Fibonacci"/> The Fibonacci</label>
          <button onClick={() => alert('Lead submitted!')} className="mt-4 px-4 py-2 bg-green-600 text-white rounded">Submit</button>
        </div>
      )}
    </div>
  );
}