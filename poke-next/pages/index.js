import Head from "next/head";
import axios from "axios";
import { useState, React } from "react";
import Popper from "Popper"

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
  const [abilityBug, setAbilityBug] = useState("");
  const [abilityBug2, setAbilityBug2] = useState("");

  let pokeID;
  let abilityURL;
  let swURL;
  let dmg2Array = [];
  let dmg2Array2 = [];
  let dmg2Array3 = [];
  let dmg2Array4 = [];
  let dmg2Array5 = [];
  let dmg2Array6 = [];

  let normalArr = [
    "pound",
    "double-slap",
    "comet-punch",
    "mega-punch",
    "pay-day",
    "scratch",
    "vice-grip",
    "guillotine",
    "razor-wind",
    "swords-dance",
    "cut",
    "whirlwind",
    "bind",
    "slam",
    "stomp",
    "mega-kick",
    "headbutt",
    "horn-attack",
    "fury-attack",
    "horn-drill",
    "tackle",
    "body-slam",
    "wrap",
    "take-down",
    "thrash",
    "double-edge",
    "tail-whip",
    "leer",
    "growl",
    "roar",
    "sing",
    "supersonic",
    "sonic-boom",
    "disable",
    "hyper-beam",
    "strength",
    "growth",
    "quick-attack",
    "rage",
    "mimic",
    "screech",
    "double-team",
    "recover",
    "harden",
    "minimize",
    "smokescreen",
    "defense-curl",
    "focus-energy",
    "bide",
    "metronome",
    "self-destruct",
    "egg-bomb",
    "swift",
    "skull-bash",
    "spike-cannon",
    "constrict",
    "soft-boiled",
    "glare",
    "barrage",
    "lovely-kiss",
    "transform",
    "dizzy-punch",
    "flash",
    "splash",
    "explosion",
    "fury-swipes",
    "hyper-fang",
    "sharpen",
    "conversion",
    "tri-attack",
    "super-fang",
    "slash",
    "substitute",
    "struggle",
    "sketch",
    "mind-reader",
    "snore",
    "flail",
    "conversion-2",
    "protect",
    "scary-face",
    "belly-drum",
    "foresight",
    "perish-song",
    "lock-on",
    "endure",
    "false-swipe",
    "swagger",
    "milk-drink",
    "mean-look",
    "attract",
    "sleep-talk",
    "heal-bell",
    "return",
    "present",
    "frustration",
    "safeguard",
    "pain-split",
    "baton-pass",
    "encore",
    "rapid-spin",
    "sweet-scent",
    "morning-sun",
    "hidden-power",
    "psych-up",
    "extreme-speed",
    "fake-out",
    "uproar",
    "stockpile",
    "spit-up",
    "swallow",
    "facade",
    "smelling-salts",
    "follow-me",
    "nature-power",
    "helping-hand",
    "wish",
    "assist",
    "recycle",
    "yawn",
    "endeavor",
    "refresh",
    "secret-power",
    "camouflage",
    "teeter-dance",
    "slack-off",
    "hyper-voice",
    "crush-claw",
    "weather-ball",
    "odor-sleuth",
    "tickle",
    "block",
    "howl",
    "covet",
    "natural-gift",
    "feint",
    "acupressure",
    "trump-card",
    "wring-out",
    "lucky-chant",
    "me-first",
    "copycat",
    "last-resort",
    "giga-impact",
    "rock-climb",
    "captivate",
    "judgment",
    "double-hit",
    "crush-grip",
    "simple-beam",
    "entrainment",
    "after-you",
    "round",
    "echoed-voice",
    "chip-away",
    "shell-smash",
    "reflect-type",
    "retaliate",
    "bestow",
    "work-up",
    "tail-slap",
    "head-charge",
    "techno-blast",
    "relic-song",
    "noble-roar",
    "boomburst",
    "play-nice",
    "confide",
    "happy-hour",
    "celebrate",
    "hold-hands",
    "hold-back",
    "breakneck-blitz--physical",
    "breakneck-blitz--special",
    "spotlight",
    "laser-focus",
    "revelation-dance",
    "pulverizing-pancake",
    "extreme-evoboost",
    "tearful-look",
    "multi-attack",
    "veevee-volley",
    "max-guard",
    "stuff-cheeks",
    "teatime",
    "court-change",
    "max-strike",
    "terrain-pulse",
  ];
  let bugArr = [
    "twineedle",
    "pin-missile",
    "string-shot",
    "leech-life",
    "spider-web",
    "fury-cutter",
    "megahorn",
    "tail-glow",
    "silver-wind",
    "signal-beam",
    "u-turn",
    "x-scissor",
    "bug-buzz",
    "bug-bite",
    "attack-order",
    "defend-order",
    "heal-order",
    "rage-powder",
    "quiver-dance",
    "struggle-bug",
    "steamroller",
    "sticky-web",
    "fell-stinger",
    "powder",
    "infestation",
    "savage-spin-out--physical",
    "savage-spin-out--special",
    "first-impression",
    "pollen-puff",
    "lunge",
    "max-flutterby",
    "skitter-smack",
  ];
  let electricArr = [
    "thunder-punch",
    "thunder-shock",
    "thunderbolt",
    "thunder-wave",
    "thunder",
    "zap-cannon",
    "spark",
    "charge",
    "volt-tackle",
    "shock-wave",
    "magnet-rise",
    "thunder-fang",
    "discharge",
    "charge-beam",
    "electro-ball",
    "volt-switch",
    "electroweb",
    "wild-charge",
    "bolt-strike",
    "fusion-bolt",
    "ion-deluge",
    "parabolic-charge",
    "electrify",
    "eerie-impulse",
    "magnetic-flux",
    "electric-terrain",
    "nuzzle",
    "gigavolt-havoc--physical",
    "gigavolt-havoc--special",
    "catastropika",
    "stoked-sparksurfer",
    "zing-zap",
    "10-000-000-volt-thunderbolt",
    "plasma-fists",
    "zippy-zap",
    "pika-papow",
    "buzzy-buzz",
    "bolt-beak",
    "max-lightning",
    "aura-wheel",
    "overdrive",
    "rising-voltage",
    "thunder-cage",
  ];
  let fireArr = [
    "fire-punch",
    "ember",
    "flamethrower",
    "fire-spin",
    "fire-blast",
    "flame-wheel",
    "sacred-fire",
    "sunny-day",
    "heat-wave",
    "will-o-wisp",
    "eruption",
    "blaze-kick",
    "blast-burn",
    "overheat",
    "flare-blitz",
    "fire-fang",
    "lava-plume",
    "magma-storm",
    "flame-burst",
    "flame-charge",
    "incinerate",
    "inferno",
    "fire-pledge",
    "heat-crash",
    "searing-shot",
    "blue-flare",
    "fiery-dance",
    "v-create",
    "fusion-flare",
    "mystical-fire",
    "inferno-overdrive--physical",
    "inferno-overdrive--special",
    "fire-lash",
    "burn-up",
    "shell-trap",
    "mind-blown",
    "sizzly-slide",
    "max-flare",
    "pyro-ball",
    "burning-jealousy",
  ];
  let rockArr = [
    "rock-throw",
    "rock-slide",
    "sandstorm",
    "rollout",
    "ancient-power",
    "rock-tomb",
    "rock-blast",
    "rock-polish",
    "power-gem",
    "rock-wrecker",
    "stone-edge",
    "stealth-rock",
    "head-smash",
    "wide-guard",
    "smack-down",
    "diamond-storm",
    "continental-crush--physical",
    "continental-crush--special",
    "accelerock",
    "splintered-stormshards",
    "tar-shot",
    "max-rockfall",
    "meteor-beam",
  ];
  let grassArr = [
    "vine-whip",
    "absorb",
    "mega-drain",
    "leech-seed",
    "razor-leaf",
    "solar-beam",
    "stun-spore",
    "sleep-powder",
    "petal-dance",
    "spore",
    "cotton-spore",
    "giga-drain",
    "synthesis",
    "ingrain",
    "needle-arm",
    "aromatherapy",
    "grass-whistle",
    "bullet-seed",
    "frenzy-plant",
    "magical-leaf",
    "leaf-blade",
    "worry-seed",
    "seed-bomb",
    "energy-ball",
    "leaf-storm",
    "power-whip",
    "grass-knot",
    "wood-hammer",
    "seed-flare",
    "grass-pledge",
    "horn-leech",
    "leaf-tornado",
    "cotton-guard",
    "forests-curse",
    "petal-blizzard",
    "grassy-terrain",
    "spiky-shield",
    "bloom-doom--physical",
    "bloom-doom--special",
    "strength-sap",
    "solar-blade",
    "leafage",
    "trop-kick",
    "sappy-seed",
    "max-overgrowth",
    "drum-beating",
    "snap-trap",
    "branch-poke",
    "apple-acid",
    "grav-apple",
    "grassy-glide",
    "jungle-healing",
  ];
  let darkArr = [
    "bite",
    "thief",
    "feint-attack",
    "pursuit",
    "crunch",
    "beat-up",
    "torment",
    "flatter",
    "memento",
    "taunt",
    "knock-off",
    "snatch",
    "fake-tears",
    "payback",
    "assurance",
    "embargo",
    "fling",
    "punishment",
    "sucker-punch",
    "dark-pulse",
    "night-slash",
    "switcheroo",
    "nasty-plot",
    "dark-void",
    "hone-claws",
    "foul-play",
    "quash",
    "night-daze",
    "snarl",
    "parting-shot",
    "topsy-turvy",
    "hyperspace-fury",
    "black-hole-eclipse--physical",
    "black-hole-eclipse--special",
    "darkest-lariat",
    "throat-chop",
    "power-trip",
    "brutal-swing",
    "malicious-moonsault",
    "baddy-bad",
    "jaw-lock",
    "max-darkness",
    "obstruct",
    "false-surrender",
    "lash-out",
    "wicked-blow",
    "fiery-wrath",
  ];
  let fairyArr = [
    "sweet-kiss",
    "charm",
    "moonlight",
    "disarming-voice",
    "draining-kiss",
    "crafty-shield",
    "flower-shield",
    "misty-terrain",
    "play-rough",
    "fairy-wind",
    "moonblast",
    "fairy-lock",
    "aromatic-mist",
    "geomancy",
    "dazzling-gleam",
    "baby-doll-eyes",
    "light-of-ruin",
    "twinkle-tackle--physical",
    "twinkle-tackle--special",
    "floral-healing",
    "guardian-of-alola",
    "fleur-cannon",
    "natures-madness",
    "lets-snuggle-forever",
    "sparkly-swirl",
    "max-starfall",
    "decorate",
    "spirit-break",
    "strange-steam",
    "misty-explosion",
  ];
  let flyingArr = [
    "gust",
    "wing-attack",
    "fly",
    "peck",
    "drill-peck",
    "mirror-move",
    "sky-attack",
    "aeroblast",
    "feather-dance",
    "air-cutter",
    "aerial-ace",
    "bounce",
    "roost",
    "pluck",
    "tailwind",
    "air-slash",
    "brave-bird",
    "defog",
    "chatter",
    "sky-drop",
    "acrobatics",
    "hurricane",
    "oblivion-wing",
    "dragon-ascent",
    "supersonic-skystrike--physical",
    "supersonic-skystrike--special",
    "beak-blast",
    "floaty-fall",
    "max-airstream",
    "dual-wingbeat",
  ];
  let groundArr = [
    "sand-attack",
    "earthquake",
    "fissure",
    "dig",
    "bone-club",
    "bonemerang",
    "mud-slap",
    "spikes",
    "bone-rush",
    "magnitude",
    "mud-sport",
    "sand-tomb",
    "mud-shot",
    "earth-power",
    "mud-bomb",
    "bulldoze",
    "drill-run",
    "rototiller",
    "thousand-arrows",
    "thousand-waves",
    "lands-wrath",
    "precipice-blades",
    "tectonic-rage--physical",
    "tectonic-rage--special",
    "shore-up",
    "high-horsepower",
    "stomping-tantrum",
    "max-quake",
    "scorching-sands",
  ];
  let poisonArr = [
    "poison-sting",
    "acid",
    "poison-powder",
    "toxic",
    "smog",
    "sludge",
    "poison-gas",
    "acid-armor",
    "sludge-bomb",
    "poison-fang",
    "poison-tail",
    "gastro-acid",
    "toxic-spikes",
    "poison-jab",
    "cross-poison",
    "gunk-shot",
    "venoshock",
    "sludge-wave",
    "coil",
    "acid-spray",
    "clear-smog",
    "belch",
    "venom-drench",
    "acid-downpour--physical",
    "acid-downpour--special",
    "baneful-bunker",
    "toxic-thread",
    "purify",
    "max-ooze",
    "shell-side-arm",
    "corrosive-gas",
  ];
  let steelArr = [
    "steel-wing",
    "iron-tail",
    "metal-claw",
    "meteor-mash",
    "metal-sound",
    "iron-defense",
    "doom-desire",
    "gyro-ball",
    "metal-burst",
    "bullet-punch",
    "mirror-shot",
    "flash-cannon",
    "iron-head",
    "magnet-bomb",
    "autotomize",
    "heavy-slam",
    "shift-gear",
    "gear-grind",
    "kings-shield",
    "corkscrew-crash--physical",
    "corkscrew-crash--special",
    "gear-up",
    "anchor-shot",
    "smart-strike",
    "sunsteel-strike",
    "searing-sunraze-smash",
    "double-iron-bash",
    "max-steelspike",
    "behemoth-blade",
    "behemoth-bash",
    "steel-beam",
    "steel-roller",
  ];
  let dragonArr = [
    "dragon-rage",
    "outrage",
    "dragon-breath",
    "twister",
    "dragon-claw",
    "dragon-dance",
    "dragon-pulse",
    "dragon-rush",
    "draco-meteor",
    "roar-of-time",
    "spacial-rend",
    "dragon-tail",
    "dual-chop",
    "devastating-drake--physical",
    "devastating-drake--special",
    "core-enforcer",
    "clanging-scales",
    "dragon-hammer",
    "clangorous-soulblaze",
    "dynamax-cannon",
    "dragon-darts",
    "max-wyrmwind",
    "clangorous-soul",
    "breaking-swipe",
    "eternabeam",
    "scale-shot",
    "dragon-energy",
  ];
  let fightingArr = [
    "karate-chop",
    "double-kick",
    "jump-kick",
    "rolling-kick",
    "submission",
    "low-kick",
    "counter",
    "seismic-toss",
    "high-jump-kick",
    "triple-kick",
    "reversal",
    "mach-punch",
    "detect",
    "dynamic-punch",
    "vital-throw",
    "cross-chop",
    "rock-smash",
    "focus-punch",
    "superpower",
    "revenge",
    "brick-break",
    "arm-thrust",
    "sky-uppercut",
    "bulk-up",
    "wake-up-slap",
    "hammer-arm",
    "close-combat",
    "force-palm",
    "aura-sphere",
    "drain-punch",
    "vacuum-wave",
    "focus-blast",
    "storm-throw",
    "low-sweep",
    "quick-guard",
    "circle-throw",
    "final-gambit",
    "sacred-sword",
    "secret-sword",
    "flying-press",
    "mat-block",
    "power-up-punch",
    "all-out-pummeling--physical",
    "all-out-pummeling--special",
    "no-retreat",
    "octolock",
    "max-knuckle",
    "body-press",
    "meteor-assault",
    "coaching",
    "thunderous-kick",
  ];
  let ghostArr = [
    "night-shade",
    "confuse-ray",
    "lick",
    "nightmare",
    "curse",
    "spite",
    "destiny-bond",
    "shadow-ball",
    "grudge",
    "astonish",
    "shadow-punch",
    "shadow-claw",
    "shadow-sneak",
    "ominous-wind",
    "shadow-force",
    "hex",
    "phantom-force",
    "trick-or-treat",
    "never-ending-nightmare--physical",
    "never-ending-nightmare--special",
    "spirit-shackle",
    "sinister-arrow-raid",
    "soul-stealing-7-star-strike",
    "shadow-bone",
    "spectral-thief",
    "moongeist-beam",
    "menacing-moonraze-maelstrom",
    "max-phantasm",
    "poltergeist",
    "astral-barrage",
  ];
  let iceArr = [
    "ice-punch",
    "mist",
    "ice-beam",
    "blizzard",
    "aurora-beam",
    "haze",
    "powder-snow",
    "icy-wind",
    "hail",
    "ice-ball",
    "sheer-cold",
    "icicle-spear",
    "avalanche",
    "ice-shard",
    "ice-fang",
    "frost-breath",
    "glaciate",
    "freeze-shock",
    "ice-burn",
    "icicle-crash",
    "freeze-dry",
    "subzero-slammer--physical",
    "subzero-slammer--special",
    "ice-hammer",
    "aurora-veil",
    "freezy-frost",
    "max-hailstorm",
    "triple-axel",
    "glacial-lance",
  ];
  let psychicArr = [
    "psybeam",
    "confusion",
    "psychic",
    "hypnosis",
    "meditate",
    "agility",
    "teleport",
    "barrier",
    "light-screen",
    "reflect",
    "amnesia",
    "kinesis",
    "dream-eater",
    "psywave",
    "rest",
    "mirror-coat",
    "future-sight",
    "trick",
    "role-play",
    "magic-coat",
    "skill-swap",
    "imprison",
    "luster-purge",
    "mist-ball",
    "cosmic-power",
    "extrasensory",
    "calm-mind",
    "psycho-boost",
    "gravity",
    "miracle-eye",
    "healing-wish",
    "psycho-shift",
    "heal-block",
    "power-trick",
    "power-swap",
    "guard-swap",
    "heart-swap",
    "psycho-cut",
    "zen-headbutt",
    "trick-room",
    "lunar-dance",
    "guard-split",
    "power-split",
    "wonder-room",
    "psyshock",
    "telekinesis",
    "magic-room",
    "synchronoise",
    "stored-power",
    "ally-switch",
    "heal-pulse",
    "heart-stamp",
    "psystrike",
    "hyperspace-hole",
    "shattered-psyche--physical",
    "shattered-psyche--special",
    "psychic-terrain",
    "speed-swap",
    "instruct",
    "genesis-supernova",
    "psychic-fangs",
    "prismatic-laser",
    "photon-geyser",
    "light-that-burns-the-sky",
    "glitzy-glow",
    "magic-powder",
    "max-mindstorm",
    "expanding-force",
    "freezing-glare",
    "eerie-spell",
  ];
  let waterArr = [
    "water-gun",
    "hydro-pump",
    "surf",
    "bubble-beam",
    "withdraw",
    "waterfall",
    "clamp",
    "bubble",
    "crabhammer",
    "octazooka",
    "rain-dance",
    "whirlpool",
    "dive",
    "hydro-cannon",
    "water-spout",
    "muddy-water",
    "water-sport",
    "water-pulse",
    "brine",
    "aqua-ring",
    "aqua-tail",
    "aqua-jet",
    "soak",
    "scald",
    "water-pledge",
    "razor-shell",
    "steam-eruption",
    "water-shuriken",
    "origin-pulse",
    "hydro-vortex--physical",
    "hydro-vortex--special",
    "sparkling-aria",
    "oceanic-operetta",
    "liquidation",
    "splishy-splash",
    "bouncy-bubble",
    "snipe-shot",
    "fishious-rend",
    "max-geyser",
    "life-dew",
    "flip-turn",
    "surging-strikes",
  ];

  let normalType = ["normal"];
  let bugType = ["bug"];
  let electricType = ["electric"];
  let fireType = ["fire"];
  let rockType = ["rock"];
  let grassType = ["grass"];
  let darkType = ["dark"];
  let fairyType = ["fairy"];
  let flyingType = ["flying"];
  let groundType = ["ground"];
  let poisonType = ["poison"];
  let steelType = ["steel"];
  let dragonType = ["dragon"];
  let fightingType = ["fighting"];
  let ghostType = ["ghost"];
  let iceType = ["ice"];
  let psychicType = ["psychic"];
  let waterType = ["water"];

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
      };

      returnStatArray();
    });
  };

  // API call for GETing pokemon description
  const pokeDescription = (pokeID) => {
    poke.get(`api/v2/pokemon-species/${pokeID}/`).then((res) => {
      const data = res.data;
      for (let desc of data.flavor_text_entries) {
        if (desc.language.name === "en") {
          setSpecies(desc.flavor_text.replace("\f", "\n"));
        }
      }
    });
  };

  // API call for GETing ability description
  const pokeAbility = () => {
    if (abilityURL.length > 1) {
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
        for (let desc of data[1].flavor_text_entries) {
          if (desc.language.name === "en") {
            setAbilityBug(desc.flavor_text);
          }
        }
        for (let desc of data[0].flavor_text_entries) {
          if (desc.language.name === "en") {
            setAbilityBug2(desc.flavor_text);
          }
        }
        returnSW(data[3]);
      });
    } else {
      Promise.all([
        poke.get(abilityURL[0].ability.url),
        // add GET for location found
        poke.get(`api/v2/pokemon/${pokeID}/encounters`),
        // GET for Types
        poke.get(swURL[0].type.url),
        // GET for moves
      ]).then((res) => {
        const data = [res[0].data, res[1].data, res[2].data];
        setAbilitiesDescription(data);
        for (let desc of data[0].flavor_text_entries) {
          if (desc.language.name === "en") {
            setAbilityBug(desc.flavor_text);
          }
        }
        returnSW(data[2]);
      });
    }
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
    let Arr5 = [];
    let Arr6 = [];
    let Arr7 = [];
    let Arr8 = [];
    let Arr9 = [];
    let Arr10 = [];

    for (let type of dmg2Array) {
      if (normalType.includes(type)) {
        Arr5.push(
          <button
            style={{
              backgroundColor: "#a0a3ab",
              color: "white",
              borderColor: "#a0a3ab",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {type}
          </button>
        );
      }
      if (bugType.includes(type)) {
        Arr5.push(
          <button
            style={{
              backgroundColor: "#aad13f",
              color: "white",
              borderColor: "#aad13f",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {type}
          </button>
        );
      }
      if (electricType.includes(type)) {
        Arr5.push(
          <button
            style={{
              backgroundColor: "#d1c73f",
              color: "white",
              borderColor: "#d1c73f",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {type}
          </button>
        );
      }
      if (fireType.includes(type)) {
        Arr5.push(
          <button
            style={{
              backgroundColor: "#d1943f",
              color: "white",
              borderColor: "#d1943f",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {type}
          </button>
        );
      }
      if (rockType.includes(type)) {
        Arr5.push(
          <button
            style={{
              backgroundColor: "#6e4d20",
              color: "white",
              borderColor: "#6e4d20",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {type}
          </button>
        );
      }
      if (grassType.includes(type)) {
        Arr5.push(
          <button
            style={{
              backgroundColor: "#449b27",
              color: "white",
              borderColor: "#449b27",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {type}
          </button>
        );
      }
      if (darkType.includes(type)) {
        Arr5.push(
          <button
            style={{
              backgroundColor: "#282927",
              color: "white",
              borderColor: "#282927",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {type}
          </button>
        );
      }
      if (fairyType.includes(type)) {
        Arr5.push(
          <button
            style={{
              backgroundColor: "#c33ec8",
              color: "white",
              borderColor: "#c33ec8",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {type}
          </button>
        );
      }
      if (flyingType.includes(type)) {
        Arr5.push(
          <button
            style={{
              backgroundColor: "#6181ca",
              color: "white",
              borderColor: "#6181ca",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {type}
          </button>
        );
      }
      if (groundType.includes(type)) {
        Arr5.push(
          <button
            style={{
              backgroundColor: "#ab7120",
              color: "white",
              borderColor: "#ab7120",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {type}
          </button>
        );
      }
      if (poisonType.includes(type)) {
        Arr5.push(
          <button
            style={{
              backgroundColor: "#7b21a8",
              color: "white",
              borderColor: "#7b21a8",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {type}
          </button>
        );
      }
      if (steelType.includes(type)) {
        Arr5.push(
          <button
            style={{
              backgroundColor: "#bbbabc",
              color: "white",
              borderColor: "#bbbabc",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {type}
          </button>
        );
      }
      if (dragonType.includes(type)) {
        Arr5.push(
          <button
            style={{
              backgroundColor: "#4b23c4",
              color: "white",
              borderColor: "#4b23c4",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {type}
          </button>
        );
      }
      if (fightingType.includes(type)) {
        Arr5.push(
          <button
            style={{
              backgroundColor: "#4f3004",
              color: "white",
              borderColor: "#4f3004",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {type}
          </button>
        );
      }
      if (ghostType.includes(type)) {
        Arr5.push(
          <button
            style={{
              backgroundColor: "#1c3265",
              color: "white",
              borderColor: "#1c3265",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {type}
          </button>
        );
      }
      if (iceType.includes(type)) {
        Arr5.push(
          <button
            style={{
              backgroundColor: "#1ea5bd",
              color: "white",
              borderColor: "#1ea5bd",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {type}
          </button>
        );
      }
      if (psychicType.includes(type)) {
        Arr5.push(
          <button
            style={{
              backgroundColor: "#bd1eb0",
              color: "white",
              borderColor: "#bd1eb0",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {type}
          </button>
        );
      }
      if (waterType.includes(type)) {
        Arr5.push(
          <button
            style={{
              backgroundColor: "#1e73bd",
              color: "white",
              borderColor: "#1e73bd",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {type}
          </button>
        );
      }
    }
    for (let type of dmg2Array2) {
      if (normalType.includes(type)) {
        Arr6.push(
          <button
            style={{
              backgroundColor: "#a0a3ab",
              color: "white",
              borderColor: "#a0a3ab",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {type}
          </button>
        );
      }
      if (bugType.includes(type)) {
        Arr6.push(
          <button
            style={{
              backgroundColor: "#aad13f",
              color: "white",
              borderColor: "#aad13f",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {type}
          </button>
        );
      }
      if (electricType.includes(type)) {
        Arr6.push(
          <button
            style={{
              backgroundColor: "#d1c73f",
              color: "white",
              borderColor: "#d1c73f",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {type}
          </button>
        );
      }
      if (fireType.includes(type)) {
        Arr6.push(
          <button
            style={{
              backgroundColor: "#d1943f",
              color: "white",
              borderColor: "#d1943f",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {type}
          </button>
        );
      }
      if (rockType.includes(type)) {
        Arr6.push(
          <button
            style={{
              backgroundColor: "#6e4d20",
              color: "white",
              borderColor: "#6e4d20",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {type}
          </button>
        );
      }
      if (grassType.includes(type)) {
        Arr6.push(
          <button
            style={{
              backgroundColor: "#449b27",
              color: "white",
              borderColor: "#449b27",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {type}
          </button>
        );
      }
      if (darkType.includes(type)) {
        Arr6.push(
          <button
            style={{
              backgroundColor: "#282927",
              color: "white",
              borderColor: "#282927",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {type}
          </button>
        );
      }
      if (fairyType.includes(type)) {
        Arr6.push(
          <button
            style={{
              backgroundColor: "#c33ec8",
              color: "white",
              borderColor: "#c33ec8",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {type}
          </button>
        );
      }
      if (flyingType.includes(type)) {
        Arr6.push(
          <button
            style={{
              backgroundColor: "#6181ca",
              color: "white",
              borderColor: "#6181ca",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {type}
          </button>
        );
      }
      if (groundType.includes(type)) {
        Arr6.push(
          <button
            style={{
              backgroundColor: "#ab7120",
              color: "white",
              borderColor: "#ab7120",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {type}
          </button>
        );
      }
      if (poisonType.includes(type)) {
        Arr6.push(
          <button
            style={{
              backgroundColor: "#7b21a8",
              color: "white",
              borderColor: "#7b21a8",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {type}
          </button>
        );
      }
      if (steelType.includes(type)) {
        Arr6.push(
          <button
            style={{
              backgroundColor: "#bbbabc",
              color: "white",
              borderColor: "#bbbabc",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {type}
          </button>
        );
      }
      if (dragonType.includes(type)) {
        Arr6.push(
          <button
            style={{
              backgroundColor: "#4b23c4",
              color: "white",
              borderColor: "#4b23c4",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {type}
          </button>
        );
      }
      if (fightingType.includes(type)) {
        Arr6.push(
          <button
            style={{
              backgroundColor: "#4f3004",
              color: "white",
              borderColor: "#4f3004",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {type}
          </button>
        );
      }
      if (ghostType.includes(type)) {
        Arr6.push(
          <button
            style={{
              backgroundColor: "#1c3265",
              color: "white",
              borderColor: "#1c3265",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {type}
          </button>
        );
      }
      if (iceType.includes(type)) {
        Arr6.push(
          <button
            style={{
              backgroundColor: "#1ea5bd",
              color: "white",
              borderColor: "#1ea5bd",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {type}
          </button>
        );
      }
      if (psychicType.includes(type)) {
        Arr6.push(
          <button
            style={{
              backgroundColor: "#bd1eb0",
              color: "white",
              borderColor: "#bd1eb0",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {type}
          </button>
        );
      }
      if (waterType.includes(type)) {
        Arr6.push(
          <button
            style={{
              backgroundColor: "#1e73bd",
              color: "white",
              borderColor: "#1e73bd",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {type}
          </button>
        );
      }
    }
    for (let type of dmg2Array3) {
      if (normalType.includes(type)) {
        Arr7.push(
          <button
            style={{
              backgroundColor: "#a0a3ab",
              color: "white",
              borderColor: "#a0a3ab",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {type}
          </button>
        );
      }
      if (bugType.includes(type)) {
        Arr7.push(
          <button
            style={{
              backgroundColor: "#aad13f",
              color: "white",
              borderColor: "#aad13f",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {type}
          </button>
        );
      }
      if (electricType.includes(type)) {
        Arr7.push(
          <button
            style={{
              backgroundColor: "#d1c73f",
              color: "white",
              borderColor: "#d1c73f",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {type}
          </button>
        );
      }
      if (fireType.includes(type)) {
        Arr7.push(
          <button
            style={{
              backgroundColor: "#d1943f",
              color: "white",
              borderColor: "#d1943f",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {type}
          </button>
        );
      }
      if (rockType.includes(type)) {
        Arr7.push(
          <button
            style={{
              backgroundColor: "#6e4d20",
              color: "white",
              borderColor: "#6e4d20",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {type}
          </button>
        );
      }
      if (grassType.includes(type)) {
        Arr7.push(
          <button
            style={{
              backgroundColor: "#449b27",
              color: "white",
              borderColor: "#449b27",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {type}
          </button>
        );
      }
      if (darkType.includes(type)) {
        Arr7.push(
          <button
            style={{
              backgroundColor: "#282927",
              color: "white",
              borderColor: "#282927",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {type}
          </button>
        );
      }
      if (fairyType.includes(type)) {
        Arr7.push(
          <button
            style={{
              backgroundColor: "#c33ec8",
              color: "white",
              borderColor: "#c33ec8",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {type}
          </button>
        );
      }
      if (flyingType.includes(type)) {
        Arr7.push(
          <button
            style={{
              backgroundColor: "#6181ca",
              color: "white",
              borderColor: "#6181ca",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {type}
          </button>
        );
      }
      if (groundType.includes(type)) {
        Arr7.push(
          <button
            style={{
              backgroundColor: "#ab7120",
              color: "white",
              borderColor: "#ab7120",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {type}
          </button>
        );
      }
      if (poisonType.includes(type)) {
        Arr7.push(
          <button
            style={{
              backgroundColor: "#7b21a8",
              color: "white",
              borderColor: "#7b21a8",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {type}
          </button>
        );
      }
      if (steelType.includes(type)) {
        Arr7.push(
          <button
            style={{
              backgroundColor: "#bbbabc",
              color: "white",
              borderColor: "#bbbabc",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {type}
          </button>
        );
      }
      if (dragonType.includes(type)) {
        Arr7.push(
          <button
            style={{
              backgroundColor: "#4b23c4",
              color: "white",
              borderColor: "#4b23c4",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {type}
          </button>
        );
      }
      if (fightingType.includes(type)) {
        Arr7.push(
          <button
            style={{
              backgroundColor: "#4f3004",
              color: "white",
              borderColor: "#4f3004",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {type}
          </button>
        );
      }
      if (ghostType.includes(type)) {
        Arr7.push(
          <button
            style={{
              backgroundColor: "#1c3265",
              color: "white",
              borderColor: "#1c3265",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {type}
          </button>
        );
      }
      if (iceType.includes(type)) {
        Arr7.push(
          <button
            style={{
              backgroundColor: "#1ea5bd",
              color: "white",
              borderColor: "#1ea5bd",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {type}
          </button>
        );
      }
      if (psychicType.includes(type)) {
        Arr7.push(
          <button
            style={{
              backgroundColor: "#bd1eb0",
              color: "white",
              borderColor: "#bd1eb0",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {type}
          </button>
        );
      }
      if (waterType.includes(type)) {
        Arr7.push(
          <button
            style={{
              backgroundColor: "#1e73bd",
              color: "white",
              borderColor: "#1e73bd",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {type}
          </button>
        );
      }
    }
    for (let type of dmg2Array4) {
      if (normalType.includes(type)) {
        Arr8.push(
          <button
            style={{
              backgroundColor: "#a0a3ab",
              color: "white",
              borderColor: "#a0a3ab",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {type}
          </button>
        );
      }
      if (bugType.includes(type)) {
        Arr8.push(
          <button
            style={{
              backgroundColor: "#aad13f",
              color: "white",
              borderColor: "#aad13f",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {type}
          </button>
        );
      }
      if (electricType.includes(type)) {
        Arr8.push(
          <button
            style={{
              backgroundColor: "#d1c73f",
              color: "white",
              borderColor: "#d1c73f",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {type}
          </button>
        );
      }
      if (fireType.includes(type)) {
        Arr8.push(
          <button
            style={{
              backgroundColor: "#d1943f",
              color: "white",
              borderColor: "#d1943f",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {type}
          </button>
        );
      }
      if (rockType.includes(type)) {
        Arr8.push(
          <button
            style={{
              backgroundColor: "#6e4d20",
              color: "white",
              borderColor: "#6e4d20",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {type}
          </button>
        );
      }
      if (grassType.includes(type)) {
        Arr8.push(
          <button
            style={{
              backgroundColor: "#449b27",
              color: "white",
              borderColor: "#449b27",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {type}
          </button>
        );
      }
      if (darkType.includes(type)) {
        Arr8.push(
          <button
            style={{
              backgroundColor: "#282927",
              color: "white",
              borderColor: "#282927",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {type}
          </button>
        );
      }
      if (fairyType.includes(type)) {
        Arr8.push(
          <button
            style={{
              backgroundColor: "#c33ec8",
              color: "white",
              borderColor: "#c33ec8",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {type}
          </button>
        );
      }
      if (flyingType.includes(type)) {
        Arr8.push(
          <button
            style={{
              backgroundColor: "#6181ca",
              color: "white",
              borderColor: "#6181ca",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {type}
          </button>
        );
      }
      if (groundType.includes(type)) {
        Arr8.push(
          <button
            style={{
              backgroundColor: "#ab7120",
              color: "white",
              borderColor: "#ab7120",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {type}
          </button>
        );
      }
      if (poisonType.includes(type)) {
        Arr8.push(
          <button
            style={{
              backgroundColor: "#7b21a8",
              color: "white",
              borderColor: "#7b21a8",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {type}
          </button>
        );
      }
      if (steelType.includes(type)) {
        Arr8.push(
          <button
            style={{
              backgroundColor: "#bbbabc",
              color: "white",
              borderColor: "#bbbabc",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {type}
          </button>
        );
      }
      if (dragonType.includes(type)) {
        Arr8.push(
          <button
            style={{
              backgroundColor: "#4b23c4",
              color: "white",
              borderColor: "#4b23c4",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {type}
          </button>
        );
      }
      if (fightingType.includes(type)) {
        Arr8.push(
          <button
            style={{
              backgroundColor: "#4f3004",
              color: "white",
              borderColor: "#4f3004",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {type}
          </button>
        );
      }
      if (ghostType.includes(type)) {
        Arr8.push(
          <button
            style={{
              backgroundColor: "#1c3265",
              color: "white",
              borderColor: "#1c3265",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {type}
          </button>
        );
      }
      if (iceType.includes(type)) {
        Arr8.push(
          <button
            style={{
              backgroundColor: "#1ea5bd",
              color: "white",
              borderColor: "#1ea5bd",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {type}
          </button>
        );
      }
      if (psychicType.includes(type)) {
        Arr8.push(
          <button
            style={{
              backgroundColor: "#bd1eb0",
              color: "white",
              borderColor: "#bd1eb0",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {type}
          </button>
        );
      }
      if (waterType.includes(type)) {
        Arr8.push(
          <button
            style={{
              backgroundColor: "#1e73bd",
              color: "white",
              borderColor: "#1e73bd",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {type}
          </button>
        );
      }
    }
    for (let type of dmg2Array5) {
      if (normalType.includes(type)) {
        Arr9.push(
          <button
            style={{
              backgroundColor: "#a0a3ab",
              color: "white",
              borderColor: "#a0a3ab",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {type}
          </button>
        );
      }
      if (bugType.includes(type)) {
        Arr9.push(
          <button
            style={{
              backgroundColor: "#aad13f",
              color: "white",
              borderColor: "#aad13f",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {type}
          </button>
        );
      }
      if (electricType.includes(type)) {
        Arr9.push(
          <button
            style={{
              backgroundColor: "#d1c73f",
              color: "white",
              borderColor: "#d1c73f",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {type}
          </button>
        );
      }
      if (fireType.includes(type)) {
        Arr9.push(
          <button
            style={{
              backgroundColor: "#d1943f",
              color: "white",
              borderColor: "#d1943f",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {type}
          </button>
        );
      }
      if (rockType.includes(type)) {
        Arr9.push(
          <button
            style={{
              backgroundColor: "#6e4d20",
              color: "white",
              borderColor: "#6e4d20",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {type}
          </button>
        );
      }
      if (grassType.includes(type)) {
        Arr9.push(
          <button
            style={{
              backgroundColor: "#449b27",
              color: "white",
              borderColor: "#449b27",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {type}
          </button>
        );
      }
      if (darkType.includes(type)) {
        Arr9.push(
          <button
            style={{
              backgroundColor: "#282927",
              color: "white",
              borderColor: "#282927",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {type}
          </button>
        );
      }
      if (fairyType.includes(type)) {
        Arr9.push(
          <button
            style={{
              backgroundColor: "#c33ec8",
              color: "white",
              borderColor: "#c33ec8",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {type}
          </button>
        );
      }
      if (flyingType.includes(type)) {
        Arr9.push(
          <button
            style={{
              backgroundColor: "#6181ca",
              color: "white",
              borderColor: "#6181ca",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {type}
          </button>
        );
      }
      if (groundType.includes(type)) {
        Arr9.push(
          <button
            style={{
              backgroundColor: "#ab7120",
              color: "white",
              borderColor: "#ab7120",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {type}
          </button>
        );
      }
      if (poisonType.includes(type)) {
        Arr9.push(
          <button
            style={{
              backgroundColor: "#7b21a8",
              color: "white",
              borderColor: "#7b21a8",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {type}
          </button>
        );
      }
      if (steelType.includes(type)) {
        Arr9.push(
          <button
            style={{
              backgroundColor: "#bbbabc",
              color: "white",
              borderColor: "#bbbabc",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {type}
          </button>
        );
      }
      if (dragonType.includes(type)) {
        Arr9.push(
          <button
            style={{
              backgroundColor: "#4b23c4",
              color: "white",
              borderColor: "#4b23c4",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {type}
          </button>
        );
      }
      if (fightingType.includes(type)) {
        Arr9.push(
          <button
            style={{
              backgroundColor: "#4f3004",
              color: "white",
              borderColor: "#4f3004",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {type}
          </button>
        );
      }
      if (ghostType.includes(type)) {
        Arr9.push(
          <button
            style={{
              backgroundColor: "#1c3265",
              color: "white",
              borderColor: "#1c3265",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {type}
          </button>
        );
      }
      if (iceType.includes(type)) {
        Arr9.push(
          <button
            style={{
              backgroundColor: "#1ea5bd",
              color: "white",
              borderColor: "#1ea5bd",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {type}
          </button>
        );
      }
      if (psychicType.includes(type)) {
        Arr9.push(
          <button
            style={{
              backgroundColor: "#bd1eb0",
              color: "white",
              borderColor: "#bd1eb0",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {type}
          </button>
        );
      }
      if (waterType.includes(type)) {
        Arr9.push(
          <button
            style={{
              backgroundColor: "#1e73bd",
              color: "white",
              borderColor: "#1e73bd",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {type}
          </button>
        );
      }
    }
    for (let type of dmg2Array6) {
      if (normalType.includes(type)) {
        Arr10.push(
          <button
            style={{
              backgroundColor: "#a0a3ab",
              color: "white",
              borderColor: "#a0a3ab",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {type}
          </button>
        );
      }
      if (bugType.includes(type)) {
        Arr10.push(
          <button
            style={{
              backgroundColor: "#aad13f",
              color: "white",
              borderColor: "#aad13f",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {type}
          </button>
        );
      }
      if (electricType.includes(type)) {
        Arr10.push(
          <button
            style={{
              backgroundColor: "#d1c73f",
              color: "white",
              borderColor: "#d1c73f",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {type}
          </button>
        );
      }
      if (fireType.includes(type)) {
        Arr10.push(
          <button
            style={{
              backgroundColor: "#d1943f",
              color: "white",
              borderColor: "#d1943f",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {type}
          </button>
        );
      }
      if (rockType.includes(type)) {
        Arr10.push(
          <button
            style={{
              backgroundColor: "#6e4d20",
              color: "white",
              borderColor: "#6e4d20",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {type}
          </button>
        );
      }
      if (grassType.includes(type)) {
        Arr10.push(
          <button
            style={{
              backgroundColor: "#449b27",
              color: "white",
              borderColor: "#449b27",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {type}
          </button>
        );
      }
      if (darkType.includes(type)) {
        Arr10.push(
          <button
            style={{
              backgroundColor: "#282927",
              color: "white",
              borderColor: "#282927",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {type}
          </button>
        );
      }
      if (fairyType.includes(type)) {
        Arr10.push(
          <button
            style={{
              backgroundColor: "#c33ec8",
              color: "white",
              borderColor: "#c33ec8",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {type}
          </button>
        );
      }
      if (flyingType.includes(type)) {
        Arr10.push(
          <button
            style={{
              backgroundColor: "#6181ca",
              color: "white",
              borderColor: "#6181ca",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {type}
          </button>
        );
      }
      if (groundType.includes(type)) {
        Arr10.push(
          <button
            style={{
              backgroundColor: "#ab7120",
              color: "white",
              borderColor: "#ab7120",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {type}
          </button>
        );
      }
      if (poisonType.includes(type)) {
        Arr10.push(
          <button
            style={{
              backgroundColor: "#7b21a8",
              color: "white",
              borderColor: "#7b21a8",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {type}
          </button>
        );
      }
      if (steelType.includes(type)) {
        Arr10.push(
          <button
            style={{
              backgroundColor: "#bbbabc",
              color: "white",
              borderColor: "#bbbabc",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {type}
          </button>
        );
      }
      if (dragonType.includes(type)) {
        Arr10.push(
          <button
            style={{
              backgroundColor: "#4b23c4",
              color: "white",
              borderColor: "#4b23c4",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {type}
          </button>
        );
      }
      if (fightingType.includes(type)) {
        Arr10.push(
          <button
            style={{
              backgroundColor: "#4f3004",
              color: "white",
              borderColor: "#4f3004",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {type}
          </button>
        );
      }
      if (ghostType.includes(type)) {
        Arr10.push(
          <button
            style={{
              backgroundColor: "#1c3265",
              color: "white",
              borderColor: "#1c3265",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {type}
          </button>
        );
      }
      if (iceType.includes(type)) {
        Arr10.push(
          <button
            style={{
              backgroundColor: "#1ea5bd",
              color: "white",
              borderColor: "#1ea5bd",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {type}
          </button>
        );
      }
      if (psychicType.includes(type)) {
        Arr10.push(
          <button
            style={{
              backgroundColor: "#bd1eb0",
              color: "white",
              borderColor: "#bd1eb0",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {type}
          </button>
        );
      }
      if (waterType.includes(type)) {
        Arr10.push(
          <button
            style={{
              backgroundColor: "#1e73bd",
              color: "white",
              borderColor: "#1e73bd",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {type}
          </button>
        );
      }
    }

    setDDF(Arr5.map((type) => <div> {type} </div>));
    setDDF2(Arr6.map((type) => <div> {type} </div>));
    setDDF3(Arr7.map((type) => <div> {type} </div>));
    setDDF4(Arr8.map((type) => <div> {type} </div>));
    setDDF5(Arr9.map((type) => <div> {type} </div>));
    setDDF6(Arr10.map((type) => <div> {type} </div>));
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

    for (let m of movesArr) {
      if (m.move.name) {
        movesArr2.push(m.move.name);
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
    let Arr1 = [];
    let Arr2 = [];
    let Arr3 = [];
    let Arr4 = [];
    for (let move of movesArr2) {
      if (normalArr.includes(move)) {
        Arr1.push(
          <button
            style={{
              backgroundColor: "#a0a3ab",
              color: "white",
              borderColor: "#a0a3ab",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {move}
          </button>
        );
      }
      if (bugArr.includes(move)) {
        Arr1.push(
          <button
            style={{
              backgroundColor: "#aad13f",
              color: "white",
              borderColor: "#aad13f",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {move}
          </button>
        );
      }
      if (electricArr.includes(move)) {
        Arr1.push(
          <button
            style={{
              backgroundColor: "#d1c73f",
              color: "white",
              borderColor: "#d1c73f",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {move}
          </button>
        );
      }
      if (fireArr.includes(move)) {
        Arr1.push(
          <button
            style={{
              backgroundColor: "#d1943f",
              color: "white",
              borderColor: "#d1943f",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {move}
          </button>
        );
      }
      if (rockArr.includes(move)) {
        Arr1.push(
          <button
            style={{
              backgroundColor: "#6e4d20",
              color: "white",
              borderColor: "#6e4d20",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {move}
          </button>
        );
      }
      if (grassArr.includes(move)) {
        Arr1.push(
          <button
            style={{
              backgroundColor: "#449b27",
              color: "white",
              borderColor: "#449b27",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {move}
          </button>
        );
      }
      if (darkArr.includes(move)) {
        Arr1.push(
          <button
            style={{
              backgroundColor: "#282927",
              color: "white",
              borderColor: "#282927",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {move}
          </button>
        );
      }
      if (fairyArr.includes(move)) {
        Arr1.push(
          <button
            style={{
              backgroundColor: "#c33ec8",
              color: "white",
              borderColor: "#c33ec8",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {move}
          </button>
        );
      }
      if (flyingArr.includes(move)) {
        Arr1.push(
          <button
            style={{
              backgroundColor: "#6181ca",
              color: "white",
              borderColor: "#6181ca",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {move}
          </button>
        );
      }
      if (groundArr.includes(move)) {
        Arr1.push(
          <button
            style={{
              backgroundColor: "#ab7120",
              color: "white",
              borderColor: "#ab7120",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {move}
          </button>
        );
      }
      if (poisonArr.includes(move)) {
        Arr1.push(
          <button
            style={{
              backgroundColor: "#7b21a8",
              color: "white",
              borderColor: "#7b21a8",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {move}
          </button>
        );
      }
      if (steelArr.includes(move)) {
        Arr1.push(
          <button
            style={{
              backgroundColor: "#bbbabc",
              color: "white",
              borderColor: "#bbbabc",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {move}
          </button>
        );
      }
      if (dragonArr.includes(move)) {
        Arr1.push(
          <button
            style={{
              backgroundColor: "#4b23c4",
              color: "white",
              borderColor: "#4b23c4",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {move}
          </button>
        );
      }
      if (fightingArr.includes(move)) {
        Arr1.push(
          <button
            style={{
              backgroundColor: "#4f3004",
              color: "white",
              borderColor: "#4f3004",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {move}
          </button>
        );
      }
      if (ghostArr.includes(move)) {
        Arr1.push(
          <button
            style={{
              backgroundColor: "#1c3265",
              color: "white",
              borderColor: "#1c3265",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {move}
          </button>
        );
      }
      if (iceArr.includes(move)) {
        Arr1.push(
          <button
            style={{
              backgroundColor: "#1ea5bd",
              color: "white",
              borderColor: "#1ea5bd",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {move}
          </button>
        );
      }
      if (psychicArr.includes(move)) {
        Arr1.push(
          <button
            style={{
              backgroundColor: "#bd1eb0",
              color: "white",
              borderColor: "#bd1eb0",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {move}
          </button>
        );
      }
      if (waterArr.includes(move)) {
        Arr1.push(
          <button
            style={{
              backgroundColor: "#1e73bd",
              color: "white",
              borderColor: "#1e73bd",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {move}
          </button>
        );
      }
      // ///////////////////////
      //////////////////////
    }
    for (let move of movesArr4) {
      if (normalArr.includes(move)) {
        Arr2.push(
          <button
            style={{
              backgroundColor: "#a0a3ab",
              color: "white",
              borderColor: "#a0a3ab",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {move}
          </button>
        );
      }
      if (bugArr.includes(move)) {
        Arr2.push(
          <button
            style={{
              backgroundColor: "#aad13f",
              color: "white",
              borderColor: "#aad13f",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {move}
          </button>
        );
      }
      if (electricArr.includes(move)) {
        Arr2.push(
          <button
            style={{
              backgroundColor: "#d1c73f",
              color: "white",
              borderColor: "#d1c73f",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {move}
          </button>
        );
      }
      if (fireArr.includes(move)) {
        Arr2.push(
          <button
            style={{
              backgroundColor: "#d1943f",
              color: "white",
              borderColor: "#d1943f",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {move}
          </button>
        );
      }
      if (rockArr.includes(move)) {
        Arr2.push(
          <button
            style={{
              backgroundColor: "#6e4d20",
              color: "white",
              borderColor: "#6e4d20",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {move}
          </button>
        );
      }
      if (grassArr.includes(move)) {
        Arr2.push(
          <button
            style={{
              backgroundColor: "#449b27",
              color: "white",
              borderColor: "#449b27",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {move}
          </button>
        );
      }
      if (darkArr.includes(move)) {
        Arr2.push(
          <button
            style={{
              backgroundColor: "#282927",
              color: "white",
              borderColor: "#282927",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {move}
          </button>
        );
      }
      if (fairyArr.includes(move)) {
        Arr2.push(
          <button
            style={{
              backgroundColor: "#c33ec8",
              color: "white",
              borderColor: "#c33ec8",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {move}
          </button>
        );
      }
      if (flyingArr.includes(move)) {
        Arr2.push(
          <button
            style={{
              backgroundColor: "#6181ca",
              color: "white",
              borderColor: "#6181ca",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {move}
          </button>
        );
      }
      if (groundArr.includes(move)) {
        Arr2.push(
          <button
            style={{
              backgroundColor: "#ab7120",
              color: "white",
              borderColor: "#ab7120",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {move}
          </button>
        );
      }
      if (poisonArr.includes(move)) {
        Arr2.push(
          <button
            style={{
              backgroundColor: "#7b21a8",
              color: "white",
              borderColor: "#7b21a8",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {move}
          </button>
        );
      }
      if (steelArr.includes(move)) {
        Arr2.push(
          <button
            style={{
              backgroundColor: "#bbbabc",
              color: "white",
              borderColor: "#bbbabc",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {move}
          </button>
        );
      }
      if (dragonArr.includes(move)) {
        Arr2.push(
          <button
            style={{
              backgroundColor: "#4b23c4",
              color: "white",
              borderColor: "#4b23c4",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {move}
          </button>
        );
      }
      if (fightingArr.includes(move)) {
        Arr2.push(
          <button
            style={{
              backgroundColor: "#4f3004",
              color: "white",
              borderColor: "#4f3004",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {move}
          </button>
        );
      }
      if (ghostArr.includes(move)) {
        Arr2.push(
          <button
            style={{
              backgroundColor: "#1c3265",
              color: "white",
              borderColor: "#1c3265",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {move}
          </button>
        );
      }
      if (iceArr.includes(move)) {
        Arr2.push(
          <button
            style={{
              backgroundColor: "#1ea5bd",
              color: "white",
              borderColor: "#1ea5bd",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {move}
          </button>
        );
      }
      if (psychicArr.includes(move)) {
        Arr2.push(
          <button
            style={{
              backgroundColor: "#bd1eb0",
              color: "white",
              borderColor: "#bd1eb0",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {move}
          </button>
        );
      }
      if (waterArr.includes(move)) {
        Arr2.push(
          <button
            style={{
              backgroundColor: "#1e73bd",
              color: "white",
              borderColor: "#1e73bd",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {move}
          </button>
        );
      }
    }
    for (let move of movesArr6) {
      if (normalArr.includes(move)) {
        Arr3.push(
          <button
            style={{
              backgroundColor: "#a0a3ab",
              color: "white",
              borderColor: "#a0a3ab",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {move}
          </button>
        );
      }
      if (bugArr.includes(move)) {
        Arr3.push(
          <button
            style={{
              backgroundColor: "#aad13f",
              color: "white",
              borderColor: "#aad13f",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {move}
          </button>
        );
      }
      if (electricArr.includes(move)) {
        Arr3.push(
          <button
            style={{
              backgroundColor: "#d1c73f",
              color: "white",
              borderColor: "#d1c73f",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {move}
          </button>
        );
      }
      if (fireArr.includes(move)) {
        Arr3.push(
          <button
            style={{
              backgroundColor: "#d1943f",
              color: "white",
              borderColor: "#d1943f",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {move}
          </button>
        );
      }
      if (rockArr.includes(move)) {
        Arr3.push(
          <button
            style={{
              backgroundColor: "#6e4d20",
              color: "white",
              borderColor: "#6e4d20",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {move}
          </button>
        );
      }
      if (grassArr.includes(move)) {
        Arr3.push(
          <button
            style={{
              backgroundColor: "#449b27",
              color: "white",
              borderColor: "#449b27",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {move}
          </button>
        );
      }
      if (darkArr.includes(move)) {
        Arr3.push(
          <button
            style={{
              backgroundColor: "#282927",
              color: "white",
              borderColor: "#282927",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {move}
          </button>
        );
      }
      if (fairyArr.includes(move)) {
        Arr3.push(
          <button
            style={{
              backgroundColor: "#c33ec8",
              color: "white",
              borderColor: "#c33ec8",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {move}
          </button>
        );
      }
      if (flyingArr.includes(move)) {
        Arr3.push(
          <button
            style={{
              backgroundColor: "#6181ca",
              color: "white",
              borderColor: "#6181ca",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {move}
          </button>
        );
      }
      if (groundArr.includes(move)) {
        Arr3.push(
          <button
            style={{
              backgroundColor: "#ab7120",
              color: "white",
              borderColor: "#ab7120",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {move}
          </button>
        );
      }
      if (poisonArr.includes(move)) {
        Arr3.push(
          <button
            style={{
              backgroundColor: "#7b21a8",
              color: "white",
              borderColor: "#7b21a8",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {move}
          </button>
        );
      }
      if (steelArr.includes(move)) {
        Arr3.push(
          <button
            style={{
              backgroundColor: "#bbbabc",
              color: "white",
              borderColor: "#bbbabc",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {move}
          </button>
        );
      }
      if (dragonArr.includes(move)) {
        Arr3.push(
          <button
            style={{
              backgroundColor: "#4b23c4",
              color: "white",
              borderColor: "#4b23c4",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {move}
          </button>
        );
      }
      if (fightingArr.includes(move)) {
        Arr3.push(
          <button
            style={{
              backgroundColor: "#4f3004",
              color: "white",
              borderColor: "#4f3004",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {move}
          </button>
        );
      }
      if (ghostArr.includes(move)) {
        Arr3.push(
          <button
            style={{
              backgroundColor: "#1c3265",
              color: "white",
              borderColor: "#1c3265",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {move}
          </button>
        );
      }
      if (iceArr.includes(move)) {
        Arr3.push(
          <button
            style={{
              backgroundColor: "#1ea5bd",
              color: "white",
              borderColor: "#1ea5bd",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {move}
          </button>
        );
      }
      if (psychicArr.includes(move)) {
        Arr3.push(
          <button
            style={{
              backgroundColor: "#bd1eb0",
              color: "white",
              borderColor: "#bd1eb0",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {move}
          </button>
        );
      }
      if (waterArr.includes(move)) {
        Arr3.push(
          <button
            style={{
              backgroundColor: "#1e73bd",
              color: "white",
              borderColor: "#1e73bd",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {move}
          </button>
        );
      }
    }
    for (let move of movesArr8) {
      if (normalArr.includes(move)) {
        Arr4.push(
          <button
            style={{
              backgroundColor: "#a0a3ab",
              color: "white",
              borderColor: "#a0a3ab",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {move}
          </button>
        );
      }
      if (bugArr.includes(move)) {
        Arr4.push(
          <button
            style={{
              backgroundColor: "#aad13f",
              color: "white",
              borderColor: "#aad13f",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {move}
          </button>
        );
      }
      if (electricArr.includes(move)) {
        Arr4.push(
          <button
            style={{
              backgroundColor: "#d1c73f",
              color: "white",
              borderColor: "#d1c73f",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {move}
          </button>
        );
      }
      if (fireArr.includes(move)) {
        Arr4.push(
          <button
            style={{
              backgroundColor: "#d1943f",
              color: "white",
              borderColor: "#d1943f",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {move}
          </button>
        );
      }
      if (rockArr.includes(move)) {
        Arr4.push(
          <button
            style={{
              backgroundColor: "#6e4d20",
              color: "white",
              borderColor: "#6e4d20",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {move}
          </button>
        );
      }
      if (grassArr.includes(move)) {
        Arr4.push(
          <button
            style={{
              backgroundColor: "#449b27",
              color: "white",
              borderColor: "#449b27",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {move}
          </button>
        );
      }
      if (darkArr.includes(move)) {
        Arr4.push(
          <button
            style={{
              backgroundColor: "#282927",
              color: "white",
              borderColor: "#282927",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {move}
          </button>
        );
      }
      if (fairyArr.includes(move)) {
        Arr4.push(
          <button
            style={{
              backgroundColor: "#c33ec8",
              color: "white",
              borderColor: "#c33ec8",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {move}
          </button>
        );
      }
      if (flyingArr.includes(move)) {
        Arr4.push(
          <button
            style={{
              backgroundColor: "#6181ca",
              color: "white",
              borderColor: "#6181ca",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {move}
          </button>
        );
      }
      if (groundArr.includes(move)) {
        Arr4.push(
          <button
            style={{
              backgroundColor: "#ab7120",
              color: "white",
              borderColor: "#ab7120",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {move}
          </button>
        );
      }
      if (poisonArr.includes(move)) {
        Arr4.push(
          <button
            style={{
              backgroundColor: "#7b21a8",
              color: "white",
              borderColor: "#7b21a8",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {move}
          </button>
        );
      }
      if (steelArr.includes(move)) {
        Arr4.push(
          <button
            style={{
              backgroundColor: "#bbbabc",
              color: "white",
              borderColor: "#bbbabc",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {move}
          </button>
        );
      }
      if (dragonArr.includes(move)) {
        Arr4.push(
          <button
            style={{
              backgroundColor: "#4b23c4",
              color: "white",
              borderColor: "#4b23c4",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {move}
          </button>
        );
      }
      if (fightingArr.includes(move)) {
        Arr4.push(
          <button
            style={{
              backgroundColor: "#4f3004",
              color: "white",
              borderColor: "#4f3004",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {move}
          </button>
        );
      }
      if (ghostArr.includes(move)) {
        Arr4.push(
          <button
            style={{
              backgroundColor: "#1c3265",
              color: "white",
              borderColor: "#1c3265",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {move}
          </button>
        );
      }
      if (iceArr.includes(move)) {
        Arr4.push(
          <button
            style={{
              backgroundColor: "#1ea5bd",
              color: "white",
              borderColor: "#1ea5bd",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {move}
          </button>
        );
      }
      if (psychicArr.includes(move)) {
        Arr4.push(
          <button
            style={{
              backgroundColor: "#bd1eb0",
              color: "white",
              borderColor: "#bd1eb0",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            {move}
          </button>
        );
      }
      if (waterArr.includes(move)) {
        Arr4.push(
          <button
            style={{
              backgroundColor: "#1e73bd",
              color: "white",
              borderColor: "#1e73bd",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
              dataContainer:"body", dataToggle:"popover", dataPlacement:"right"
            }}
          >
            {move}
          </button>
        );
      }
    }
    setmoveState(Arr1.map((o) => <div> {o} </div>));
    setmoveState2(Arr2.map((o) => <div> {o} </div>));
    setmoveState3(Arr3.map((o) => <div> {o} </div>));
    setmoveState4(Arr4.map((o) => <div> {o} </div>));
  };

  // const typeGetter = () => {
  //   Promise.all([
  //     poke.get(`api/v2/type/normal`),
  //     poke.get(`api/v2/type/bug`),
  //     poke.get(`api/v2/type/electric`),
  //     poke.get(`api/v2/type/fire`),
  //     poke.get(`api/v2/type/rock`),
  //     poke.get(`api/v2/type/grass`),
  //     poke.get(`api/v2/type/dark`),
  //     poke.get(`api/v2/type/fairy`),
  //     poke.get(`api/v2/type/flying`),
  //     poke.get(`api/v2/type/ground`),
  //     poke.get(`api/v2/type/poison`),
  //     poke.get(`api/v2/type/steel`),
  //     poke.get(`api/v2/type/dragon`),
  //     poke.get(`api/v2/type/fighting`),
  //     poke.get(`api/v2/type/ghost`),
  //     poke.get(`api/v2/type/ice`),
  //     poke.get(`api/v2/type/psychic`),
  //     poke.get(`api/v2/type/water`),
  // ]).then((res) => {
  //     const normal = res[0].data.moves
  //     const bug = res[1].data.moves
  //     const electric = res[2].data.moves
  //     const fire = res[3].data.moves
  //     const rock = res[4].data.moves
  //     const grass = res[5].data.moves
  //     const dark = res[6].data.moves
  //     const fairy = res[7].data.moves
  //     const flying = res[8].data.moves
  //     const ground = res[9].data.moves
  //     const poison = res[10].data.moves
  //     const steel = res[11].data.moves
  //     const dragon = res[12].data.moves
  //     const fighting = res[13].data.moves
  //     const ghost = res[14].data.moves
  //     const ice = res.data.moves
  //     const psychic = res[16].data.moves
  //     const water = res[17].data.moves

  // for (let type of normal) {
  //   if (type)  {
  //     normalArr.push(type.name)
  //   }
  // }
  // for (let type of bug) {
  //   if (type)  {
  //     bugArr.push(type.name)
  //   }
  // }
  // for (let type of electric) {
  //   if (type)  {
  //     electricArr.push(type.name)
  //   }
  // }
  // for (let type of fire) {
  //   if (type)  {
  //     fireArr.push(type.name)
  //   }
  // }
  // for (let type of rock) {
  //   if (type)  {
  //     rockArr.push(type.name)
  //   }
  // }
  // for (let type of grass) {
  //   if (type)  {
  //     grassArr.push(type.name)
  //   }
  // }
  // for (let type of dark) {
  //   if (type)  {
  //     darkArr.push(type.name)
  //   }
  // }
  // for (let type of fairy) {
  //   if (type)  {
  //     fairyArr.push(type.name)
  //   }
  // }
  // for (let type of flying) {
  //   if (type)  {
  //     flyingArr.push(type.name)
  //   }
  // }
  // for (let type of ground) {
  //   if (type)  {
  //     groundArr.push(type.name)
  //   }
  // }
  // for (let type of poison) {
  //   if (type)  {
  //     poisonArr.push(type.name)
  //   }
  // }
  // for (let type of steel) {
  //   if (type)  {
  //     steelArr.push(type.name)
  //   }
  // }
  // for (let type of dragon) {
  //   if (type)  {
  //     dragonArr.push(type.name)
  //   }
  // }
  // for (let type of fighting) {
  //   if (type)  {
  //     fightingArr.push(type.name)
  //   }
  // }
  // for (let type of ghost) {
  //   if (type)  {
  //     ghostArr.push(type.name)
  //   }
  // }
  // for (let type of ice) {
  //   if (type)  {
  //     iceArr.push(type.name)
  //   }
  // }
  // for (let type of psychic) {
  //   if (type)  {
  //     psychicArr.push(type.name)
  //   }
  // }
  // for (let type of water) {
  //   if (type)  {
  //     waterArr.push(type.name)
  //   }
  // }

  // console.log(normalArr)
  // console.log(bugArr)
  // console.log(electricArr)
  // console.log(fireArr)
  // console.log(rockArr)
  // console.log(grassArr)
  // console.log(darkArr)
  // console.log(fairyArr)
  // console.log(flyingArr)
  // console.log(groundArr)
  // console.log(poisonArr)
  // console.log(steelArr)
  // console.log(dragonArr)
  // console.log(fightingArr)
  // console.log(ghostArr)
  // console.log(iceArr)

  // console.log(psychicArr)
  // console.log(waterArr)

  //   });
  // };

  return (
    <div id="dexContainer" className="card text-white bg-danger">
      <Head>
        <title>PokeDex</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div id="divContainer">
        <div className="card-header" style={{display: 'flex', justifyContent: "space-between"}}>
          <button
            style={{
              backgroundColor: "#a0a3ab",
              color: "white",
              borderColor: "#a0a3ab",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            Normal
          </button>
          <button
            style={{
              backgroundColor: "#aad13f",
              color: "white",
              borderColor: "#aad13f",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            Bug
          </button>
          <button
            style={{
              backgroundColor: "#d1c73f",
              color: "white",
              borderColor: "#d1c73f",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            Electric
          </button>
          <button
            style={{
              backgroundColor: "#d1943f",
              color: "white",
              borderColor: "#d1943f",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            Fire
          </button>
          <button
            style={{
              backgroundColor: "#6e4d20",
              color: "white",
              borderColor: "#6e4d20",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            Rock
          </button>
          <button
            style={{
              backgroundColor: "#449b27",
              color: "white",
              borderColor: "#449b27",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            Grass
          </button>
          <button
            style={{
              backgroundColor: "#282927",
              color: "white",
              borderColor: "#282927",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            Dark
          </button>
          <button
            style={{
              backgroundColor: "#c33ec8",
              color: "white",
              borderColor: "#c33ec8",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            Fairy
          </button>
          <button
            style={{
              backgroundColor: "#6181ca",
              color: "white",
              borderColor: "#6181ca",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            Flying
          </button>
          <button
            style={{
              backgroundColor: "#ab7120",
              color: "white",
              borderColor: "#ab7120",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            Ground
          </button>
          <button
            style={{
              backgroundColor: "#7b21a8",
              color: "white",
              borderColor: "#7b21a8",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            Poison
          </button>
          <button
            style={{
              backgroundColor: "#bbbabc",
              color: "white",
              borderColor: "#bbbabc",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            Steel
          </button>
          <button
            style={{
              backgroundColor: "#4b23c4",
              color: "white",
              borderColor: "#4b23c4",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            Dragon
          </button>
          <button
            style={{
              backgroundColor: "#4f3004",
              color: "white",
              borderColor: "#4f3004",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            Fighting
          </button>
          <button
            style={{
              backgroundColor: "#1c3265",
              color: "white",
              borderColor: "#1c3265",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            Ghost
          </button>
          <button
            style={{
              backgroundColor: "#1ea5bd",
              color: "white",
              borderColor: "#1ea5bd",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            Ice
          </button>
          <button
            style={{
              backgroundColor: "#bd1eb0",
              color: "white",
              borderColor: "#bd1eb0",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            Psychic
          </button>
          <button
            style={{
              backgroundColor: "#1e73bd",
              color: "white",
              borderColor: "#1e73bd",
              borderStyle: "solid",
              borderRadius: "30%",
              textTransform: "capitalize",
            }}
          >
            Water
          </button>
        </div>

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
                      <ul
                        className="nav nav-tabs"
                        style={{ display: "flex", justifyContent: "center" }}
                        id="myTab"
                        role="tablist"
                      >
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link active"
                            style={{ color: "white" }}
                            id="home-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#home-tab-pane"
                            type="button"
                            role="tab"
                            aria-controls="home-tab-pane"
                            aria-selected="true"
                          >
                            1
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link"
                            style={{ color: "white" }}
                            id="profile-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#profile-tab-pane"
                            type="button"
                            role="tab"
                            aria-controls="profile-tab-pane"
                            aria-selected="false"
                          >
                            2
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link"
                            style={{ color: "white" }}
                            id="contact-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#contact-tab-pane"
                            type="button"
                            role="tab"
                            aria-controls="contact-tab-pane"
                            aria-selected="false"
                          >
                            3
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link"
                            style={{ color: "white" }}
                            id="disabled-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#disabled-tab-pane"
                            type="button"
                            role="tab"
                            aria-controls="disabled-tab-pane"
                            aria-selected="false"
                          >
                            4
                          </button>
                        </li>
                      </ul>
                      <div className="tab-content" id="myTabContent">
                        <div
                          className="tab-pane fade show active"
                          id="home-tab-pane"
                          role="tabpanel"
                          aria-labelledby="home-tab"
                          tabIndex="0"
                        >
                          <div className="card-text">{moveState}</div>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="profile-tab-pane"
                          role="tabpanel"
                          aria-labelledby="profile-tab"
                          tabIndex="0"
                        >
                          {moveState2}
                        </div>
                        <div
                          className="tab-pane fade"
                          id="contact-tab-pane"
                          role="tabpanel"
                          aria-labelledby="contact-tab"
                          tabIndex="0"
                        >
                          {moveState3}
                        </div>
                        <div
                          className="tab-pane fade"
                          id="disabled-tab-pane"
                          role="tabpanel"
                          aria-labelledby="disabled-tab"
                          tabIndex="0"
                        >
                          {moveState4}
                        </div>
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
                            style={{
                              display: "flex",
                              justifyContent: "center",
                            }}
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
                          <h1>Stats</h1>
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
                          <h1>Profile</h1>
                          <div className="row row-cols-1 row-cols-md-2 g-4">
                            <div className="col">
                              <h5 className="card-title">Height:</h5>
                              <p className="card-text">{body.height}0cm</p>
                            </div>
                            <div className="col">
                              <h5 className="title">Location Found:</h5>
                              <p className="card-text">
                                {abilitiesDesciption.length < 4 ||
                                abilitiesDesciption[2].length < 1
                                  ? "Unknown"
                                  : abilitiesDesciption[2][0].location_area.name
                                      .charAt(0)
                                      .toUpperCase() +
                                    abilitiesDesciption[2][0].location_area.name.slice(
                                      1
                                    )}
                              </p>
                            </div>
                            <div className="col">
                              <h5 className="card-title">Weight:</h5>
                              <p className="card-text">{body.weight / 10}kg</p>
                            </div>
                            <div className="col">
                              <h5 className="card-title">Type:</h5>
                              <p className="card-text">
                                {body.types[0].type.name
                                  .charAt(0)
                                  .toUpperCase() +
                                  body.types[0].type.name.slice(1)}
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
                              {!abilities[1] ? abilityBug : abilityBug2}
                            </p>
                            {abilities.length > 1 ? (
                              <div>
                                <h5 className="card-title">
                                  {abilities[1].ability.name
                                    .charAt(0)
                                    .toUpperCase() +
                                    abilities[1].ability.name.slice(1)}
                                </h5>
                                <p className="card-text">
                                  {abilitiesDesciption.length < 4
                                    ? "Unknown"
                                    : abilityBug}
                                </p>
                              </div>
                            ) : (
                              <div> </div>
                            )}
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
      </div>
    </div>
  );
}
