/*
  container for Detail modal to display recipe information
*/

// react
import React, { useEffect, useState } from 'react';

// redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { RecipeActions } from '../../Redux/recipe';

// components
import RecipeDetail from './RecipeDetail';

const RecipeDetailContainer = props => {
  const {
    isAuthenticated,
    match,
    history,
    getRecipeDetails,
    cleanUp,
    incrementLike,
    incrementBook,
    updateRecipeRating
  } = props;

  // make useEffect simulates componentDidMount (only exe once)
  const [mounted, setMounted] = useState(false);

  // determine if the modal should be closed
  const [showModal, setShowModal] = useState(true);

  // componentDidMount, fetch details once
  useEffect(() => {
    if (!mounted) {
      // _id is in params
      console.log(match.params);
      setMounted(true);
      getRecipeDetails(match.params);
    }
  }, [match, mounted, getRecipeDetails]);

  // history go back
  // timeout 200 for animation finish
  const handleBack = () => {
    setShowModal(false);
    setTimeout(() => {
      history.push('/recipes');
    }, 200);
  };

  // clean up on unmount
  useEffect(() => {
    return () => {
      cleanUp();
    };
  }, [cleanUp]);

  // if not authenticated, redirect
  const checkAuthentication = () => {
    if (!isAuthenticated) {
      history.push('/signin');
    }
  };

  const handleLikeAction = () => {
    checkAuthentication();
    incrementLike();
  };

  const handleBookAction = () => {
    checkAuthentication();
    incrementBook();
  };

  const handleRateAction = newRating => {
    checkAuthentication();
    updateRecipeRating(newRating);
  };

  return (
    <RecipeDetail
      handleLikeAction={handleLikeAction}
      handleBookAction={handleBookAction}
      handleRateAction={handleRateAction}
      showModal={showModal}
      handleBack={handleBack}
      {...props}
    />
  );
};

const mapStateToProps = state => {
  return {
    loading: state.Recipe.loading,
    error: state.Recipe.error,
    recipeDetails: state.Recipe.recipeDetails,
    isAuthenticated: state.Auth.isAuthenticated,
    message: state.Recipe.message
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      updateRecipeRating: RecipeActions.updateRecipeRating,
      incrementBook: RecipeActions.incrementBook,
      incrementLike: RecipeActions.incrementLike,
      getRecipeDetails: RecipeActions.fetchRecipeDetails,
      cleanUp: RecipeActions.cleanUp
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipeDetailContainer);