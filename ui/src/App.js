
import React, { useState } from 'react';

function App() {
  const [file1, setFile1] = useState(null);
  const [file2, setFile2] = useState(null);
  const [result, setResult] = useState('');

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (name === 'file1') setFile1(files[0]);
    else setFile2(files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file1', file1);
    formData.append('file2', file2);

    const response = await fetch('http://localhost:5000/compare', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();
    setResult(data.message);
  };

  return (
    <div className="App">
      <h1>Uplaod Dataset</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" name="file1" onChange={handleFileChange} />
        <input type="file" name="file2" onChange={handleFileChange} />
        <button type="submit">Compare Files</button>
      </form>
      {result && <p>{result}</p>}
    </div>
  );
}

export default App;
