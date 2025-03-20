/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect, useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import HomeIcon from "@mui/icons-material/Home";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { clearLocalStorage, getLocalStorage } from "@/utils/Localstoragefunc";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import PeopleIcon from "@mui/icons-material/People";
import AddBoxIcon from "@mui/icons-material/AddBox";
import ListAltIcon from "@mui/icons-material/ListAlt";
import EditNoteIcon from "@mui/icons-material/EditNote";
import LogoutIcon from "@mui/icons-material/Logout";
import { EditIcon, GroupIcon, InfoIcon } from "lucide-react";
const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar)(({ theme, open }) => ({
  // backgroundColor: "black",------------@change uncomment if you want previous
  backgroundColor: "text-blue-600",
  color: "white",
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer)(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open
    ? { ...openedMixin(theme), "& .MuiDrawer-paper": openedMixin(theme) }
    : { ...closedMixin(theme), "& .MuiDrawer-paper": closedMixin(theme) }),
}));

const BookLayout = ({ children }) => {
  const theme = useTheme();
  const pathname = usePathname();
  const router = useRouter(); // Router for navigation
  const [open, setOpen] = useState(true);
  const [adminId, setAdminId] = useState("");
  const [userRole, setUserRole] = useState("");
  const admin = useSelector((state) => state.admin);
  const id = admin?.adminData?.data?.id;
  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  // Function to check if auth data exists
  const checkAuth = () => {
    const authData = JSON.parse(localStorage.getItem("authData"));
    if (!authData?.token || !authData?.authType) {
      router.push("/adminlogin"); // Redirect to login page if auth data is missing
    } else {
      setUserRole(authData.authType);
    }
  };

  useEffect(() => {
    checkAuth(); // Initial check on mount
    const authData = getLocalStorage("authData");
    setAdminId(authData.id);
    // Listen for storage changes (for other tabs)
    const handleStorageChange = () => {
      checkAuth();
    };
    window.addEventListener("storage", handleStorageChange);

    // Check every second (for same tab)
    const interval = setInterval(() => {
      checkAuth();
    }, 1000);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      clearInterval(interval);
    };
  }, []);
  // Define all navigation options
  const handleLogout = () => {
    clearLocalStorage("authData");
  };
  const allNavOptions = [
    {
      id: "1",
      label: "Dashboard",
      href: "/admin/dashboard",
      icon: <HomeIcon />, // Represents the home or overview page
    },
    {
      id: "2",
      label: "Add Admin",
      href: "/admin/add-admin",
      icon: <PersonAddIcon />, // Represents adding a new admin user
    },
    {
      id: "3",
      label: "Manage Admins",
      href: "/admin/manageadmins",
      icon: <PeopleIcon />, // Represents managing multiple admin users
    },
    {
      id: "4",
      label: "Add Editor",
      href: "/admin/add-editor",
      icon: <EditIcon />, // Represents adding an editor (related to content editing)
    },
    {
      id: "5",
      label: "Manage Editors",
      href: "/admin/manage-editors",
      icon: <GroupIcon />, // Represents managing a group of editors
    },
    // { id: "6", label: "Add Blog", href: "/admin/add-blog", icon: <InfoIcon /> },
    {
      id: "7",
      label: "Blog Categories",
      href: "/admin/categories",
      icon: <InfoIcon />,
    },
    {
      id: "8",
      label: "Add Blog",
      href: "/admin/add-blog",
      icon: <AddBoxIcon />, // Represents adding a new blog post
    },
    {
      id: "9",
      label: "Manage Blogs",
      href: "/admin/manage-blogs",
      icon: <EditNoteIcon />, // Represents managing and editing blog content
    },
    {
      id: "10",
      label: "All Blogs",
      href: "/admin/all-blog",
      icon: <ListAltIcon />, // Represents a list or overview of all blogs
    },
    {
      id: "11",
      label: "Log Out",
      href: "#",
      icon: <LogoutIcon />, // Represents logging out of the system
      fn: handleLogout,
    },
  ];
  const navOptions = (() => {
    if (userRole === "editor") {
      return allNavOptions.filter((item) =>
        [
          "Dashboard",
          "Manage Blogs",
          "Blog Categories",
          "Add Blog",
          "All Blogs",
          "Log Out",
        ].includes(item.label)
      );
    }

    if (userRole === "admin") {
      return allNavOptions.filter((item) => {
        if (adminId === "admin") {
          return [
            "Dashboard",
            "Add Editor",
            "Manage Editors",
            "Add Admin",
            "Manage Admins",
            "Blog Categories",
            "All Blogs",
            "Log Out",
          ].includes(item.label);
        }
        return allNavOptions;
      });
    }

    return []; // Default case: No options
  })();
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            onClick={handleDrawerToggle}
            edge="start"
            sx={{ marginRight: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Hi {userRole}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerToggle}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {navOptions.map((item) => {
            const isActive = pathname.startsWith(item.href);

            return (
              <Link key={item.id} href={item.href} passHref legacyBehavior>
                <ListItem disablePadding className="px-2 py-0.5">
                  <ListItemButton
                    onClick={() => {
                      if (item.label === "Log Out") {
                        handleLogout();
                      }
                    }}
                    key={item.id}
                    selected={pathname === item.href}
                    component={Link} // Ensures it works as a Next.js Link
                    href={item.href}
                    sx={{
                      minHeight: 48,
                      px: 2.5,
                      borderRadius: "10px",
                      transition: "background-color 0.3s ease, color 0.3s ease",
                      backgroundColor:
                        pathname === item.href ? "blue" : "inherit", //@chang  the color if you want  blue to what ever
                      color: pathname === item.href ? "white" : "black",
                      "&.Mui-selected": {
                        backgroundColor: "blue !important", // Override MUI default @change if you want
                        color: "white !important",
                      },
                      "&:hover": {
                        backgroundColor: "blue", //@change into black if you want from blue
                        color: "white",
                        "& .MuiListItemIcon-root": {
                          color: "white",
                        },
                      },
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        justifyContent: "center",
                        mr: 2,
                        color:
                          pathname === item.href ? "white" : "text-blue-600", //@change black if you dont need the blue on active tab
                      }}
                    >
                      {item.icon}
                    </ListItemIcon>
                    <Typography>{item.label}</Typography>
                  </ListItemButton>
                </ListItem>
              </Link>
            );
          })}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1 }}>
        <DrawerHeader />
        {children}
      </Box>
    </Box>
  );
};

