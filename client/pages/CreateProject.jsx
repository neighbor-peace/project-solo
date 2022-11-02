import React, { useState } from 'react';

export default function CreateProject({ createProject }) {
  // conditionally rendered
  // higher z level
  // TODO: css transition swipes it in
  const [formData, setFormData] = useState({
    title: '',
  });
  function updateForm(e) {
    setFormData({ title: e.target.value });
  }
  return (
    <>
      <h1>Create a new project</h1>
      <form onSubmit={(e) => createProject(formData)}>
        <label htmlFor='projectTitle'>Enter a project title</label>
        <input
          id='projectTitle'
          type='text'
          value={formData.title}
          onChange={updateForm}
        />
        <button>Create project</button>
      </form>
    </>
  );
}
