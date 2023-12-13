const users = [
  {
    userName: "knuth",
    firstName: "Donald",
    lastName: "Knuth",
    likes: [],
  },
  {
    userName: "norvig",
    likes: ["AI", "Search", "NASA", "Mars"],
  },
  {
    userName: "mfowler",
    firstName: "Martin",
    likes: ["Design Patterns", "Refactoring"],
  },
  {
    userName: "kent",
    firstName: "Kent",
    lastName: "Beck",
    likes: ["TDD", "wikis", "Design Patterns"],
  },
];

const lookup = (userName, property) => {
  const user = users.find((user) => user.userName === userName);

  if (!user) {
    throw new Error("Could not find user");
  }

  if (!user[property]) {
    throw new Error("Could not find property");
  }

  return user[property];
};

describe('lookup', () => {
  it('should return the user object', () => {
    const userName = 'knuth';
    const expectedUser = users.find((user) => user.userName === userName);
    expect(lookup(userName, 'firstName')).toEqual(expectedUser.firstName);
  });

  it('should return undefined if the user is not found', () => {
    const userName = 'non-existent';
    const expectedResult = "Could not find user";
    expect(() => lookup(userName, 'firstName')).toThrowError(expectedResult);
  });

  it('should throw an error if the property does not exist in the user object', () => {
    const userName = 'knuth';
    const expectedError = new Error("Could not find property");
    expect(() => lookup(userName, 'nonexistentProperty')).toThrowError(expectedError);
  });
});