const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcryptjs");

const prisma = new PrismaClient();

async function main() {
  const email = "claireinvitestudio@gmail.com";
  const password = process.env.ADMIN_PASSWORD;

  if (!password) {
    throw new Error("ADMIN_PASSWORD is missing.");
  }

  if (password.length < 8) {
    throw new Error("ADMIN_PASSWORD must be at least 8 characters.");
  }

  const passwordHash = await bcrypt.hash(password, 12);

  const admin = await prisma.user.upsert({
    where: { email },
    update: {
      passwordHash,
      role: "ADMIN",
      name: "Claire Invite Studio Admin",
    },
    create: {
      email,
      passwordHash,
      name: "Claire Invite Studio Admin",
      role: "ADMIN",
    },
  });

  console.log("");
  console.log("=================================");
  console.log("ADMIN ACCOUNT READY");
  console.log("=================================");
  console.log("Email:", admin.email);
  console.log("Role:", admin.role);
  console.log("=================================");
}

main()
  .catch((error) => {
    console.error("ADMIN CREATION FAILED:");
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
