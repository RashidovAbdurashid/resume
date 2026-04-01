function MyCards() {
  return (
    <div>
      <h1 className="my">My Hobbies</h1>
      <div className="cards">
        <div className="card">
          <img
            src="https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a"
            alt="football"
          />
          <div className="card-content">
            <h2>Football</h2>
            <p>
              Football is a popular sport played worldwide. It involves two
              teams competing to score goals.
            </p>
          </div>
        </div>
        <div className="card">
          <img
            src="https://images.unsplash.com/photo-1495521821757-a1efb6729352"
            alt="cooking"
          />
          <div className="card-content">
            <h2>Cooking</h2>
            <p>
              Cooking is the art of preparing food and exploring different
              flavors.
            </p>
          </div>
        </div>

        <div className="card">
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
            alt="travel"
          />
          <div className="card-content">
            <h2>Traveling</h2>
            <p>Traveling allows you to explore new cultures and places.</p>
          </div>
        </div>
      </div>

      <footer>
        <p>&copy; 2026 My Hobbies. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default MyCards;
