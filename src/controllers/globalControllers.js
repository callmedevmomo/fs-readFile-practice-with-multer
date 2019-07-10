import fs from "fs";

export const getHome = (req, res) => {
  res.render("home", { pageTitle: "HOME" });
};

export const postHome = async (req, res) => {
  const {
    file: { path }
  } = req;
  await fs.readFile(path, "utf-8", function(error, data) {
    if (error) {
      throw error(404);
    }
    res.render("detail", { pageTitle: "detail", data: data.slice(367, -1) });
  });
};
