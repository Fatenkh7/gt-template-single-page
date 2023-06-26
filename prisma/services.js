import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const addService = async (service, service_description, image) => {
  const service = await prisma.services.create({
    data: {
      service,
      service_description,
      image,
    },
  });
  return service;
};

export const getById = async (id) => {
  const service = await prisma.services.findUnique({
    where: { id: id },
  });
  return service;
};

export const getAllServices = async () => {
  const services = await prisma.services.findMany({
    orderBy: {
      service: "asc",
    },
  });
  return services;
};

export const editService = async (
  servicesId,
  service,
  service_description,
  image
) => {
  const updatedService = await prisma.services.update({
    where: {
      id: servicesId,
    },
    data: {
      service,
      service_description,
      image,
    },
  });

  return updatedService;
};

export const deleteService = async (id) => {
  const removeService = await prisma.services.delete({
    where: {
      id: id,
    },
  });

  return removeService;
};
