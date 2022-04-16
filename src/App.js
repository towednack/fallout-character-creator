import React, { Component } from "react";

/* All JSON files. */
import { male_clothes } from "./JSON/male_clothes"; //Contains data about Shirts & Pants.
import { male_hair } from "./JSON/male_hair"; //Contains data about Male Hairstyles.
import { all_races } from "./JSON/all_races"; //Contains data about skincolor.
import { hair_colours } from "./JSON/hair_colours"; //Contains data about hair Colours.
import { facial_hair } from "./JSON/facial_hair"; //Contains data about Facial Hair.
import { male_headwear } from "./JSON/male_headwear"; //Contains data about Headwear for Vault Boy.
import { male_gloves } from "./JSON/male_gloves"; //Contains data about Gloves for Vault Boy.
import { male_masks } from "./JSON/male_masks"; //Contains data about Masks for Vault Boy.

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLink } from '@fortawesome/free-solid-svg-icons';

import LimbSegment from "./Components/LimbSegment/LimbSegment.js"; //A component that generates a segment for each Limb.
import Button from "./Components/Button/Button.js"; //A component that generates a "Previous" or "Next" button.
import GenderRaceAge from "./Components/GenderRaceAge/GenderRaceAge.js"; //A component that generates a "Previous" or "Next" button.

// import logo from "./Images/Fallout_Shelter_logo.png";

