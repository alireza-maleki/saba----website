const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const hostname = "localhost";
const port = process.env.PORT || 3000;
// when using middleware `hostname` and `port` must be provided below
const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      // Be sure to pass `true` as the second argument to `url.parse`.
      // This tells it to parse the query portion of the URL.
      const parsedUrl = parse(req.url, true);
      const { pathname, query } = parsedUrl;

      if (pathname === "/a") {
        await app.render(req, res, "/a", query);
      } else if (pathname === "/b") {
        await app.render(req, res, "/b", query);
      } else {
        await handle(req, res, parsedUrl);
      }
    } catch (err) {
      console.error("Error occurred handling", req.url, err);
      res.statusCode = 500;
      res.end("internal server error");
    }
  })
    .once("error", (err) => {
      console.error(err);
      process.exit(1);
    })
    .listen(port, () => {
      console.log(`> Ready on http://${hostname}:${port}`);
    });
});

// === setting for SEO ===
const express = require("express");
const axios = require("axios");
const { SitemapStream, streamToPromise } = require("sitemap");

const app2 = express();
const PORT = process.env.PORT || 3000;

app2.get("/sitemap.xml", async (req, res) => {
  try {
    const smStream = new SitemapStream({
      hostname: "http://test.sababar.net:2024/",
    });
    const axiosResponse = await axios.get("http://test.sababar.net:2024/"); // اطلاعات مربوط به صفحات خود را از API خود بگیرید

    // اطلاعات مربوط به صفحات را به نقشه سایت اضافه کنید
    axiosResponse.data.pages.forEach((page) => {
      smStream.write({ url: page.url, lastmod: page.lastModified });
    });

    smStream.end();
    const sitemap = await streamToPromise(smStream).then((data) =>
      data.toString()
    );
    res.header("Content-Type", "application/xml");
    res.send(sitemap);
  } catch (error) {
    console.error(error);
    res.status(500).end();
  }
});

app2.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
