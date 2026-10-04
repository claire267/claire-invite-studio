// Shared helper: every couple dashboard page needs "this couple's wedding".
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export async function getOwnWedding() {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/login");

  const wedding = await prisma.wedding.findUnique({
    where: { ownerId: (session.user as any).id },
  });
  if (!wedding) redirect("/login"); // no wedding assigned yet
  return wedding;
}
