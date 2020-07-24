import marked from "marked";

export function md2html(md: string, cliOptions: any): string {
  return marked(md, {
    gfm: cliOptions.gfm,
  });
}
