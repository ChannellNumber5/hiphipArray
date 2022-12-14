import { gql } from "@apollo/client";

export const QUERY_USERS = gql`
    query allUsers{
    users {
      _id
      username
      description
      skills {
        _id
        skillName
      }
    }
  }
`;

export const QUERY_USER = gql`
  query getOneUser($userId: ID!) {
    user(_id: $userId) {
      username
      email
      skills {
        _id
        skillName
        description
      }
      projects {
        projectName
        description
        skills {
          _id
          skillName
        }
        teammates {
          username
          skills {
            _id
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

export const QUERY_SKILLS_AND_USER = gql`
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

         me {
          username
          description
            skills {
            _id
            skillName
            }
        }
    }
`;

export const QUERY_USERS_BY_SKILLS = gql`
  query getUsersBySkill($skill: ID) {
    skills(_id: $skill) {
      users {
        _id
        username
      }
    }
  }
`;


export const QUERY_USERS_AND_PROJECTS = gql`
  {
    projects {
      _id
      projectName
      description
      teamLead {
        _id
        username
      }
      neededSkills {
        _id
        skillName
      }
      teammates {
        _id
        username
        skills {
          _id
          skillName
        }
      }
    }
    
    users {
      _id
      username
      description
      skills {
        _id
        skillName
      }
    }
  }
`;

export const QUERY_PROJECTS = gql`
  {
    projects {
      _id
      projectName
      description
      teamLead {
        _id
        username
      }
      neededSkills {
        _id
        skillName
      }
      teammates {
        _id
        username
        skills {
          _id
          skillName
        }
      }
    }
  }
`;

export const QUERY_USER_AND_PROJECTS = gql`
  query getUserProjects($userId: ID!) {
    project(teamLead: $userId) {
      _id
      projectName
      description
      neededSkills {
        _id
        skillName
      }
      teammates {
        _id
        username
        skills {
          _id
          skillName
        }
      }
    }
  }
`;

export const QUERY_PROJECT = gql`
  query getOneProject($projectId: ID!) {
    project(_id: $projectId) {
      _id
      projectName
      description
      teamLead
      neededSkills {
        _id
        skillName
      }
      teammates {
        _id
        username
        skills {
          _id
          skillName
        }
      }
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
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
