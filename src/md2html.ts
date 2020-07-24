import marked from "marked";

export function md2html(md: string, isGfm: boolean): string {
  return marked(md, {
    gfm: isGfm,
  });
}
