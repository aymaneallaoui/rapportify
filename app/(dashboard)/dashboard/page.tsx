import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

export default async function page() {
  const session = await getServerSession(authOptions);
  if (session?.user) {
    return <h2> Dashboard {session.user.username} </h2>;
  }

  return <h2> Please login to see the content </h2>;
}
