import {serveDir} from "https://deno.land/std@0.185.0/http/file_server.ts";
import {serve} from "https://deno.land/std@0.185.0/http/mod.ts";

serve((request) => {
  return serveDir(request);
})
