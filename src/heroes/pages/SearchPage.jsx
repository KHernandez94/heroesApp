import { useLocation, useNavigate } from "react-router-dom";
import queryString from 'query-string';
import { useForm } from "../../hooks/useForm"
import { HeroCard } from "../components/HeroCard"
import { getHeroesByName } from "../helpers/getHeroesByName";


export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const { q = '' } = queryString.parse(location.search);
  const heroes = getHeroesByName(q);

  const showSearch = (q.length === 0);
  const showError = (q.length > 0) && heroes.length === 0;

  const { searchText, onInputChange } = useForm({
    searchText: q
  });

  const onSearchSubmit = (event) => {
    event.preventDefault();
    navigate(`?q=${searchText}`)
  }


  return (
    <>
      <hr />

      <div className="row">
        <div className="col-5 mt-5">
          <h4 style={{ color: '#DEEFE7' }}>Busca tu heroe</h4>
          <hr />
          <form onSubmit={onSearchSubmit} aria-label="form">
            <input
              type="text"
              placeholder="Search a hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />

            <button className="btn btn-outline-secondary mt-3" style={{
              backgroundColor: '#23606E',
              /* transition: "all 0.3s ease-in-out", */
              borderRadius: "10px",
              color: '#DEEFE7'
            }}>
              Buscar
            </button>

          </form>
        </div>

        <div className="col-7 mt-5">
          <h4 style={{ color: '#DEEFE7' }}>Resultado</h4>
          <hr />

          <div className="alert alert-primary animate__animated animate__lightSpeedInRight"
            style={{ display: showSearch ? '' : 'none' }}>
            Heroe encontrado
          </div>

          <div aria-label="alert-danger" className="alert alert-danger animate__animated animate__lightSpeedInRight"
            style={{ display: showError ? '' : 'none' }}>
            No hay resultados <b>{q}</b>
          </div>


          {
            heroes.map(hero => (
              <HeroCard key={hero.id} {...hero} />
            ))
          }

        </div>

      </div >
    </>

  )
}
