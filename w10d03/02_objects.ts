interface ICat {
  id?: number;
  name: string;
  likesTummyRubs: boolean;
}

const cat: ICat = {
  // id: 5,
  name: 'Mika',
  likesTummyRubs: true,
  // scratchesBugScreen: true
};

const cats: ICat[] = [];
cats.push(cat);

const newCat: ICat = {
  name: 'Molly'
} as ICat;
