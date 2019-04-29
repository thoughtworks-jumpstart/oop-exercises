const Agent = require("../Agent");
const TeamLead = require("../TeamLead");
const Manager = require("../Manager");
const Rank = require("../Rank");

describe("Employee", () => {
  test("should create an Agent", () => {
    const agent1 = new Agent();

    expect(agent1.getRank()).toEqual(Rank.Agent);
  });

  test("should create a TeamLead", () => {
    const teamlead1 = new TeamLead();

    expect(teamlead1.getRank()).toEqual(Rank.TeaamLead);
  });

  test("should create an Manager", () => {
    const manager1 = new Manager();

    expect(manager1.getRank()).toEqual(Rank.Manager);
  });
});
