import React from 'react'
import RecipeReviewCard from './DashbordCard'
import { connect } from "react-redux";
import { State } from '../../reducers/rootReducer';


function Dashboard({ post }: any) {
  return (
    <div>{
      post.map((el: any, i: any) => (
        <RecipeReviewCard data={el} key={i} />
      )
      )
    }
    </div>
  )
}

const mapStateToProps = (state: State) => {
  return { post: state.post };
};

export default connect(mapStateToProps)(Dashboard);