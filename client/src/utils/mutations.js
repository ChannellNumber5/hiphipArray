import { gql } from '@apollo/client';

export const LOGIN = gql`
    mutation login($email:  String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
            }
        }
    }
`;

export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!, $description: String!, $skills:[ID]) {
        addUser(username: $username, email: $email, password:$password, description: $description, skills:$skills) {
            token
            user {
                _id
            }
        }
    }
`;

export const ADD_SKILL = gql`
    mutation addSkill($skills: [Skill]) {
        addSkill(skills: $skills) {
            skillName
            description
        }
    }
`;

export const ADD_PROJECT = gql`
    mutation addProject($projects:[Project]) {
        addProject(projects: $projects) {
            projectName
            description
            organizer {
                _id
            }
            skills {
                skillName
                description
            }
        }
    }
`;