import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const addTeam = async (team_member, role, image) => {
  const newTeam = await prisma.team.create({
    data: {
      team_member,
      role,
      image,
    },
  });
  return newTeam;
};

export const getById = async (id) => {
  const team = await prisma.team.findUnique({
    where: { id: id },
  });
  return team;
};

export const getAllTeams = async () => {
  const teams = await prisma.team.findMany({
    orderBy: {
      role: "asc",
    },
  });
  return teams;
};

export const editTeam = async (teamId, team_member, role, image) => {
  const updatedTeam = await prisma.team.update({
    where: {
      id: teamId,
    },
    data: {
      team_member,
      role,
      image,
    },
  });

  return updatedTeam;
};

export const deleteTeam = async (id) => {
  const removeTeam = await prisma.team.delete({
    where: {
      id: id,
    },
  });

  return removeTeam;
};
