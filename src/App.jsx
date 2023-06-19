//layouts
import AntDivider from "./layouts/divider";
import AntGrid from "./layouts/grid";
import AntLayout from "./layouts/layout";

//components
import AntButton from "./components/button";
import AntTypography from "./components/typography";

//navigation
import AntAnchor from "./navigation/anchor";
import AntBreadCrumb from "./navigation/breadCrumb";
import AntDropdown from "./navigation/dropdown";
// import AntMenu from "./navigation/menuLikeNavbar";
import AntMenu from "./navigation/menuLikeSidebar";

// import "./App.css";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      {/* ----------LAYOUTS---------- */}

      {/* <AntDivider /> */}
      {/* <AntGrid /> */}
      {/* <AntLayout /> */}

      {/* ----------NAVIGATION---------- */}

      {/* <AntAnchor /> */}
      {/* <AntBreadCrumb /> */}
      {/* <AntDropdown /> */}
      {/* <AntMenu /> */}

      {/* ----------COMPONENTS---------- */}

      {/* <AntButton /> */}
      {/* <AntTypography /> */}
    </div>
  );
}

export default App;
