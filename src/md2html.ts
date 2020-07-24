import marked from "marked";

// todo: defines a type for cliOptions
export function md2html(md: string, cliOptions: any): string {
  return marked(md, {
    gfm: cliOptions.gfm,
  });
}
