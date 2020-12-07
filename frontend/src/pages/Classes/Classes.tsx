import React from "react";
import { connect } from "react-redux";
import { State } from "../../reducers/rootReducer";
import Class from "../../components/Class/Class";
import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles({
  flex: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
    height: "100vh",
    // width: "1000px",
    marginTop: "100px",
    marginLeft: "200px",
  },
});

function Classes({ classes }: any) {
  const classess = styles();
  return (
    <div className={classess.flex}>
      {classes.map((elem: any) => {
        console.log(elem);
        return <Class color={elem} key={elem} />;
      })}
    </div>
  );
}

const mapStateToProps = (state: State) => {
  return {
    classes: state.classes,
  };
};

export default connect(mapStateToProps)(Classes);
