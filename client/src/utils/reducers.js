import { useReducer } from "react";
import {
  ADD_SKILL_TO_USER,
  ADD_MULTIPLE_SKILLS_TO_USER,
  REMOVE_SKILL_FROM_USER,
  UPDATE_SKILL_OF_USER,
  ADD_SKILL_TO_PROJECT,
  ADD_MULTIPLE_SKILLS_TO_PROJECT,
  REMOVE_SKILL_FROM_PROJECT,
  UPDATE_SKILL_FOR_PROJECT,
} from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    // Users
    case ADD_SKILL_TO_USER:
      return {
        ...state,
        cartOpen: true,
        cart: [...state.cart, action.skill],
      };

    case ADD_MULTIPLE_SKILLS_TO_USER:
      return {
        ...state,
        cart: [...state.cart, ...action.skills],
      };

    case REMOVE_SKILL_FROM_USER:
      let newUserState = state.cart.filter((skill) => {
        return skill._id !== action._id;
      });
      return {
        ...state,
        cartOpen: newUserState.length > 0,
        cart: newUserState,
      };

    case UPDATE_SKILL_OF_USER:
      return {
        ...state,
        skills: [...action.skills],
      };

    // Projects

    case ADD_SKILL_TO_PROJECT:
      return {
        ...state,
        cartOpen: true,
        cart: [...state.cart, action.skill],
      };
    case ADD_MULTIPLE_SKILLS_TO_PROJECT:
      return {
        ...state,
        cart: [...state.cart, ...action.skill],
      };

      case REMOVE_SKILL_FROM_PROJECT:
        let newProjectState = state.cart.filter((skill) => {
          return skill._id !== action._id;
        });
        return {
          ...state,
          cartOpen: newProjectState.length > 0,
          cart: newProjectState,
        };
  
      case UPDATE_SKILL_FOR_PROJECT:
        return {
          ...state,
          skills: [...action.skills],
        };
  }
};

export function useSkillReducer(initialState) {
    return useReducer(reducer, initialState);
  }
  