export default BookLayout;

// "use client";
// import React, { useEffect, useState } from "react";
// import { styled, useTheme } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import MuiDrawer from "@mui/material/Drawer";
// import MuiAppBar from "@mui/material/AppBar";
// import Toolbar from "@mui/material/Toolbar";
// import List from "@mui/material/List";
// import CssBaseline from "@mui/material/CssBaseline";
// import Typography from "@mui/material/Typography";
// import Divider from "@mui/material/Divider";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
// import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
// import ChevronRightIcon from "@mui/icons-material/ChevronRight";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import HomeIcon from "@mui/icons-material/Home";
// import Link from "next/link";
// import { usePathname, useRouter } from "next/navigation";
// import { useDispatch, useSelector } from "react-redux";
// import { clearLocalStorage, getLocalStorage } from "@/utils/Localstoragefunc";
// import PersonAddIcon from "@mui/icons-material/PersonAdd";
// import PeopleIcon from "@mui/icons-material/People";
// import AddBoxIcon from "@mui/icons-material/AddBox";
// import ListAltIcon from "@mui/icons-material/ListAlt";
// import EditNoteIcon from "@mui/icons-material/EditNote";
// import LogoutIcon from "@mui/icons-material/Logout";
// import { EditIcon, GroupIcon, InfoIcon } from "lucide-react";
// import {
//   getAllBlogsAction,
//   getLatestBlogAction,
// } from "@/store/slices/BlogSlice";
// import { getAllEditorAction } from "@/store/slices/EditorSlice";
// import { getAllAdminAction } from "@/store/slices/ManageAdminSlice";
// import { AccountBalance } from "@mui/icons-material";

// const drawerWidth = 240;

// const openedMixin = (theme) => ({
//   width: drawerWidth,
//   transition: theme.transitions.create("width", {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.enteringScreen,
//   }),
//   overflowX: "hidden",
// });

