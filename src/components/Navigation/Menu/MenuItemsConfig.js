const menuItems = [
  {
    name: "HOME",
    path: {pathName: "/"},
    isPublic: false,
    isPrivate: true
  },
  {
    name: "PROJECTS",
    path: {pathName: "/myprojects", hash: "#myprojects"},
    isPublic: true,
    isPrivate: true
  },
  {
    name: "MY BLOG",
    path: {pathName: "/myblog"},
    isPublic: false,
    isPrivate: false
  },
  {
    name: "TODO LIST",
    path: {pathName: "/todolist"},
    isPublic: true,
    isPrivate: true
  },
  {
    name: "MAP",
    path: {pathName: "/todolist"},
    isPublic: false,
    isPrivate: false
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
  }
];

export default menuItems;
