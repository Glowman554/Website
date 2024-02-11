set -ex

deno task build
deno run -A https://deno.land/x/deploy/deployctl.ts deploy --project=glowman554 --exclude=.env --prod ./main.ts