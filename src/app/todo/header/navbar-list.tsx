export default function Navbar() {
  return (
    <nav>
      <NavbarList />
    </nav>
  );
}
function NavbarList() {
  const navList = [
    {
      text: "Home",
      path: "/home",
    },
    {
      text: "Products",
      path: "/products",
    },
  ];
  return (
    <ul>
      {navList.map((item) => {
        return ( 
          <li>
            <a href={item.path}> {item.text} </a>
          </li>
        );
      })}
    </ul>
  );
}
