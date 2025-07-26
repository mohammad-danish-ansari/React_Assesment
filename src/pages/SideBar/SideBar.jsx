import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  Typography,
} from "@mui/material";
import {
  Home,
  Task,
  Mail,
  People,
  Inventory,
  ExpandLess,
  ExpandMore,
  Replay,
  ShoppingCart,
  PriceChange,
  Person,
  GroupAdd,
} from "@mui/icons-material";
import { useState } from "react";

const SideBar = () => {
  const [openInventory, setOpenInventory] = useState(false);
  const [openAllProduct, setOpenAllProduct] = useState(false);

  const toggleInventory = () => setOpenInventory(!openInventory);
  const toggleOpenAllProduct = () => setOpenAllProduct(!openAllProduct);

  const listTextStyle = { fontSize: "0.9rem", fontWeight: 300 };

  return (
    <Box
      sx={{
        width: 230,
        bgcolor: "#151521",
        color: "white",
        height: "100vh",
        p: 2,
      }}
    >
      <Typography variant="h6" fontWeight="bold" mb={3}>
        Company Logo
      </Typography>
      <List>
        <ListItemButton>
          <ListItemIcon sx={{
            color: "white",
            transition: "all 0.3s ease",
            "&:hover": {
              color: "#c86d13ff",
              transform: "scale(1.2)",
            },
          }}>
            <Home />
          </ListItemIcon>
          <ListItemText primary="Home" primaryTypographyProps={listTextStyle} />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon sx={{
            color: "white",
            transition: "all 0.3s ease",
            "&:hover": {
              color: "#c86d13ff",
              transform: "scale(1.2)",
            },
          }}>
            <Task />
          </ListItemIcon>
          <ListItemText primary="My Tasks" primaryTypographyProps={listTextStyle} />
          {openAllProduct ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon sx={{
            color: "white",
            transition: "all 0.3s ease",
            "&:hover": {
              color: "#c86d13ff",
              transform: "scale(1.2)",
            },
          }}>
            <Mail />
          </ListItemIcon>
          <ListItemText primary="Inbox" primaryTypographyProps={listTextStyle} />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon sx={{
            color: "white",
            transition: "all 0.3s ease",
            "&:hover": {
              color: "#c86d13ff",
              transform: "scale(1.2)",
            },
          }}>
            <People />
          </ListItemIcon>
          <ListItemText primary="Customer" primaryTypographyProps={listTextStyle} />
          {openAllProduct ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>

        {/* Inventory Section */}
        <ListItemButton onClick={toggleInventory}>
          <ListItemIcon sx={{
            color: "white",
            transition: "all 0.3s ease",
            "&:hover": {
              color: "#c86d13ff",
              transform: "scale(1.2)",
            },
          }}>
            <Inventory />
          </ListItemIcon>
          <ListItemText primary="Inventory" primaryTypographyProps={listTextStyle} />
          {openInventory ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>

        <Collapse in={openInventory} timeout="auto" unmountOnExit>
          <List component="div" disablePadding sx={{ pl: 4 }}>
            <ListItemButton>
              <ListItemText primary="Product Search" primaryTypographyProps={listTextStyle} />
            </ListItemButton>
            <ListItemButton>
              <ListItemText primary="New Product" primaryTypographyProps={listTextStyle} />
            </ListItemButton>
            <ListItemButton onClick={toggleOpenAllProduct}>
              <ListItemText primary="All Product" primaryTypographyProps={listTextStyle} />
              {openAllProduct ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
          </List>
        </Collapse>

        <Collapse in={openAllProduct} timeout="auto" unmountOnExit>
          <List component="div" disablePadding sx={{ pl: 6 }}>
            <ListItemButton>
              <ListItemText primary="Existing Product" primaryTypographyProps={listTextStyle} />
            </ListItemButton>
            <ListItemButton>
              <ListItemText primary="New Product" primaryTypographyProps={listTextStyle} />
            </ListItemButton>
          </List>
        </Collapse>

        <ListItemButton>
          <ListItemIcon sx={{
            color: "white",
            transition: "all 0.3s ease",
            "&:hover": {
              color: "#c86d13ff",
              transform: "scale(1.2)",
            },
          }}>
            <Replay />
          </ListItemIcon>
          <ListItemText primary="Follow ups" primaryTypographyProps={listTextStyle} />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon sx={{
            color: "white",
            transition: "all 0.3s ease",
            "&:hover": {
              color: "#c86d13ff",
              transform: "scale(1.2)",
            },
          }}>
            <ShoppingCart />
          </ListItemIcon>
          <ListItemText primary="Orders" primaryTypographyProps={listTextStyle} />
          {openAllProduct ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon sx={{
            color: "white",
            transition: "all 0.3s ease",
            "&:hover": {
              color: "#c86d13ff",
              transform: "scale(1.2)",
            },
          }}>
            <Inventory />
          </ListItemIcon>
          <ListItemText primary="Products" primaryTypographyProps={listTextStyle} />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon sx={{
            color: "white",
            transition: "all 0.3s ease",
            "&:hover": {
              color: "#c86d13ff",
              transform: "scale(1.2)",
            },
          }}>
            <PriceChange />
          </ListItemIcon>
          <ListItemText primary="Pricelist" primaryTypographyProps={listTextStyle} />
        </ListItemButton>

        {/* Newly added - User */}
        <ListItemButton>
          <ListItemIcon sx={{
            color: "white",
            transition: "all 0.3s ease",
            "&:hover": {
              color: "#c86d13ff",
              transform: "scale(1.2)",
            },
          }}>
            <Person />
          </ListItemIcon>
          <ListItemText primary="User" primaryTypographyProps={listTextStyle} />
        </ListItemButton>

        {/* Newly added - Leads */}
        <ListItemButton>
          <ListItemIcon sx={{
            color: "white",
            transition: "all 0.3s ease",
            "&:hover": {
              color: "#c86d13ff",
              transform: "scale(1.2)",
            },
          }}>
            <GroupAdd />
          </ListItemIcon>
          <ListItemText primary="Leads" primaryTypographyProps={listTextStyle} />
        </ListItemButton>
      </List>
    </Box>
  );
};

export default SideBar;
