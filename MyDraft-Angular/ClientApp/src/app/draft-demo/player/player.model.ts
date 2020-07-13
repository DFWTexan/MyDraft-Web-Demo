import { IPlayer } from "./player.service";

export class Player {
  playerID: number;
  playerName: string;
  firstName: string;
  lastName: string;
  teamAbbr: string;
  birthDate: string;
  experience: number;
  position: string;
  weight: number;
  height: string;
  college: string;
  photoURL: string;
  age: number;
  
  constructor(id: number, playerName: string, firstName: string, lastName: string, teamAbbr: string, birthdate: string, experience: number,
    position: string, weight: number, height: string, college: string, photoURL: string, age: number) {
    this.playerID = id;
    this.playerName = playerName;
    this.firstName = firstName;
    this.lastName = lastName;
    this.teamAbbr = teamAbbr;
    this.birthDate = birthdate;
    this.experience = experience;
    this.position = position;
    this.weight = weight;
    this.height = height;
    this.college = college;
    this.photoURL = photoURL;
    this.age = age;
  }
}
