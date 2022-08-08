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

export const UPDATE_USER = gql`
    mutation updateUser($username: String!, $email: String!, $password: String!, $description: String!, $skills:[ID], $projects:[ID]) {
        updateUser(username: $username, email: $email, password:$password, description: $description, skills:$skills, projects:$projects) {
            token
            user {
                _id
            }
        }
    }
`;

export const ADD_SKILL = gql`
    mutation addSkill($skillName: String!, description: String!) {
        addSkill(skillName: $skillName, description: $description) {
            skillName
            description
        }
    }
`;

export const REMOVE_SKILL = gql`
    mutation removeSkill($skillId: ID!) {
        removeSkill(_id: $skillId) {
            skillName
            description
        }
    }
`;

export const ADD_PROJECT = gql`
    mutation addProject($projectName: String!, $description: String!, $teamLead: String!) {
        addProject(projectName: $projectName, description: $description, teamLead: $teamLead) {
            projectName
            description
            teamLead {
                _id
            }
            skills {
                skillName
                description
            }
        }
    }
`;

export const REMOVE_PROJECT = gql`
    mutation removeProject($projectId:ID!) {
        removeProject(_id: $projectID) {
            projectName
            description
        }
    }
`;

export const UPDATE_PROJECT = gql`
    mutation updateProject($projectName: String!, $description: String!, $teamLead: String!, $neededSkills:[Skill], $teammates:[User]) {
        updateProject(projectName: $projectName, description: $description, teamLead: $teamLead, neededSkills: $neededSkills, teammates:$teammates) {
            projectName
            description
            teamLead {
                _id
                username
            }
            neededSkills {
                skillName
                description
            }
            teammates {
                usernames
                skills {
                    skillName
                }
            }
        }
    }
`;