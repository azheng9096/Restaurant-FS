import { useEffect, useState } from "react";
import SimpleNavbar from "../components/SimpleNavbar";
import EditDishItem from "../components/EditDishItem";

const ManageMenu = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const fetchMenuItems = async () => {
      const response = await fetch("/api/menu");
      const json = await response.json();

      if (response.ok) {
        setMenuItems(json);
      }
    };

    fetchMenuItems();
  }, []);

  return (
    <>
      <SimpleNavbar headerName="Manage Menu" />
      <div className="menu-items-container">
        {menuItems && menuItems.map((item) => <EditDishItem />)}
      </div>
    </>
  );
};

export default ManageMenu;
