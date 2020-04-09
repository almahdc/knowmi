const menuItems = [
  {
    name: "HOME",
    path: {pathName: "/"},
    isPublic: false,
    isPrivate: true
  },
  {
    name: "LOGOUT",
    path: {pathName: "/logout"},
    isPublic: false,
    isPrivate: true
  },
  {
    name: "LOGIN",
    path: {pathName: "/auth"},
    isPublic: true,
    isPrivate: false
  },
  {
    name: "MY PROJECTS",
    path: {pathName: "/myprojects", hash: "#myprojects"},
    isPublic: false,
    isPrivate: true
  }
];

export default menuItems;
