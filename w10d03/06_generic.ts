interface IContainer<T, V> {
  name: string;
  contents: T;
  moreThings?: V[];
}

const stringContainer: IContainer<string, number> = {
  name: 'string container',
  contents: '8'
};

const numberContainer: IContainer<number, number> = {
  name: 'number container',
  contents: 42
}
