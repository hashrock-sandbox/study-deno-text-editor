import { createRouter } from "https://servestjs.org/@v0.35.0/router.ts";
const router = createRouter();
router.post("/editor", async req => {
  const form = await req.body?.text();
  const encoder = new TextEncoder();
  Deno.writeFileSync("out.txt", encoder.encode(form));
  await req.respond({
    status: 200,
    headers: new Headers({
      "content-type": "text/plain",
      "Access-Control-Allow-Origin": "*"
    }),
    body: "saved"
  });
});
router.get("/editor_load", async req => {
  await req.respond({
    status: 200,
    headers: new Headers({
      "content-type": "text/plain",
      "Access-Control-Allow-Origin": "*"
    }),
    body: new TextDecoder().decode(Deno.readFileSync("out.txt"))
  });
});
router.listen(":8899");
