import React from "react";

const About = () => {
  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">About iNotebook</h2>

      <p className="lead text-center">
        iNotebook is a secure, simple, and cloud-based note-taking application 
        that helps you organize your ideas, tasks, and thoughts in one place.
      </p>

      <hr />

      <div className="row my-5">
        <div className="col-md-4">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <h5 className="card-title text-primary">📝 Easy Note Management</h5>
              <p className="card-text">
                Create, edit, and delete notes effortlessly with a clean and 
                responsive interface built using React.js.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <h5 className="card-title text-success">🔒 Secure Authentication</h5>
              <p className="card-text">
                Your notes are private and protected — only logged-in users can 
                access or manage their own content using JSON Web Tokens (JWT).
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <h5 className="card-title text-danger">☁️ Cloud Storage</h5>
              <p className="card-text">
                Notes are stored safely in a MongoDB cloud database, so your 
                data stays accessible anywhere, anytime.
              </p>
            </div>
          </div>
        </div>
      </div>

      <h4 className="mt-5">💡 Tech Stack</h4>
      <ul className="list-group list-group-flush mb-4">
        <li className="list-group-item">Frontend: React.js + Bootstrap</li>
        <li className="list-group-item">Backend: Node.js + Express.js</li>
        <li className="list-group-item">Database: MongoDB (Mongoose ORM)</li>
        <li className="list-group-item">Authentication: JSON Web Tokens (JWT)</li>
      </ul>

      <div className="card p-3 mt-4 shadow-sm border-0">
        <h5 className="text-secondary mb-2">👨‍💻 Developer</h5>
        <p className="mb-0">
          This project was developed by <strong>Ranjit Kumar Gupta</strong> as 
          part of a MERN stack learning and placement preparation project.  
          You can explore more of his projects and development journey on GitHub.
        </p>
      </div>
    </div>
  );
};

export default About;
