interface ILoginUser {
  username: string;
  password: string;
}

const login = (potentialUser: ILoginUser): boolean => {
  potentialUser.username;
  return true;
}

const someUser = {
  username: 'jstamos',
  password: '1234',
  moreStuff: 'cool things'
}

login(someUser);
