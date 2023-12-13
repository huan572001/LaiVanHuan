const routerLinks = (name) => {
  const array = {
    Home: "/home",
    Dashboard: "/",
  };
  return array[name];
};
export default routerLinks;
