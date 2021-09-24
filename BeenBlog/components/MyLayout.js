import Header from "./Header";

const layoutStyle = {
  margin: 10,
  padding: 30,
  border: "2px solid #DDD",
  color: "#111",
  background: "#FFF",
};

const Layout = (props) => (
  <div style={layoutStyle}>
    <Header />
    {props.children}
  </div>
);

export default Layout;
