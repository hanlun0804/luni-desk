import { prisma } from "@/lib/prisma";
import { comparePassword } from "@/utils/hashPassword";

export async function authenticateUser(email: string, password: string) {
  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (user && comparePassword(password, user.password)) {
    return { id: user.id.toString(), name: user.name, email: user.email };
  }
  return null;
}