import "./App.css";
import "./SASS/FalloutBoy.scss"; //SASS for shared VaultBoy & VaultSuit classes..
import "./SASS/VaultBoy.scss"; //SASS for VaultBoy body.
import "./SASS/VaultSuit.scss"; //SASS for VaultSuit body.
import "./SASS/allRaces.scss"; //SASS for skincolors.
import "./SASS/Atlas01.scss"; //SASS for VG, VB Face.
import "./SASS/Atlas02.scss"; //SASS for VB Outfits, VB skintone sprites.
import "./SASS/Atlas03.scss"; //SASS for VB Outfits.
import "./SASS/Atlas04.scss"; //SASS for VB Outfits.
import "./SASS/Atlas05.scss"; //SASS for VB Outfits.
import "./SASS/Atlas06.scss"; //SASS for VB Outfits.
import "./SASS/Atlas07.scss"; //SASS for VB Outfits.
import "./SASS/Atlas08.scss"; //SASS for VB Outfits.
import "./SASS/Atlas17.scss"; //SASS for VB Hair, Headwear, and Masks.
import "./SASS/Atlas18.scss"; //SASS for VG, VB Hands, Gloves, Headwear, and Masks.
import "./SASS/Atlas21.scss"; //SASS for Objects and Headwear.
import "./SASS/hairColours.scss"; //SASS for hair colours.
import "./SASS/Mysterious.scss"; //SASS for Mysterious Stranger Outfit.
import "./SASS/FeralGhoul.scss"; //SASS for Feral Ghoul.

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current_gender: "male", //Initially loads Vault-Boy.
      current_race: 1, //Stores Skintone id. Initially loads Caucasian skintone, 1.
      current_headwear: 0, //Stores current Headwear id. Initially loads no headwear, 0.
      current_mask: 0, //Stores current Mask id. Initially loads no mask, 0.
      current_hair: 0, //Stores current Hair id. Initially loads Tunnel Snake, 0.
      current_hair_colour: 27, //Stores current Hair Colour id. Initially loads Blonde, 27.
      current_beard: 0, //Stores current Beard id. Initially loads no beard, 0.
      current_shirt: 7, //Stores current Shirt id. Initally loads Vault Suit, 38.
      current_gloves: 0, //Stores current Glove id. Initially loads no gloves, 0.
      current_pants: 7 //Stores current Pants id. Initally loads Vaultsuit, 38
    };
    this.handleOptionClick = this.handleOptionClick.bind(this); //This method is for "Prev" and "Next" buttons.
    this.handleGenderClick = this.handleGenderClick.bind(this); //This method is for Gender and Race selections buttons.
  }

  handleOptionClick(outfitStyle, arrayLength, label) {
    //This method triggers when the user clicks "Prev" or "Next" buttons.
    console.log("outfitStyle: ", outfitStyle);
    console.log("arrayLength: ", arrayLength);
    console.log("label: ", label);

    let ourStyle = this.state[outfitStyle]; //Temporarily stores the current_[outfitStyle] from state.

    if (label === "Next") {
      //If user clicked "Next" button.
      console.log("Next - ", ourStyle);
      if (ourStyle < arrayLength - 1) {
        //If ourStyle is less than number of items in [outfitStyle] array, add 1.
        ourStyle = ourStyle + 1;
      } else {
        //Otherwise, go back to 0.
        ourStyle = 0;
      }
    }

    if (label === "Previous") {
      //If user clicked "Previous" button.
      console.log("Prev", ourStyle);
      if (ourStyle === 0) {
        //If ourStyle is 0, go to end of [outfitStyle] array.
        ourStyle = arrayLength - 1;
      } else {
        //Otherwise, subtract 1.
        ourStyle = ourStyle - 1;
      }
    }

    this.setState({
      [outfitStyle]: ourStyle //Updates current_[outfitStyle] with new value.
      // current_shirt: ourStyle,
      // current_pants: ourStyle
    });
    console.log([outfitStyle] + ":" + ourStyle);
  }

  handleGenderClick(gender) {
    console.log("Current Gender: ", gender);

    //let ourGender = this.state.current_gender; //Temporarily stores the current_gender.

    let ourGender = gender === "male" ? "female" : "male";

    this.setState({
      current_gender: ourGender //Updates current_gender with new value.
    });
    console.log("New gender: " + ourGender);
  }

  render() {
    return (
      <div className="App">
        <div id="Guy39?" />

        {/* 
            <p>Total Number of Shirts, and Pants: {clothes.length}</p>
            <p>Total Number of Male Hair: {male_hair.length}</p>
            <p>Total Number of Hair Colours: {hair_colours.length}</p> 
            <p>Total Number of Facial Hair: {facial_hair.length}</p> 
            */}

        <div id="logo">
          {/* <img src={logo} alt="Fallout Shelter logo" /> */}
          <h1>Avatar Maker</h1>
        </div>

        <div id="avatarWindow">
          {" "}
          {/*Vault Suit and Vault Boy*/}
          <div id="falloutBoy">
            <div id="vaultSuit">
              <div id="vs_frontArm">
                <LimbSegment
                  limbClass="vs_frontarm_lowerhalf"
                  atlas={male_clothes[this.state.current_shirt]["atlas"]}
                  limbId={
                    male_clothes[this.state.current_shirt]["id"] +
                    "_frontarm_lowerhalf"
                  }
                />
                <LimbSegment
                  limbClass="vs_frontarm_upperhalf"
                  atlas={male_clothes[this.state.current_shirt]["atlas"]}
                  limbId={
                    male_clothes[this.state.current_shirt]["id"] +
                    "_frontarm_upperhalf"
                  }
                />
                {(() => {
                  if (this.state.current_gloves > 0) {
                    //Checks if there is any gloves selected. Ifso, returns a div for the front-arm glove.
                    return (
                      <LimbSegment
                        limbClass="vs_frontarm_glove"
                        atlas={male_gloves[this.state.current_gloves]["atlas"]}
                        limbId={
                          "vb_frontarm_" +
                          male_gloves[this.state.current_gloves]["id"]
                        }
                      />
                    );
                  } //Else, there is no front-arm glove div.
                })()}
              </div>

              {(() => {
                if (
                  this.state.current_headwear > 0 ||
                  this.state.current_mask > 0
                ) {
                  return (
                    <div id="vs_head">
                      {(() => {
                        if (this.state.current_headwear > 0) {
                          //Checks if there is any headwear selected. Ifso, returns a div for the hat.
                          return (
                            <LimbSegment
                              limbClass="vs_hat"
                              atlas={
                                male_headwear[this.state.current_headwear][
                                  "atlas"
                                ]
                              }
                              limbId={
                                male_headwear[this.state.current_headwear]["id"]
                              }
                            />
                          );
                        } //Else, there is no hat div.
                      })()}

                      {(() => {
                        if (this.state.current_mask > 0) {
                          //Checks if there is any masks selected. Ifso, returns a div for the mask.
                          return (
                            <LimbSegment
                              limbClass="vs_mask"
                              atlas={
                                male_masks[this.state.current_mask]["atlas"]
                              }
                              limbId={male_masks[this.state.current_mask]["id"]}
                            />
                          );
                        } //Else, there is no mask div.
                      })()}
                    </div>
                  );
                }
              })()}

              <div id="vs_torso">
                <LimbSegment
                  limbClass="vs_chest"
                  atlas={male_clothes[this.state.current_shirt]["atlas"]}
                  limbId={
                    male_clothes[this.state.current_shirt]["id"] + "_chest"
                  }
                />
                {(() => {
                  if (male_clothes[this.state.current_shirt]["hem"]) {
                    //Checks if current_shirt includes a hem. Ifso, returns a div for hem pieces.
                    return (
                      <div className="vs_hem">
                        <LimbSegment
                          limbClass="vs_fronthem"
                          atlas={
                            male_clothes[this.state.current_shirt]["atlas"]
                          }
                          limbId={
                            male_clothes[this.state.current_shirt]["id"] +
                            "_fronthem"
                          }
                        />

                        <LimbSegment
                          limbClass="vs_backhem"
                          atlas={
                            male_clothes[this.state.current_shirt]["atlas"]
                          }
                          limbId={
                            male_clothes[this.state.current_shirt]["id"] +
                            "_backhem"
                          }
                        />
                      </div>
                    );
                  } //Else, there is no hem div.
                })()}
              </div>

              <div id="vs_frontLeg">
                <LimbSegment
                  limbClass="vs_frontleg_upperhalf"
                  atlas={male_clothes[this.state.current_pants]["atlas"]}
                  limbId={
                    male_clothes[this.state.current_pants]["id"] +
                    "_frontleg_upperhalf"
                  }
                />
                <LimbSegment
                  limbClass="vs_frontleg_lowerhalf"
                  atlas={male_clothes[this.state.current_pants]["atlas"]}
                  limbId={
                    male_clothes[this.state.current_pants]["id"] +
                    "_frontleg_lowerhalf"
                  }
                />
                <LimbSegment
                  limbClass="vs_frontleg_foot"
                  atlas={male_clothes[this.state.current_pants]["atlas"]}
                  limbId={
                    male_clothes[this.state.current_pants]["id"] +
                    "_frontleg_foot"
                  }
                />
              </div>

              <div id="vs_trunk">
                <LimbSegment
                  limbClass="vs_crotch"
                  atlas={male_clothes[this.state.current_pants]["atlas"]}
                  limbId={
                    male_clothes[this.state.current_pants]["id"] + "_crotch"
                  }
                />
              </div>

              <div id="vs_backLeg">
                <LimbSegment
                  limbClass="vs_backleg_upperhalf"
                  atlas={male_clothes[this.state.current_pants]["atlas"]}
                  limbId={
                    male_clothes[this.state.current_pants]["id"] +
                    "_backleg_upperhalf"
                  }
                />
                <LimbSegment
                  limbClass="vs_backleg_lowerhalf"
                  atlas={male_clothes[this.state.current_pants]["atlas"]}
                  limbId={
                    male_clothes[this.state.current_pants]["id"] +
                    "_backleg_lowerhalf"
                  }
                />
                <LimbSegment
                  limbClass="vs_backleg_foot"
                  atlas={male_clothes[this.state.current_pants]["atlas"]}
                  limbId={
                    male_clothes[this.state.current_pants]["id"] +
                    "_backleg_foot"
                  }
                />
              </div>

              <div id="vs_backArm">
                <LimbSegment
                  limbClass="vs_backarm_lowerhalf"
                  atlas={male_clothes[this.state.current_shirt]["atlas"]}
                  limbId={
                    male_clothes[this.state.current_shirt]["id"] +
                    "_backarm_lowerhalf"
                  }
                />
                <LimbSegment
                  limbClass="vs_backarm_upperhalf"
                  atlas={male_clothes[this.state.current_shirt]["atlas"]}
                  limbId={
                    male_clothes[this.state.current_shirt]["id"] +
                    "_backarm_upperhalf"
                  }
                />
                {(() => {
                  if (this.state.current_gloves > 0) {
                    //Checks if there is any gloves selected. Ifso, returns a div for the back-arm glove.
                    return (
                      <LimbSegment
                        limbClass="vs_backarm_glove"
                        atlas={male_gloves[this.state.current_gloves]["atlas"]}
                        limbId={
                          "vb_backarm_" +
                          male_gloves[this.state.current_gloves]["id"]
                        }
                      />
                    );
                  } //Else, there is no back-arm glove div.
                })()}
              </div>
            </div>

            <div id="vaultBoy">
              <div id="vb_frontArm">
                <div
                  className={"atlas02 skinColor" + this.state.current_race}
                  id="vb_frontarm_lowerhalf"
                />
                <div
                  className={"atlas02 skinColor" + this.state.current_race}
                  id="vb_frontarm_upperhalf"
                />
                <div
                  className={
                    "vb_frontarm_hand atlas18 skinColor" +
                    this.state.current_race
                  }
                  id="vb_frontarm_hand2"
                />
              </div>

              <div id="vb_head">
                {(() => {
                  if (
                    !male_headwear[this.state.current_headwear]["disable_hair"]
                  ) {
                    //Checks for flag where current_headwear disables hairstyle.
                    return (
                      <div
                        className={
                          "vb_hair " +
                          male_hair[this.state.current_hair]["atlas"] +
                          " hair_" +
                          hair_colours[this.state.current_hair_colour]["id"]
                        }
                        id={"vb_" + male_hair[this.state.current_hair]["id"]}
                      />
                    );
                  } else {
                    //There is a flag to disable hairstyle.
                    if (
                      male_headwear[this.state.current_headwear][
                        "disable_hair"
                      ] === 0.5
                    ) {
                      //Checks if flag says to partially disable hairstyle.
                      return (
                        <div
                          className={
                            "vb_hair atlas17 hair_" +
                            hair_colours[this.state.current_hair_colour]["id"]
                          }
                          id="vb_hair13"
                        />
                      );
                    } //Else, flag says to completely disable hairstyle. There is no hair div.
                  }
                })()}

                {(() => {
                  if (
                    !male_headwear[this.state.current_headwear]["disable_beard"]
                  ) {
                    //Checks for flag where current_headwear disables beard.
                    return (
                      <div
                        className={
                          "vb_beard atlas01 hair_" +
                          hair_colours[this.state.current_hair_colour]["id"]
                        }
                        id={
                          "vb_beard" +
                          facial_hair[this.state.current_beard]["id"]
                        }
                      />
                    );
                  } //Else, flag says to completely disable beard. There is no beard div.
                })()}

                <div className="vb_face atlas01" id="vb_face5">
                  <div id="left_blinkaa" />
                </div>
                <div
                  className={"atlas02 skinColor" + this.state.current_race}
                  id="outfit7_head"
                />
              </div>

              <div id="vb_torso">
                <div
                  className={"atlas02 skinColor" + this.state.current_race}
                  id="vb_chest"
                />
              </div>

              <div id="vb_frontLeg">
                <div
                  className={"atlas02 skinColor" + this.state.current_race}
                  id="vb_frontleg_upperhalf"
                />
                <div
                  className={"atlas02 skinColor" + this.state.current_race}
                  id="vb_frontleg_lowerhalf"
                />
                <div
                  className={"atlas02 skinColor" + this.state.current_race}
                  id="vb_frontleg_foot"
                />
              </div>

              <div id="vb_trunk">
                <div
                  className={"atlas02 skinColor" + this.state.current_race}
                  id="vb_crotch"
                />
              </div>

              <div id="vb_backLeg">
                <div
                  className={"atlas02 skinColor" + this.state.current_race}
                  id="vb_backleg_upperhalf"
                />
                <div
                  className={"atlas02 skinColor" + this.state.current_race}
                  id="vb_backleg_lowerhalf"
                />
                <div
                  className={"atlas02 skinColor" + this.state.current_race}
                  id="vb_backleg_foot"
                />
              </div>

              <div id="vb_backArm">
                <div
                  className={"atlas02 skinColor" + this.state.current_race}
                  id="vb_backarm_lowerhalf"
                />
                <div
                  className={"atlas02 skinColor" + this.state.current_race}
                  id="vb_backarm_upperhalf"
                />
                <div
                  className={
                    "vb_backarm_hand atlas18 skinColor" +
                    this.state.current_race
                  }
                  id="vb_backarm_hand2"
                />
              </div>
            </div>
          </div>
        </div>

        <div id="allButtons">
          <div className="buttonsRow">
            <Button
              id={this.state.current_shirt}
              outfitStyle="current_shirt"
              arrayLength={male_clothes.length}
              label="Previous"
              clicker={this.handleOptionClick}
            />
            <div className="prevNextType">
              Shirt {this.state.current_shirt + 1}
            </div>
            <Button
              id={this.state.current_shirt}
              outfitStyle="current_shirt"
              arrayLength={male_clothes.length}
              label="Next"
              clicker={this.handleOptionClick}
            />
            <br />
            {/*<FontAwesomeIcon icon={faLink} />*/}
          </div>
          <div className="buttonsRow">
            <Button
              id={this.state.current_pants}
              outfitStyle="current_pants"
              arrayLength={male_clothes.length}
              label="Previous"
              clicker={this.handleOptionClick}
            />
            <div className="prevNextType">
              Pants {this.state.current_pants + 1}
            </div>
            <Button
              id={this.state.current_pants}
              outfitStyle="current_pants"
              arrayLength={male_clothes.length}
              label="Next"
              clicker={this.handleOptionClick}
            />
          </div>
          <div className="buttonsRow">
            <Button
              id={this.state.current_hair}
              outfitStyle="current_hair"
              arrayLength={male_hair.length}
              label="Previous"
              clicker={this.handleOptionClick}
            />
            <div className="prevNextType">
              Hairstyle {this.state.current_hair + 1}
            </div>
            <Button
              id={this.state.current_hair}
              outfitStyle="current_hair"
              arrayLength={male_hair.length}
              label="Next"
              clicker={this.handleOptionClick}
            />
          </div>
          <div className="buttonsRow">
            <Button
              id={this.state.current_hair_colour}
              outfitStyle="current_hair_colour"
              arrayLength={hair_colours.length}
              label="Previous"
              clicker={this.handleOptionClick}
            />
            <div className="prevNextType">
              Hair Colour {this.state.current_hair_colour + 1}
            </div>
            <Button
              id={this.state.current_hair_colour}
              outfitStyle="current_hair_colour"
              arrayLength={hair_colours.length}
              label="Next"
              clicker={this.handleOptionClick}
            />
          </div>
          <div className="buttonsRow">
            <Button
              id={this.state.current_beard}
              outfitStyle="current_beard"
              arrayLength={facial_hair.length}
              label="Previous"
              clicker={this.handleOptionClick}
            />
            <div className="prevNextType">
              Beard {this.state.current_beard + 1}
            </div>
            <Button
              id={this.state.current_beard}
              outfitStyle="current_beard"
              arrayLength={facial_hair.length}
              label="Next"
              clicker={this.handleOptionClick}
            />
          </div>
          <div className="buttonsRow">
            <Button
              id={this.state.current_headwear}
              outfitStyle="current_headwear"
              arrayLength={male_headwear.length}
              label="Previous"
              clicker={this.handleOptionClick}
            />
            <div className="prevNextType">
              Hat {this.state.current_headwear + 1}
            </div>
            <Button
              id={this.state.current_headwear}
              outfitStyle="current_headwear"
              arrayLength={male_headwear.length}
              label="Next"
              clicker={this.handleOptionClick}
            />
          </div>

          {/* <div className="buttonsRow">
            <Button
              id={this.state.current_mask}
              outfitStyle="current_mask"
              arrayLength={male_masks.length}
              label="Previous"
              clicker={this.handleOptionClick}
            />
            <div className="prevNextType">
              Mask {this.state.current_mask + 1}
            </div>
            <Button
              id={this.state.current_mask}
              outfitStyle="current_mask"
              arrayLength={male_masks.length}
              label="Next"
              clicker={this.handleOptionClick}
            />
          </div> */}

          <div className="buttonsRow">
            <Button
              id={this.state.current_gloves}
              outfitStyle="current_gloves"
              arrayLength={male_gloves.length}
              label="Previous"
              clicker={this.handleOptionClick}
            />
            <div className="prevNextType">
              Gloves {this.state.current_gloves + 1}
            </div>
            <Button
              id={this.state.current_gloves}
              outfitStyle="current_gloves"
              arrayLength={male_gloves.length}
              label="Next"
              clicker={this.handleOptionClick}
            />
          </div>
        </div>

        <GenderRaceAge
          gender={this.state.current_gender}
          race={this.state.current_race}
          raceLength={all_races.length}
          handleGenderClick={this.handleGenderClick}
          handleOptionClick={this.handleOptionClick}
        />

        <div id="displaySelections">
          <div className="displayRow">
            <div className="labelType">Shirt:</div>
            <div className="styleType">
              {male_clothes[this.state.current_shirt]["name"]}
            </div>
          </div>
          <div className="displayRow">
            <div className="labelType">Pants:</div>
            <div className="styleType">
              {male_clothes[this.state.current_pants]["name"]}
            </div>
          </div>
          <div className="displayRow">
            <div className="labelType">Hairstyle:</div>
            <div className="styleType">
              {male_hair[this.state.current_hair]["name"]}
            </div>
          </div>
          <div className="displayRow">
            <div className="labelType">Hair Colour:</div>
            <div className="styleType">
              {hair_colours[this.state.current_hair_colour]["name"]}
            </div>
          </div>
          <div className="displayRow">
            <div className="labelType">Beard:</div>
            <div className="styleType">
              {facial_hair[this.state.current_beard]["name"]}
            </div>
          </div>
          <div className="displayRow">
            <div className="labelType">Headwear:</div>
            <div className="styleType">
              {male_headwear[this.state.current_headwear]["name"]}
            </div>
          </div>
          {/* <div className="displayRow">
            <div className="labelType">Mask:</div>
            <div className="styleType">
              {male_masks[this.state.current_mask]["name"]}
            </div>
          </div> */}
          <div className="displayRow">
            <div className="labelType">Gloves:</div>
            <div className="styleType">
              {male_gloves[this.state.current_gloves]["name"]}
            </div>
          </div>
        </div>

        <div id="genderRaceAgeSelection">
          <div className="displayRow">
            <div className="labelType">Gender:</div>
            <div className="styleType">{this.state.current_gender}</div>
          </div>
          <div className="displayRow">
            <div className="labelType">Race:</div>
            <div className="styleType">
              {all_races[this.state.current_race]["name"]}
            </div>
          </div>
        </div>

        {/*<img id="iphoto" src={iphoto} alt="Hey!"/>

        <img id="guy35" src={Guy35} alt="Hey!"/>*/}
      </div>
    );
  }
}

export default App;
