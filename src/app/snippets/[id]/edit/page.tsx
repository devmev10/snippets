import { db } from "@/db";

interface SnippetEditPageProps {
  params: {
    id: string;
  };
}

export default async function SnippetEditPage(props: SnippetEditPageProps) {
  const id = parseInt(props.params.id);
  const snippet = await db.snippet.findFirst({ where: { id: id } });

  return <div>Editing snippet with id {id}</div>;
}