// const closedMixin = (theme) => ({
//   transition: theme.transitions.create("width", {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   overflowX: "hidden",
//   width: `calc(${theme.spacing(7)} + 1px)`,
//   [theme.breakpoints.up("sm")]: {
//     width: `calc(${theme.spacing(8)} + 1px)`,
//   },
// });

// const DrawerHeader = styled("div")(({ theme }) => ({
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "flex-end",
//   padding: theme.spacing(0, 1),
//   ...theme.mixins.toolbar,
// }));

// const AppBar = styled(MuiAppBar)(({ theme, open }) => ({
//   backgroundColor: "black",
//   color: "white",
//   zIndex: theme.zIndex.drawer + 1,
//   transition: theme.transitions.create(["width", "margin"], {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   ...(open && {
//     marginLeft: drawerWidth,
//     width: `calc(100% - ${drawerWidth}px)`,
//     transition: theme.transitions.create(["width", "margin"], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   }),
// }));

// const Drawer = styled(MuiDrawer)(({ theme, open }) => ({
//   width: drawerWidth,
//   flexShrink: 0,
//   whiteSpace: "nowrap",
//   boxSizing: "border-box",
//   ...(open
//     ? { ...openedMixin(theme), "& .MuiDrawer-paper": openedMixin(theme) }
//     : { ...closedMixin(theme), "& .MuiDrawer-paper": closedMixin(theme) }),
// }));

// const BookLayout = ({ children }) => {
//   const theme = useTheme();
//   const pathname = usePathname();
//   const router = useRouter();
//   const dispatch = useDispatch();
//   const [open, setOpen] = useState(true);
//   const [adminId, setAdminId] = useState("");
//   const [userRole, setUserRole] = useState("");

//   const { blogsData, latestBlogData } = useSelector((state) => state.blog);
//   const { TotalAdminData } = useSelector((state) => state.adminData);
//   const { editorData } = useSelector((state) => state.editorData);
//   const authData = getLocalStorage("authData");
//   const handleDrawerToggle = () => {
//     setOpen(!open);
//   };

//   const checkAuth = () => {
//     const authData = JSON.parse(localStorage.getItem("authData"));
//     if (!authData?.token || !authData?.authType) {
//       router.push("/adminlogin");
//     } else {
//       setUserRole(authData.authType);
//       setAdminId(authData?.id);
//     }
//   };

//   useEffect(() => {
//     checkAuth();
//     const authData = getLocalStorage("authData");

//     // Safely check length only if the data is an array
//     if (!Array.isArray(blogsData) || blogsData.length === 0)
//       dispatch(getAllBlogsAction());
//     if (!Array.isArray(TotalAdminData) || TotalAdminData.length === 0)
//       dispatch(getAllAdminAction());
//     if (!Array.isArray(editorData) || editorData.length === 0)
//       dispatch(getAllEditorAction());
//     if (!Array.isArray(latestBlogData) || latestBlogData.length === 0)
//       dispatch(getLatestBlogAction());

//     const handleStorageChange = () => {
//       checkAuth();
//     };
//     window.addEventListener("storage", handleStorageChange);

//     const interval = setInterval(() => {
//       checkAuth();
//     }, 1000);

//     return () => {
//       window.removeEventListener("storage", handleStorageChange);
//       clearInterval(interval);
//     };
//   }, [dispatch, blogsData, TotalAdminData, editorData, latestBlogData]);

//   const handleLogout = () => {
//     clearLocalStorage("authData");
//     router.push("/adminlogin");
//   };

