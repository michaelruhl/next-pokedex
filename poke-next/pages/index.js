import Head from "next/head";
import axios from "axios";
import { useState, React } from "react";


const poke = axios.create({
  baseURL: "https://pokeapi.co/",
  timeout: 1000,
});

export default function Home() {
  const [pokemon, setPokemon] = useState("");
  const [pic, setPic] = useState("");
  const [abilities, setAbilities] = useState("");
  const [abilitiesDesciption, setAbilitiesDescription] = useState("");
  const [species, setSpecies] = useState("");
  const [body, setBody] = useState("");
  const [skill1, setSkill1] = useState("");
  const [skill2, setSkill2] = useState("");
  const [skill3, setSkill3] = useState("");
  const [skill4, setSkill4] = useState("");
  const [skill5, setSkill5] = useState("");
  const [skill6, setSkill6] = useState("");
  // const [types, setTypes] = useState("");
  const [DDF, setDDF] = useState("");
  const [DDF2, setDDF2] = useState("");
  const [DDF3, setDDF3] = useState("");
  const [DDF4, setDDF4] = useState("");
  const [DDF5, setDDF5] = useState("");
  const [DDF6, setDDF6] = useState("");
  const [moveState, setmoveState] = useState("");
  const [moveState2, setmoveState2] = useState("");
  const [moveState3, setmoveState3] = useState("");
  const [moveState4, setmoveState4] = useState("");


  let pokeID;
  let abilityURL;
  let swURL;
  let dmg2Array = [];
  let dmg2Array2 = [];
  let dmg2Array3 = [];
  let dmg2Array4 = [];
  let dmg2Array5 = [];
  let dmg2Array6 = [];

  let renderList;

  const searchPokemon = async (e) => {
    e.preventDefault();
    await poke.get(`api/v2/pokemon/${pokemon}`).then((res) => {
      console.log(res.data);
      const data = res.data;
      pokeID = data.id;
      abilityURL = data.abilities;

      swURL = data.types;
      setPic(data.sprites.front_default);
      setAbilities(data.abilities);
      setBody(data);
      // setTypes(data.types)
      pokeDescription(pokeID);
      pokeAbility();
      returnMoves(data);

      const statsList = data.stats;
      const returnStatArray = () => {
        let statArray = [];
        let skillArray = [];
        let largestStat;

        for (let stat of statsList) {
          statArray.push(stat.base_stat);
        }
        largestStat = Math.max(...statArray);
        for (let skill of statArray) {
          skillArray.push(Math.floor((skill / largestStat) * 100));
        }
        // setSkill1(skillArray)

        setSkill1({ width: `${skillArray[0]}%` });
        setSkill2({ width: `${skillArray[1]}%` });
        setSkill3({ width: `${skillArray[2]}%` });
        setSkill4({ width: `${skillArray[3]}%` });
        setSkill5({ width: `${skillArray[4]}%` });
        setSkill6({ width: `${skillArray[5]}%` });

        return skillArray;
      };

      returnStatArray();
    });
  };

  // API call for GETing pokemon description
  const pokeDescription = (pokeID) => {
    poke.get(`api/v2/pokemon-species/${pokeID}`).then((res) => {
      const data = res.data;
      setSpecies(data.flavor_text_entries[1].flavor_text.replace("\f", "\n"));
    });
  };

  // API call for GETing ability description
  const pokeAbility = () => {
    Promise.all([
      poke.get(abilityURL[0].ability.url),
      poke.get(abilityURL[1].ability.url),
      // add GET for location found
      poke.get(`api/v2/pokemon/${pokeID}/encounters`),
      // GET for Types
      poke.get(swURL[0].type.url),
      // GET for moves
      
    ]).then((res) => {
      const data = [res[0].data, res[1].data, res[2].data, res[3].data];
      setAbilitiesDescription(data);
      returnSW(data[3]);
    });
  };

  const returnSW = (e) => {
    for (let sw of e.damage_relations.double_damage_from) {
      if (sw.name) {
        dmg2Array.push(sw.name);
      }
    }
    for (let sw2 of e.damage_relations.double_damage_to) {
      if (sw2.name) {
        dmg2Array2.push(sw2.name);
      }
    }
    for (let sw3 of e.damage_relations.half_damage_from) {
      if (sw3.name) {
        dmg2Array3.push(sw3.name);
      }
    }
    for (let sw4 of e.damage_relations.half_damage_to) {
      if (sw4.name) {
        dmg2Array4.push(sw4.name);
      }
    }
    for (let sw5 of e.damage_relations.no_damage_from) {
      if (sw5.name) {
        dmg2Array5.push(sw5.name);
      }
    }
    for (let sw6 of e.damage_relations.no_damage_to) {
      if (sw6.name) {
        dmg2Array6.push(sw6.name);
      }
    }
    setDDF(
      dmg2Array.map((type) => (
        <div> {type.charAt(0).toUpperCase() + type.slice(1)} </div>
      ))
    );
    setDDF2(
      dmg2Array2.map((type) => (
        <div> {type.charAt(0).toUpperCase() + type.slice(1)} </div>
      ))
    );
    setDDF3(
      dmg2Array3.map((type) => (
        <div> {type.charAt(0).toUpperCase() + type.slice(1)} </div>
      ))
    );
    setDDF4(
      dmg2Array4.map((type) => (
        <div> {type.charAt(0).toUpperCase() + type.slice(1)} </div>
      ))
    );
    setDDF5(
      dmg2Array5.map((type) => (
        <div> {type.charAt(0).toUpperCase() + type.slice(1)} </div>
      ))
    );
    setDDF6(
      dmg2Array6.map((type) => (
        <div> {type.charAt(0).toUpperCase() + type.slice(1)} </div>
      ))
    );
    // return dmg2Array;
  };

  const returnMoves = (e) => {
    let movesArr = e.moves.slice(0, 19);
    let movesArr2 = [];
    let movesArr3 = e.moves.slice(20, 39);
    let movesArr4 = [];
    let movesArr5 = e.moves.slice(40, 59);
    let movesArr6 = [];
    let movesArr7 = e.moves.slice(60, 79);
    let movesArr8 = [];

    let movesArrType = [];

    for (let m of movesArr) {
      if (m.move.name) {
        movesArr2.push(m.move.name);
        // poke.get(`${m.move.url}`).then((res) => {
        //   const data = res.data
        //   console.logdata.contest_combos[0]
        // })
      }
    }
    for (let m of movesArr3) {
      if (m.move.name) {
        movesArr4.push(m.move.name);
      }
    }
    for (let m of movesArr5) {
      if (m.move.name) {
        movesArr6.push(m.move.name);
      }
    }
    for (let m of movesArr7) {
      if (m.move.name) {
        movesArr8.push(m.move.name);
      }
    }
    setmoveState(movesArr2.map((o) => <div> {o.charAt(0).toUpperCase() + o.slice(1)} </div>));
    setmoveState2(movesArr4.map((o) => <div> {o.charAt(0).toUpperCase() + o.slice(1)} </div>));
    setmoveState3(movesArr6.map((o) => <div> {o.charAt(0).toUpperCase() + o.slice(1)} </div>));
    setmoveState4(movesArr8.map((o) => <div> {o.charAt(0).toUpperCase() + o.slice(1)} </div>));

    // console.log(movesArr2);
    // console.log(moveState);
  };

  return (
    <div id="dexContainer" className="col bg-danger">
      <Head>
        <title>PokeDex</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main id="mainContainer">
        <div className="col">
          <div className="container text-center">
            <div className="row">
              <div className="col">
                {species ? (
                  <div id="picDescContainer1">
                    <div className="card text-bg-danger mb-3 ">
                      <div className="card-header" style={{ fontSize: "36px" }}>
                        Moves
                      </div>
                      <ul className="nav nav-tabs" style={{display: "flex", justifyContent: "center"}}id="myTab" role="tablist">
  <li className="nav-item" role="presentation">
    <button className="nav-link active" style={{color: "white"}} id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">1</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link" style={{color: "white"}} id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">2</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link" style={{color: "white"}} id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">3</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link" style={{color: "white"}} id="disabled-tab" data-bs-toggle="tab" data-bs-target="#disabled-tab-pane" type="button" role="tab" aria-controls="disabled-tab-pane" aria-selected="false">4</button>
  </li>
</ul>
<div className="tab-content" id="myTabContent">
  <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabIndex="0"><div className="card-text">{moveState}</div></div>
  <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabIndex="0">{moveState2}</div>
  <div className="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabIndex="0">{moveState3}</div>
  <div className="tab-pane fade" id="disabled-tab-pane" role="tabpanel" aria-labelledby="disabled-tab" tabIndex="0">{moveState4}</div>
</div>
                        
                      </div>
                                        </div>
                ) : (
                  <div></div>
                )}
              </div>
              <div className="col bg-danger" style={{ height: "100vh" }}>
                <form onSubmit={searchPokemon}>
                  <div
                    id="search"
                    className="input-group mb-3 d-flex align-content-center"
                  >
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Type in a pokemon"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                      value={pokemon}
                      onChange={(event) => setPokemon(event.target.value)}
                    />
                    <div className="input-group-append">
                      <button type="submit" className="btn btn-primary btn-lg">
                        go!
                      </button>
                    </div>
                  </div>
                </form>
                {species ? (
                  <div id="picDescContainer1">
                    <div className="card text-bg-danger mb-3">
                      <h1 className="card-title">
                        {body.name.charAt(0).toUpperCase() + body.name.slice(1)}
                      </h1>
                      <img
                        className="card-img-top"
                        src={pic}
                        alt="Card image cap"
                      />
                      <div className="card-body">
                        <h4 id="desc" className="card-text">
                          {species}
                        </h4>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
              <div className="col">
                {species && abilities && abilitiesDesciption ? (
                  <div id="picDescContainer1">
                    <div className="card text-bg-danger mb-3 ">
                      <div className="card-header">
                        <nav>
                          <div
                            className="nav nav-tabs"
                            id="nav-tab"
                            role="tablist"
                            style={{display: "flex", justifyContent: "center"}}
                          >
                            <button
                              className="nav-link active"
                              id="nav-home-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#nav-home"
                              type="button"
                              role="tab"
                              aria-controls="nav-home"
                              aria-selected="true"
                              style={{ color: "white", fontSize: "26px" }}
                            >
                              Stats
                            </button>
                            <button
                              className="nav-link"
                              id="nav-profile-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#nav-profile"
                              type="button"
                              role="tab"
                              aria-controls="nav-profile"
                              aria-selected="false"
                              style={{ color: "white", fontSize: "26px" }}
                            >
                              Profile
                            </button>
                            <button
                              className="nav-link"
                              id="nav-contact-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#nav-contact"
                              type="button"
                              role="tab"
                              aria-controls="nav-contact"
                              aria-selected="false"
                              style={{ color: "white", fontSize: "26px" }}
                            >
                              Abilities
                            </button>
                          </div>
                        </nav>
                      </div>
                      <div className="tab-content" id="nav-tabContent">
                        <div
                          className="tab-pane fade show active"
                          id="nav-home"
                          role="tabpanel"
                          aria-labelledby="nav-home-tab"
                          tabIndex="0"
                        >
                          <h3>Stats</h3>
                          <div className="progress">
                            <div
                              className="progress-bar progress-bar-striped progress-bar-animated"
                              role="progressbar"
                              aria-label="Default striped example"
                              style={skill1}
                              aria-valuenow="10"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            >
                              HP
                            </div>
                          </div>
                          <div className="progress">
                            <div
                              className="progress-bar progress-bar-striped bg-success progress-bar-animated"
                              role="progressbar"
                              aria-label="Success striped example"
                              style={skill2}
                              aria-valuenow="25"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            >
                              Attack
                            </div>
                          </div>
                          <div className="progress">
                            <div
                              className="progress-bar progress-bar-striped bg-info progress-bar-animated"
                              role="progressbar"
                              aria-label="Info striped example"
                              style={skill3}
                              aria-valuenow="50"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            >
                              Defense
                            </div>
                          </div>
                          <div className="progress">
                            <div
                              className="progress-bar progress-bar-striped bg-warning progress-bar-animated"
                              role="progressbar"
                              aria-label="Warning striped example"
                              style={skill4}
                              aria-valuenow="75"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            >
                              Special-Attack
                            </div>
                          </div>
                          <div className="progress">
                            <div
                              className="progress-bar progress-bar-striped bg-danger progress-bar-animated"
                              role="progressbar"
                              aria-label="Danger striped example"
                              style={skill5}
                              aria-valuenow="100"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            >
                              Special-Defense
                            </div>
                          </div>
                          <div className="progress">
                            <div
                              className="progress-bar progress-bar-striped progress-bar-animated"
                              role="progressbar"
                              aria-label="Default striped example"
                              style={skill6}
                              aria-valuenow="10"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            >
                              {" "}
                              Speed{" "}
                            </div>
                          </div>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="nav-profile"
                          role="tabpanel"
                          aria-labelledby="nav-profile-tab"
                          tabIndex="0"
                        >
                          <h3>Profile</h3>
                          <div className="row row-cols-1 row-cols-md-2 g-4">
                            <div className="col">
                              <h5 className="card-title">Height</h5>
                              <p className="card-text">{body.height}00cm</p>
                            </div>
                            <div className="col">
                              <h5 className="title">Location Found</h5>
                              <p className="card-text">
                                {abilitiesDesciption[2].length < 1
                                  ? "Unknown"
                                  : abilitiesDesciption[2][0].location_area
                                      .name}
                              </p>
                            </div>
                            <div className="col">
                              <h5 className="card-title">Weight</h5>
                              <p className="card-text">{body.weight}00g</p>
                            </div>
                            <div className="col">
                              <h5 className="card-title">Type</h5>
                              <p className="card-text">
                                {body.types[0].type.name}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="nav-contact"
                          role="tabpanel"
                          aria-labelledby="nav-contact-tab"
                          tabIndex="0"
                        >
                          <h1>Abilities</h1>
                          <div className="card-body">
                            <h5 className="card-title">
                              {abilities[0].ability.name
                                .charAt(0)
                                .toUpperCase() +
                                abilities[0].ability.name.slice(1)}
                            </h5>
                            <p className="card-text">
                              {
                                abilitiesDesciption[0].flavor_text_entries[0]
                                  .flavor_text
                              }
                            </p>
                            <h5 className="card-title">
                              {abilities[1].ability.name
                                .charAt(0)
                                .toUpperCase() +
                                abilities[1].ability.name.slice(1)}
                            </h5>
                            <p className="card-text">
                              {
                                abilitiesDesciption[1].flavor_text_entries[0]
                                  .flavor_text
                              }
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="picDescContainer1">
                      <div className="card text-bg-danger mb-3 ">
                        <div className="card-header">
                          <h1>Strengths / Weaknesses</h1>
                        </div>
                        <div className="row row-cols-1 row-cols-md-2 g-8">
                          <div className="col">
                            <h5 className="card-title">Double Damage From:</h5>
                            <div className="card-text">{DDF}</div>
                          </div>
                          <div className="col">
                            <h5 className="card-title">Double Damage To:</h5>
                            <div className="card-text">{DDF2}</div>
                          </div>
                          <div className="col">
                            <h5 className="card-title">Half Damage From:</h5>
                            <div className="card-text">{DDF3}</div>
                          </div>
                          <div className="col">
                            <h5 className="card-title">Half Damage To:</h5>
                            <div className="card-text">{DDF4}</div>
                          </div>
                          <div className="col">
                            <h5 className="card-title">No Damage From:</h5>
                            <div className="card-text">{DDF5}</div>
                          </div>
                          <div className="col">
                            <h5 className="title">No Damage To:</h5>
                            <div className="card-text">{DDF6}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
