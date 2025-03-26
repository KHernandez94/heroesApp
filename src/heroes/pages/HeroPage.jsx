import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroById } from "../helpers";



export const HeroPage = () => {

  const { id } = useParams();
  const navigate = useNavigate();

  const hero = useMemo(() => getHeroById(id), [id]);

  const onNavigateBack = () => {
    navigate(-1);
  }


  if (!hero) {
    return <Navigate to="/marvel" />
  }

  return (
    <div className="row mt-5">
      <div className="card shadow-lg border-0 rounded-4 animate__animated animate__fadeInLeft">
        <div className="row g-0">

          <div className="col-md-4 text-center p-2">
            <img
              src={`/assets/heroes/${id}.jpg`}
              alt={hero.superhero}
              className="img-fluid rounded-3 shadow-sm"
              style={{ maxHeight: "400px" }}
            />
          </div>


          <div className="col-md-6 p-4">
            <h2 className="text fw-bold" style={{ color: '#23606E' }}>{hero.superhero}</h2>
            <ul className="list-group list-group-flush">
              <li className="list-group-item"><b>Alter ego:</b> {hero.alter_ego}</li>
              <li className="list-group-item"><b>Publisher:</b> {hero.publisher}</li>
              <li className="list-group-item"><b>First appearance:</b> {hero.first_appearance}</li>
            </ul>
            <h5 className="mt-4" style={{ color: '#23606E' }}>Characters</h5>
            <p className="text-dark">{hero.characters}</p>

            <button className="btn btn-animated px-4 py-2 mt-3"
              style={{
                backgroundColor: '#23606E',
                transition: "all 0.3s ease-in-out",
                borderRadius: "10px",
                color: '#DEEFE7'
              }}
              onClick={onNavigateBack}
            >
              Regresar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
