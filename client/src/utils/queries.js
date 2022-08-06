import { gql } from '@apollo/client';

export const QUERY_USER = gql`
    {
        user {
            username
            skills{
                skillName
                description
            }
            projects {
                projectName
                description
                skills {
                    skillName
                }
                teammates {
                    username
                    skills {
                        skillName
                    }
                }
            }
        }
    }
`;

export const QUERY_ALL_SKILLS = gql`
    {
        skills {
            _id
            skillName
            description
            users {
                _id
                username
            }
        }
    }
`;

export const QUERY_USERS_BY_SKILLS = gql`
    query getUsersBySkill($skill: ID) {
        skills(skill: $skill) {
            users
        }
    }
`;

export const QUERY_PROJECTS= gql`
    {
        projects {
            _id
            projectName
            description
            skills {
                _id
                skillName
            }
        }
    }
`;