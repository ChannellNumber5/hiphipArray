import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
    {
        users {
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

export const QUERY_USER = gql`
    query getOneUser($userId: ID!)
    {
        user(_id: $userId) {
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
        skills(_id: $skill) {
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

export const QUERY_PROJECT= gql`
    query getOneProject($projectId: ID!) {
        project(_id: $projectId) {
            _id
            projectName
            description
            skills {
                _id
                skillName
            }
            teammates {
                _id
                username
            }
        }
    }
`;

export const QUERY_ME = gql`
    query me {
        me {
            _id
            username
            skills {
				_id
                skillName
			}
            projects {
                _id
                projectName
            }
        }
    }
`;