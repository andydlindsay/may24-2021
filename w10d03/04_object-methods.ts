interface IDog {
  name: string;
  toys: string[];
  addToy: (newToy: string) => boolean
}

const goldie: IDog = {
  name: 'Goldie',
  toys: [],
  addToy: (newToy: string) => {
    return true;
  }
}