//   const allNavOptions = [
//     {
//       id: "1",
//       label: "Dashboard",
//       href: "/admin/dashboard",
//       icon: <HomeIcon />,
//     },
//     {
//       id: "2",
//       label: "Add Admin",
//       href: "/admin/add-admin",
//       icon: <PersonAddIcon />,
//     },
//     {
//       id: "3",
//       label: "Manage Admins",
//       href: "/admin/manageadmins",
//       icon: <PeopleIcon />,
//     },
//     {
//       id: "4",
//       label: "Add Editor",
//       href: "/admin/add-editor",
//       icon: <EditIcon />,
//     },
//     {
//       id: "5",
//       label: "Manage Editors",
//       href: "/admin/manage-editors",
//       icon: <GroupIcon />,
//     },
//     {
//       id: "6",
//       label: "Blog Categories",
//       href: "/admin/categories",
//       icon: <InfoIcon />,
//     },
//     {
//       id: "7",
//       label: "Add Blog",
//       href: "/admin/add-blog",
//       icon: <AddBoxIcon />,
//     },
//     {
//       id: "8",
//       label: "Manage Blogs",
//       href: "/admin/manage-blogs",
//       icon: <EditNoteIcon />,
//     },
//     {
//       id: "9",
//       label: "All Blogs",
//       href: "/admin/all-blog",
//       icon: <ListAltIcon />,
//     },
//     {
//       id: "10",
//       label: "Profile",
//       href: "/admin/profile",
//       icon: <AccountBalance />, // Placeholder icon for Profile
//     },
//     {
//       id: "11",
//       label: "Log Out",
//       href: "#",
//       icon: <LogoutIcon />,
//       fn: handleLogout,
//     },
//   ];

//   const navOptions = (() => {
//     const adminId = authData?.id || ""; // Specific admin ID (adjust as needed)

//     if (userRole === "admin") {
//       if (adminId === "admin") {
//         return allNavOptions; // Admin with specific ID sees all options, including Profile
//       }
//       // Admin with different ID sees all options except Profile
//       return allNavOptions.filter((item) => item.label !== "Profile");
//     }
//     if (userRole === "editor") {
//       return allNavOptions.filter((item) =>
//         [
//           "Dashboard",
//           "Manage Blogs",
//           "Blog Categories",
//           "Add Blog",
//           "All Blogs",
//           "Log Out",
//         ].includes(item.label)
//       );
//     }
//     return []; // Default case for unrecognized roles
//   })();
//   return (
//     <Box sx={{ display: "flex" }}>
//       <CssBaseline />
//       <AppBar position="fixed" open={open}>
//         <Toolbar>
//           <IconButton
//             color="inherit"
//             onClick={handleDrawerToggle}
//             edge="start"
//             sx={{ marginRight: 2 }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" noWrap>
//             Hi {userRole}
//           </Typography>
//         </Toolbar>
//       </AppBar>
//       <Drawer variant="permanent" open={open}>
//         <DrawerHeader>
//           <IconButton onClick={handleDrawerToggle}>
//             {theme.direction === "rtl" ? (
//               <ChevronRightIcon />
//             ) : (
//               <ChevronLeftIcon />
//             )}
//           </IconButton>
//         </DrawerHeader>
//         <Divider />
//         <List>
//           {navOptions.map((item) => (
//             <Link key={item.id} href={item.href} passHref legacyBehavior>
//               <ListItem disablePadding className="px-2 py-0.5">
//                 <ListItemButton
//                   onClick={() => {
//                     if (item.fn) item.fn();
//                   }}
//                   selected={pathname === item.href}
//                   sx={{
//                     minHeight: 48,
//                     px: 2.5,
//                     borderRadius: "10px",
//                     transition: "background-color 0.3s ease, color 0.3s ease",
//                     backgroundColor:
//                       pathname === item.href ? "black" : "inherit",
//                     color: pathname === item.href ? "white" : "black",
//                     "&.Mui-selected": {
//                       backgroundColor: "black !important",
//                       color: "white !important",
//                     },
//                     "&:hover": {
//                       backgroundColor: "black",
//                       color: "white",
//                       "& .MuiListItemIcon-root": { color: "white" },
//                     },
//                   }}
//                 >
//                   <ListItemIcon
//                     sx={{
//                       minWidth: 0,
//                       justifyContent: "center",
//                       mr: 2,
//                       color: pathname === item.href ? "white" : "black",
//                     }}
//                   >
//                     {item.icon}
//                   </ListItemIcon>
//                   <Typography>{item.label}</Typography>
//                 </ListItemButton>
//               </ListItem>
//             </Link>
//           ))}
//         </List>
//       </Drawer>
//       <Box component="main" sx={{ flexGrow: 1 }}>
//         <DrawerHeader />
//         {children}
//       </Box>
//     </Box>
//   );
// };

// export default BookLayout;
