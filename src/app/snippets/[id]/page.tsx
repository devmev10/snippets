import { db } from "@/db";
import { notFound } from "next/navigation";
interface SnippetShowPageProps {
  params: {
    id: string;
  };
}

export default async function SnippetShowPage(props: SnippetShowPageProps) {
  const snippet = await db.snippet.findFirst({
    where: { id: parseInt(props.params.id) },
  });

  return <div>Show snippet</div>;
}
