// Run with: npm run db:seed
// Creates one admin account, one couple account, and one sample
// wedding so you can log in and see the whole system working.
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const adminPassword = await bcrypt.hash("admin123", 10);
  const admin = await prisma.user.upsert({
    where: { email: "admin@claireinvitestudio.com" },
    update: {},
    create: { email: "admin@claireinvitestudio.com", passwordHash: adminPassword, name: "Claire", role: "ADMIN" },
  });

  const couplePassword = await bcrypt.hash("couple123", 10);
  const couple = await prisma.user.upsert({
    where: { email: "margot@example.com" },
    update: {},
    create: { email: "margot@example.com", passwordHash: couplePassword, name: "Margot", role: "COUPLE" },
  });

  const wedding = await prisma.wedding.upsert({
    where: { slug: "margot-and-julian" },
    update: {},
    create: {
      slug: "margot-and-julian",
      partner1Name: "Margot",
      partner2Name: "Julian",
      weddingDate: new Date("2026-10-04T15:30:00"),
      venueName: "Longview Gardens",
      venueAddress: "412 Magnolia Rd, Nashville, TN",
      storyText: "We met over a spilled coffee in 2017 and never quite stopped talking.",
      dressCode: "Garden formal",
      monogramLine: "Together with their families",
      contactEmail: "margotandjulian@email.com",
      published: true,
      ownerId: couple.id,
      scheduleItems: {
        create: [
          { time: "3:30 PM", title: "Ceremony", location: "Main Lawn", sortOrder: 0 },
          { time: "4:30 PM", title: "Cocktail Hour", location: "The Conservatory", sortOrder: 1 },
          { time: "6:00 PM", title: "Reception & Dinner", location: "The Ballroom", sortOrder: 2 },
        ],
      },
    },
  });

  console.log("Seeded:", { admin: admin.email, couple: couple.email, wedding: wedding.slug });
}

main().finally(() => prisma.$disconnect());
