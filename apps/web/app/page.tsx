import { prismaClient } from "db/clients";
import { json } from "stream/consumers";

export default async function Home() {
  const users=await prismaClient.user.findMany();
  return (
    <div>
      {JSON.stringify(users)}
      </div>
    
  );
}

export const revalidate=60
// or
// export const dynamic="force-dynamic"
//ye dono s static page generate nhi hoga build time pe
