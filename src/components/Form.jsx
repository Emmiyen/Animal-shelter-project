import "./form.css";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";
import { Link } from "react-router-dom";
function Form(props) {
  const [age, setAge] = useState("");
  const [size, setSize] = useState("");
  const [gender, setGender] = useState("");
  const [dogActive, setDogActive] = useState(false);
  const [catActive, setCatActive] = useState(false);
  const [form, setForm] = useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
    console.log(age);
  };
  const handleChange2 = (event) => {
    setSize(event.target.value);
    console.log(size);
  };
  const handleChange3 = (event) => {
    setGender(event.target.value);
    console.log(gender);
  };
  const toggleForm = (name) => {
    if (name === "dog") {
      setDogActive(true);
      setCatActive(false);
    } else if (name === "cat") {
      setDogActive(false);
      setCatActive(true);
    }
  };
  const sendForm = (type) => {
    if (type === "dog") {
      setForm({
        type: "dog",
        age: age,
        gender: gender,
        size: size,
      });
    } else if (type === "cat") {
      setForm({
        type: "cat",
        age: age,
        gender: gender,
      });
    }
    console.log(form);
  };
  return props.data.length !== 0 ? (
    <div className="form-wrap">
      <h3>what kind of pet are you looking for?</h3>
      <div className="cards">
        <div
          className={`card ${dogActive ? "active-card" : ""}`}
          onClick={() => toggleForm("dog")}
        >
          <h2 className="card-title">Dogs</h2>
          <img
            src="https://www.kindpng.com/picc/m/42-421983_cartoon-dog-png-transparent-cute-cartoon-dog-png.png"
            alt=""
          />
          <div className="card-desc">
            <h3>Dog</h3>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth margin="normal">
                <InputLabel id="age-label">Age</InputLabel>
                <Select
                  labelId="age-label"
                  id="age"
                  value={age}
                  label="Age"
                  onChange={handleChange}
                >
                  <MenuItem value={"Young"}>Young</MenuItem>
                  <MenuItem value={"Adult"}>Adult</MenuItem>
                  <MenuItem value={"Senior"}>Senior</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth margin="normal">
                <InputLabel id="size-label">Size</InputLabel>
                <Select
                  labelId="size-label"
                  id="size"
                  value={size}
                  label="Size"
                  onChange={handleChange2}
                >
                  <MenuItem value={"Small"}>Small</MenuItem>
                  <MenuItem value={"Medium"}>Medium</MenuItem>
                  <MenuItem value={"Large"}>Large</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth margin="normal">
                <InputLabel id="gender-label">Gender</InputLabel>
                <Select
                  labelId="gender-label"
                  id="gender"
                  value={gender}
                  label="gender"
                  onChange={handleChange3}
                >
                  <MenuItem value={"Female"}>Female</MenuItem>
                  <MenuItem value={"Male"}>Male</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Link
              to="/animalcategories"
              className="sub"
              onClick={() => sendForm("dog")}
            >
              Submit
            </Link>
          </div>
        </div>
        <div
          className={`card ${catActive ? "active-card" : ""}`}
          onClick={() => toggleForm("cat")}
        >
          <h2 className="card-title">Cats</h2>
          <img
            src="https://t3.ftcdn.net/jpg/02/63/04/74/360_F_263047400_AReIHV0BYqPckVM9HUnh9czMhS4Ol2qm.jpg"
            alt=""
          />
          <div className="card-desc">
            <h3>Cat</h3>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth margin="normal">
                <InputLabel id="age-label">Age</InputLabel>
                <Select
                  labelId="age-label"
                  id="age"
                  value={age}
                  label="Age"
                  onChange={handleChange}
                >
                  <MenuItem value={"Young"}>Young</MenuItem>
                  <MenuItem value={"Adult"}>Adult</MenuItem>
                  <MenuItem value={"Senior"}>Senior</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth margin="normal">
                <InputLabel id="gender-label">Gender</InputLabel>
                <Select
                  labelId="gender-label"
                  id="gender"
                  value={gender}
                  label="gender"
                  onChange={handleChange3}
                >
                  <MenuItem value={"Female"}>Female</MenuItem>
                  <MenuItem value={"Male"}>Male</MenuItem>
                </Select>
              </FormControl>
              <Link
                to="/animalcategories"
                className="sub"
                onClick={() => sendForm("cat")}
              >
                Submit
              </Link>
            </Box>
          </div>
        </div>
        <div className="donate">
          <h2 className="card-title">Donates</h2>
          <img
            src="https://cdn.pixabay.com/photo/2020/12/16/04/16/dinosaur-5835666__340.jpg"
            alt=""
          />
          <div className="card-desc">
            <h3>Donate us!</h3>
            <br />
            <img
              src="https://m.media-amazon.com/images/I/41cz-T4nw1L._AC_UL320_.jpg"
              alt=""
            />
            <br />
            <p>Income from each mascot sold is donated to animal shelters</p>
            <br />
            <button className="button-53">BUY A MASCOT</button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <p>loading data...</p>
  );
}

export default Form;
