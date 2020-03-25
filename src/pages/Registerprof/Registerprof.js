import React, { useState } from "react";
import { Container } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import { MenuItem, Select } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { FormControl } from '@material-ui/core';

import { Button } from '@material-ui/core';

import FB from '../../config/config';

import './Registerprof.scss';

function RegisterProf(props) {
  const { history } = props;
  const [heightFt, setHeightFt] = useState("");
  const [heightIn, setHeightIn] = useState("");
  const [currentWeight, setCurrentWeight] = useState("");
  const [goalWeight, setGoalWeight] = useState("");
  const [gender, setGender] = useState("");
  const [dobDay, setDobDay] = useState("");
  const [dobMonth, setDobMonth] = useState("");
  const [dobYear, setDobYear] = useState("");
  const [fullName, setFullName] = useState("");
  const [location, setLocation] = useState("");
  const firstName = fullName.split(' ')[0];
  const secondName = fullName.split(' ')[1];

  async function registerUser() {
    try {
      if (heightFt == "" || heightIn == "" || currentWeight == "" || goalWeight == "" || gender == "" || dobDay == "" || dobMonth == "" || dobYear == "" || fullName == "" || location == "") {
        alert("Something is missing")
      } else {
        await FB.updateUser(fullName, firstName, secondName, parseInt(heightFt), parseInt(heightIn), parseInt(currentWeight), parseInt(goalWeight), gender, dobDay, dobMonth, dobYear, location);
        await FB.updateName(fullName);
        history.push('/dashboard')
      }
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <Container maxWidth="md">
      <form onSubmit={e => e.preventDefault() && false}>
        <Paper className="paper" elevation={20}>
          <Typography className="Typo" variant="h4">Tell us more about yourself</Typography>
          <div className="input">
            <p> Name </p>
            <TextField className="inputtf-name" id="outlined-basic" label="Full Name" variant="outlined" onChange={e => setFullName(e.target.value)} />
          </div>
          <div className="input">
            <p> Height: </p>
            <TextField className="inputtf" id="outlined-basic" label="Ft" variant="outlined" onChange={e => setHeightFt(e.target.value)} />
            <p></p>
            <TextField className="inputtf" id="outlined-basic" label="In" variant="outlined" onChange={e => setHeightIn(e.target.value)} />
          </div>
          <div className="inputSelectors">
            <FormControl variant="outlined" >
              <div className="input">
                <p>Location: </p>
                <Select
                  labelId="location-select"
                  id="location-select"
                  value={location}
                  onChange={e => setLocation(e.target.value)}
                  className="select"
                >
                  <MenuItem value="Afganistan">Afghanistan</MenuItem>
                  <MenuItem value="Albania">Albania</MenuItem>
                  <MenuItem value="Algeria">Algeria</MenuItem>
                  <MenuItem value="American Samoa">American Samoa</MenuItem>
                  <MenuItem value="Andorra">Andorra</MenuItem>
                  <MenuItem value="Angola">Angola</MenuItem>
                  <MenuItem value="Anguilla">Anguilla</MenuItem>
                  <MenuItem value="Antigua and Barbuda">Antigua and Barbuda</MenuItem>
                  <MenuItem value="Argentina">Argentina</MenuItem>
                  <MenuItem value="Armenia">Armenia</MenuItem>
                  <MenuItem value="Aruba">Aruba</MenuItem>
                  <MenuItem value="Australia">Australia</MenuItem>
                  <MenuItem value="Austria">Austria</MenuItem>
                  <MenuItem value="Azerbaijan">Azerbaijan</MenuItem>
                  <MenuItem value="Bahamas">Bahamas</MenuItem>
                  <MenuItem value="Bahrain">Bahrain</MenuItem>
                  <MenuItem value="Bangladesh">Bangladesh</MenuItem>
                  <MenuItem value="Barbados">Barbados</MenuItem>
                  <MenuItem value="Belarus">Belarus</MenuItem>
                  <MenuItem value="Belgium">Belgium</MenuItem>
                  <MenuItem value="Belize">Belize</MenuItem>
                  <MenuItem value="Benin">Benin</MenuItem>
                  <MenuItem value="Bermuda">Bermuda</MenuItem>
                  <MenuItem value="Bhutan">Bhutan</MenuItem>
                  <MenuItem value="Bolivia">Bolivia</MenuItem>
                  <MenuItem value="Bonaire">Bonaire</MenuItem>
                  <MenuItem value="Bosnia amd Herzegovina">Bosnia and Herzegovina</MenuItem>
                  <MenuItem value="Botswana">Botswana</MenuItem>
                  <MenuItem value="Brazil">Brazil</MenuItem>
                  <MenuItem value="British Indian Ocean Ter">British Indian Ocean Ter</MenuItem>
                  <MenuItem value="Brunei">Brunei</MenuItem>
                  <MenuItem value="Bulgaria">Bulgaria</MenuItem>
                  <MenuItem value="Burkina Faso">Burkina Faso</MenuItem>
                  <MenuItem value="Burundi">Burundi</MenuItem>
                  <MenuItem value="Cambodia">Cambodia</MenuItem>
                  <MenuItem value="Cameroon">Cameroon</MenuItem>
                  <MenuItem value="Canada">Canada</MenuItem>
                  <MenuItem value="Canary Islands">Canary Islands</MenuItem>
                  <MenuItem value="Cape Verde">Cape Verde</MenuItem>
                  <MenuItem value="Cayman Islands">Cayman Islands</MenuItem>
                  <MenuItem value="Central African Republic">Central African Republic</MenuItem>
                  <MenuItem value="Chad">Chad</MenuItem>
                  <MenuItem value="Channel Islands">Channel Islands</MenuItem>
                  <MenuItem value="Chile">Chile</MenuItem>
                  <MenuItem value="China">China</MenuItem>
                  <MenuItem value="Christmas Island">Christmas Island</MenuItem>
                  <MenuItem value="Cocos Island">Cocos Island</MenuItem>
                  <MenuItem value="Colombia">Colombia</MenuItem>
                  <MenuItem value="Comoros">Comoros</MenuItem>
                  <MenuItem value="Congo">Congo</MenuItem>
                  <MenuItem value="Cook Islands">Cook Islands</MenuItem>
                  <MenuItem value="Costa Rica">Costa Rica</MenuItem>
                  <MenuItem value="Cote DIvoire">Cote DIvoire</MenuItem>
                  <MenuItem value="Croatia">Croatia</MenuItem>
                  <MenuItem value="Cuba">Cuba</MenuItem>
                  <MenuItem value="Curaco">Curacao</MenuItem>
                  <MenuItem value="Cyprus">Cyprus</MenuItem>
                  <MenuItem value="Czech Republic">Czech Republic</MenuItem>
                  <MenuItem value="Denmark">Denmark</MenuItem>
                  <MenuItem value="Djibouti">Djibouti</MenuItem>
                  <MenuItem value="Dominica">Dominica</MenuItem>
                  <MenuItem value="Dominican Republic">Dominican Republic</MenuItem>
                  <MenuItem value="East Timor">East Timor</MenuItem>
                  <MenuItem value="Ecuador">Ecuador</MenuItem>
                  <MenuItem value="Egypt">Egypt</MenuItem>
                  <MenuItem value="El Salvador">El Salvador</MenuItem>
                  <MenuItem value="Equatorial Guinea">Equatorial Guinea</MenuItem>
                  <MenuItem value="Eritrea">Eritrea</MenuItem>
                  <MenuItem value="Estonia">Estonia</MenuItem>
                  <MenuItem value="Ethiopia">Ethiopia</MenuItem>
                  <MenuItem value="Falkland Islands">Falkland Islands</MenuItem>
                  <MenuItem value="Faroe Islands">Faroe Islands</MenuItem>
                  <MenuItem value="Fiji">Fiji</MenuItem>
                  <MenuItem value="Finland">Finland</MenuItem>
                  <MenuItem value="France">France</MenuItem>
                  <MenuItem value="French Guiana">French Guiana</MenuItem>
                  <MenuItem value="French Polynesia">French Polynesia</MenuItem>
                  <MenuItem value="French Southern Ter">French Southern Ter</MenuItem>
                  <MenuItem value="Gabon">Gabon</MenuItem>
                  <MenuItem value="Gambia">Gambia</MenuItem>
                  <MenuItem value="Georgia">Georgia</MenuItem>
                  <MenuItem value="Germany">Germany</MenuItem>
                  <MenuItem value="Ghana">Ghana</MenuItem>
                  <MenuItem value="Gibraltar">Gibraltar</MenuItem>
                  <MenuItem value="Great Britain">Great Britain</MenuItem>
                  <MenuItem value="Greece">Greece</MenuItem>
                  <MenuItem value="Greenland">Greenland</MenuItem>
                  <MenuItem value="Grenada">Grenada</MenuItem>
                  <MenuItem value="Guadeloupe">Guadeloupe</MenuItem>
                  <MenuItem value="Guam">Guam</MenuItem>
                  <MenuItem value="Guatemala">Guatemala</MenuItem>
                  <MenuItem value="Guinea">Guinea</MenuItem>
                  <MenuItem value="Guyana">Guyana</MenuItem>
                  <MenuItem value="Haiti">Haiti</MenuItem>
                  <MenuItem value="Hawaii">Hawaii</MenuItem>
                  <MenuItem value="Honduras">Honduras</MenuItem>
                  <MenuItem value="Hong Kong">Hong Kong</MenuItem>
                  <MenuItem value="Hungary">Hungary</MenuItem>
                  <MenuItem value="Iceland">Iceland</MenuItem>
                  <MenuItem value="Indonesia">Indonesia</MenuItem>
                  <MenuItem value="India">India</MenuItem>
                  <MenuItem value="Iran">Iran</MenuItem>
                  <MenuItem value="Iraq">Iraq</MenuItem>
                  <MenuItem value="Ireland">Ireland</MenuItem>
                  <MenuItem value="Isle of Man">Isle of Man</MenuItem>
                  <MenuItem value="Israel">Israel</MenuItem>
                  <MenuItem value="Italy">Italy</MenuItem>
                  <MenuItem value="Jamaica">Jamaica</MenuItem>
                  <MenuItem value="Japan">Japan</MenuItem>
                  <MenuItem value="Jordan">Jordan</MenuItem>
                  <MenuItem value="Kazakhstan">Kazakhstan</MenuItem>
                  <MenuItem value="Kenya">Kenya</MenuItem>
                  <MenuItem value="Kiribati">Kiribati</MenuItem>
                  <MenuItem value="Korea North">Korea North</MenuItem>
                  <MenuItem value="Korea Sout">Korea South</MenuItem>
                  <MenuItem value="Kuwait">Kuwait</MenuItem>
                  <MenuItem value="Kyrgyzstan">Kyrgyzstan</MenuItem>
                  <MenuItem value="Laos">Laos</MenuItem>
                  <MenuItem value="Latvia">Latvia</MenuItem>
                  <MenuItem value="Lebanon">Lebanon</MenuItem>
                  <MenuItem value="Lesotho">Lesotho</MenuItem>
                  <MenuItem value="Liberia">Liberia</MenuItem>
                  <MenuItem value="Libya">Libya</MenuItem>
                  <MenuItem value="Liechtenstein">Liechtenstein</MenuItem>
                  <MenuItem value="Lithuania">Lithuania</MenuItem>
                  <MenuItem value="Luxembourg">Luxembourg</MenuItem>
                  <MenuItem value="Macau">Macau</MenuItem>
                  <MenuItem value="Macedonia">Macedonia</MenuItem>
                  <MenuItem value="Madagascar">Madagascar</MenuItem>
                  <MenuItem value="Malaysia">Malaysia</MenuItem>
                  <MenuItem value="Malawi">Malawi</MenuItem>
                  <MenuItem value="Maldives">Maldives</MenuItem>
                  <MenuItem value="Mali">Mali</MenuItem>
                  <MenuItem value="Malta">Malta</MenuItem>
                  <MenuItem value="Marshall Islands">Marshall Islands</MenuItem>
                  <MenuItem value="Martinique">Martinique</MenuItem>
                  <MenuItem value="Mauritania">Mauritania</MenuItem>
                  <MenuItem value="Mauritius">Mauritius</MenuItem>
                  <MenuItem value="Mayotte">Mayotte</MenuItem>
                  <MenuItem value="Mexico">Mexico</MenuItem>
                  <MenuItem value="Midway Islands">Midway Islands</MenuItem>
                  <MenuItem value="Moldova">Moldova</MenuItem>
                  <MenuItem value="Monaco">Monaco</MenuItem>
                  <MenuItem value="Mongolia">Mongolia</MenuItem>
                  <MenuItem value="Montserrat">Montserrat</MenuItem>
                  <MenuItem value="Morocco">Morocco</MenuItem>
                  <MenuItem value="Mozambique">Mozambique</MenuItem>
                  <MenuItem value="Myanmar">Myanmar</MenuItem>
                  <MenuItem value="Nambia">Nambia</MenuItem>
                  <MenuItem value="Nauru">Nauru</MenuItem>
                  <MenuItem value="Nepal">Nepal</MenuItem>
                  <MenuItem value="Netherland Antilles">Netherland Antilles</MenuItem>
                  <MenuItem value="Netherlands">Netherlands (Holland, Europe)</MenuItem>
                  <MenuItem value="Nevis">Nevis</MenuItem>
                  <MenuItem value="New Caledonia">New Caledonia</MenuItem>
                  <MenuItem value="New Zealand">New Zealand</MenuItem>
                  <MenuItem value="Nicaragua">Nicaragua</MenuItem>
                  <MenuItem value="Niger">Niger</MenuItem>
                  <MenuItem value="Nigeria">Nigeria</MenuItem>
                  <MenuItem value="Niue">Niue</MenuItem>
                  <MenuItem value="Norfolk Island">Norfolk Island</MenuItem>
                  <MenuItem value="Norway">Norway</MenuItem>
                  <MenuItem value="Oman">Oman</MenuItem>
                  <MenuItem value="Pakistan">Pakistan</MenuItem>
                  <MenuItem value="Palau Island">Palau Island</MenuItem>
                  <MenuItem value="Palestine">Palestine</MenuItem>
                  <MenuItem value="Panama">Panama</MenuItem>
                  <MenuItem value="Papua New Guinea">Papua New Guinea</MenuItem>
                  <MenuItem value="Paraguay">Paraguay</MenuItem>
                  <MenuItem value="Peru">Peru</MenuItem>
                  <MenuItem value="Phillipines">Philippines</MenuItem>
                  <MenuItem value="Pitcairn Island">Pitcairn Island</MenuItem>
                  <MenuItem value="Poland">Poland</MenuItem>
                  <MenuItem value="Portugal">Portugal</MenuItem>
                  <MenuItem value="Puerto Rico">Puerto Rico</MenuItem>
                  <MenuItem value="Qatar">Qatar</MenuItem>
                  <MenuItem value="Republic of Montenegro">Republic of Montenegro</MenuItem>
                  <MenuItem value="Republic of Serbia">Republic of Serbia</MenuItem>
                  <MenuItem value="Reunion">Reunion</MenuItem>
                  <MenuItem value="Romania">Romania</MenuItem>
                  <MenuItem value="Russia">Russia</MenuItem>
                  <MenuItem value="Rwanda">Rwanda</MenuItem>
                  <MenuItem value="St Barthelemy">St Barthelemy</MenuItem>
                  <MenuItem value="St Eustatius">St Eustatius</MenuItem>
                  <MenuItem value="St Helena">St Helena</MenuItem>
                  <MenuItem value="St Kitts-Nevis">St Kitts-Nevis</MenuItem>
                  <MenuItem value="St Lucia">St Lucia</MenuItem>
                  <MenuItem value="St Maarten">St Maarten</MenuItem>
                  <MenuItem value="St Pierre and Miquelon">St Pierre and Miquelon</MenuItem>
                  <MenuItem value="St Vincent and Grenadines">St Vincent and Grenadines</MenuItem>
                  <MenuItem value="Saipan">Saipan</MenuItem>
                  <MenuItem value="Samoa">Samoa</MenuItem>
                  <MenuItem value="Samoa American">Samoa American</MenuItem>
                  <MenuItem value="San Marino">San Marino</MenuItem>
                  <MenuItem value="Sao Tome and Principe">Sao Tome and Principe</MenuItem>
                  <MenuItem value="Saudi Arabia">Saudi Arabia</MenuItem>
                  <MenuItem value="Senegal">Senegal</MenuItem>
                  <MenuItem value="Seychelles">Seychelles</MenuItem>
                  <MenuItem value="Sierra Leone">Sierra Leone</MenuItem>
                  <MenuItem value="Singapore">Singapore</MenuItem>
                  <MenuItem value="Slovakia">Slovakia</MenuItem>
                  <MenuItem value="Slovenia">Slovenia</MenuItem>
                  <MenuItem value="Solomon Islands">Solomon Islands</MenuItem>
                  <MenuItem value="Somalia">Somalia</MenuItem>
                  <MenuItem value="South Africa">South Africa</MenuItem>
                  <MenuItem value="Spain">Spain</MenuItem>
                  <MenuItem value="Sri Lanka">Sri Lanka</MenuItem>
                  <MenuItem value="Sudan">Sudan</MenuItem>
                  <MenuItem value="Suriname">Suriname</MenuItem>
                  <MenuItem value="Swaziland">Swaziland</MenuItem>
                  <MenuItem value="Sweden">Sweden</MenuItem>
                  <MenuItem value="Switzerland">Switzerland</MenuItem>
                  <MenuItem value="Syria">Syria</MenuItem>
                  <MenuItem value="Tahiti">Tahiti</MenuItem>
                  <MenuItem value="Taiwan">Taiwan</MenuItem>
                  <MenuItem value="Tajikistan">Tajikistan</MenuItem>
                  <MenuItem value="Tanzania">Tanzania</MenuItem>
                  <MenuItem value="Thailand">Thailand</MenuItem>
                  <MenuItem value="Togo">Togo</MenuItem>
                  <MenuItem value="Tokelau">Tokelau</MenuItem>
                  <MenuItem value="Tonga">Tonga</MenuItem>
                  <MenuItem value="Trinidad and Tobago">Trinidad and Tobago</MenuItem>
                  <MenuItem value="Tunisia">Tunisia</MenuItem>
                  <MenuItem value="Turkey">Turkey</MenuItem>
                  <MenuItem value="Turkmenistan">Turkmenistan</MenuItem>
                  <MenuItem value="Turks and Caicos Is">Turks and Caicos Is</MenuItem>
                  <MenuItem value="Tuvalu">Tuvalu</MenuItem>
                  <MenuItem value="Uganda">Uganda</MenuItem>
                  <MenuItem value="United Kingdom">United Kingdom</MenuItem>
                  <MenuItem value="Ukraine">Ukraine</MenuItem>
                  <MenuItem value="United Arab Erimates">United Arab Emirates</MenuItem>
                  <MenuItem value="United States of America">United States of America</MenuItem>
                  <MenuItem value="Uraguay">Uruguay</MenuItem>
                  <MenuItem value="Uzbekistan">Uzbekistan</MenuItem>
                  <MenuItem value="Vanuatu">Vanuatu</MenuItem>
                  <MenuItem value="Vatican City State">Vatican City State</MenuItem>
                  <MenuItem value="Venezuela">Venezuela</MenuItem>
                  <MenuItem value="Vietnam">Vietnam</MenuItem>
                  <MenuItem value="Virgin Islands (Brit)">Virgin Islands (Brit)</MenuItem>
                  <MenuItem value="Virgin Islands (USA)">Virgin Islands (USA)</MenuItem>
                  <MenuItem value="Wake Island">Wake Island</MenuItem>
                  <MenuItem value="Wallis and Futana Is">Wallis and Futana Is</MenuItem>
                  <MenuItem value="Yemen">Yemen</MenuItem>
                  <MenuItem value="Zaire">Zaire</MenuItem>
                  <MenuItem value="Zambia">Zambia</MenuItem>
                  <MenuItem value="Zimbabwe">Zimbabwe</MenuItem>
                </Select>
              </div>
            </FormControl>
          </div>
          <div className="input">
            <p> Current Weight: </p>
            <TextField className="inputtf" id="outlined-basic" label="Kg" variant="outlined" onChange={e => setCurrentWeight(e.target.value)} />
          </div>
          <div className="input">
            <p> Goal Weight: </p>
            <TextField className="inputtf" id="outlined-basic" label="Kg" variant="outlined" onChange={e => setGoalWeight(e.target.value)} />
          </div>
          <div className="inputSelectors">
            <FormControl variant="outlined" >
              <div className="input">
                <p>Gender: </p>
                <Select
                  labelId="gender-select"
                  id="gender-select"
                  value={gender}
                  onChange={e => setGender(e.target.value)}
                  className="select"
                >
                  <MenuItem value={true}>Male</MenuItem>
                  <MenuItem value={false}>Female</MenuItem>
                </Select>
              </div>
            </FormControl>
          </div>
          <div className="inputSelectors">
            <FormControl variant="outlined" >
              <div className="input">
                <p>Date of Birth: </p>
                <Select
                  labelId="dob-day-select"
                  id="dob-day-select"
                  value={dobDay}
                  onChange={e => setDobDay(e.target.value)}
                  className="selectDobDay"
                >
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                  <MenuItem value={6}>6</MenuItem>
                  <MenuItem value={7}>7</MenuItem>
                  <MenuItem value={8}>8</MenuItem>
                  <MenuItem value={9}>9</MenuItem>
                  <MenuItem value={10}>10</MenuItem>
                  <MenuItem value={11}>11</MenuItem>
                  <MenuItem value={12}>12</MenuItem>
                  <MenuItem value={13}>13</MenuItem>
                  <MenuItem value={14}>14</MenuItem>
                  <MenuItem value={15}>15</MenuItem>
                  <MenuItem value={16}>16</MenuItem>
                  <MenuItem value={17}>17</MenuItem>
                  <MenuItem value={18}>18</MenuItem>
                  <MenuItem value={19}>19</MenuItem>
                  <MenuItem value={20}>20</MenuItem>
                  <MenuItem value={21}>21</MenuItem>
                  <MenuItem value={22}>22</MenuItem>
                  <MenuItem value={23}>23</MenuItem>
                  <MenuItem value={24}>24</MenuItem>
                  <MenuItem value={25}>25</MenuItem>
                  <MenuItem value={26}>26</MenuItem>
                  <MenuItem value={27}>27</MenuItem>
                  <MenuItem value={28}>28</MenuItem>
                  <MenuItem value={29}>29</MenuItem>
                  <MenuItem value={30}>30</MenuItem>
                  <MenuItem value={31}>31</MenuItem>
                </Select>
                <p></p>
                <Select
                  labelId="dob-month-select"
                  id="dob-month-select"
                  value={dobMonth}
                  onChange={e => setDobMonth(e.target.value)}
                  className="selectDobMonth"
                >
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                  <MenuItem value={6}>6</MenuItem>
                  <MenuItem value={7}>7</MenuItem>
                  <MenuItem value={8}>8</MenuItem>
                  <MenuItem value={9}>9</MenuItem>
                  <MenuItem value={10}>10</MenuItem>
                  <MenuItem value={11}>11</MenuItem>
                  <MenuItem value={12}>12</MenuItem>
                </Select>
                <p></p>
                <Select
                  labelId="dob-year-select"
                  id="dob-year-select"
                  value={dobYear}
                  onChange={e => setDobYear(e.target.value)}
                  className="selectDobYear"
                >
                  <MenuItem value={1971}>1971</MenuItem>
                  <MenuItem value={1972}>1972</MenuItem>
                  <MenuItem value={1973}>1973</MenuItem>
                  <MenuItem value={1974}>1974</MenuItem>
                  <MenuItem value={1975}>1975</MenuItem>
                  <MenuItem value={1976}>1976</MenuItem>
                  <MenuItem value={1977}>1977</MenuItem>
                  <MenuItem value={1978}>1978</MenuItem>
                  <MenuItem value={1979}>1979</MenuItem>
                  <MenuItem value={1980}>1980</MenuItem>
                  <MenuItem value={1981}>1981</MenuItem>
                  <MenuItem value={1982}>1982</MenuItem>
                  <MenuItem value={1983}>1983</MenuItem>
                  <MenuItem value={1984}>1984</MenuItem>
                  <MenuItem value={1985}>1985</MenuItem>
                  <MenuItem value={1986}>1986</MenuItem>
                  <MenuItem value={1987}>1987</MenuItem>
                  <MenuItem value={1988}>1988</MenuItem>
                  <MenuItem value={1989}>1989</MenuItem>
                  <MenuItem value={1990}>1990</MenuItem>
                  <MenuItem value={1991}>1991</MenuItem>
                  <MenuItem value={1992}>1992</MenuItem>
                  <MenuItem value={1993}>1993</MenuItem>
                  <MenuItem value={1994}>1994</MenuItem>
                  <MenuItem value={1995}>1995</MenuItem>
                  <MenuItem value={1996}>1996</MenuItem>
                  <MenuItem value={1997}>1997</MenuItem>
                  <MenuItem value={1998}>1998</MenuItem>
                  <MenuItem value={1999}>1999</MenuItem>
                  <MenuItem value={2000}>2000</MenuItem>
                  <MenuItem value={2001}>2001</MenuItem>
                  <MenuItem value={2002}>2002</MenuItem>
                  <MenuItem value={2003}>2003</MenuItem>
                  <MenuItem value={2004}>2004</MenuItem>

                </Select>
              </div>
            </FormControl>
          </div>
          <div className="buttons">
            <Button className="button" variant="outlined" color="primary" type="submit" onClick={registerUser}>
              Submit
          </Button>
          </div>
        </Paper>
      </form>
    </Container >
  );
}

export default RegisterProf;
