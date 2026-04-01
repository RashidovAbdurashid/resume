function MyFunction() {
  return (
    <div className="main">
      <header className="navbar">
        <h2 className="logo">Abdurashid</h2>
        <ul className="nav-links">
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
        </ul>
      </header>

      <section className="hero">
        <div className="hero-text">
          <h1>Salom, Men Abdurashid 👋</h1>
          <p>Frontend Developer | HTML, CSS, JS</p>
          <button>Men bilan bog‘lanish</button>
        </div>

        <div className="hero-img">
          <img
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            alt="profile"
          />
        </div>
      </section>

      <section className="about">
        <h2>Men haqimda</h2>
        <p>
          Men Toshkent shahrida yashayman. Frontend dasturlashni o‘rganayapman.
        </p>  
        <p>Mirzo Ulugbek tumani</p>
      </section>

      <section className="skills">
        <h2>Men bilaman</h2>
        <div className="skill-box">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
        </div>
      </section>
    </div>
  );
}

export default MyFunction;
